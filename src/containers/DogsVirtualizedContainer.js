import React, { Component, PureComponent } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import DogCard from "../components/DogCard.js";
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList as List } from "react-window";
import memoize from "memoize-one";
import { styles } from "../styles/virtualizedStyling.js";
import Pagination from '../components/Pagination.js';
import Typography from "@material-ui/core/Typography";

const CARD_SIZE = 340;

const { classes } = styles;

class Row extends PureComponent {
  render() {
    const { data, index, style } = this.props;
    const { classes, itemsPerRow, dogs } = data;

    const items = [];
    const fromIndex = index * itemsPerRow;
    const toIndex = Math.min(fromIndex + itemsPerRow, dogs.length);

    for (let i = fromIndex; i < toIndex; i++) {
      items.push(
        <DogCard key={i} dog={dogs[i]} />
      );
    }

    return (
      <div className={classes.Row} style={style}>
        {items}
      </div>
    );
  }
}

class DogsGrid extends PureComponent {
  getItemData = memoize((classes, itemsPerRow, dogs) => ({
    classes,
    itemsPerRow,
    dogs
  }))

  render() {
    const { dogs, classes } = this.props;

    return (
      <div style={{ marginTop: "200px", height: "80vh" }}>
        <AutoSizer>
          {({ height, width }) => {
            const itemsPerRow = Math.floor(width / CARD_SIZE) || 1;
            const rowCount = Math.ceil(dogs.length / itemsPerRow);
            const itemData = this.getItemData(classes, itemsPerRow, dogs);

            return (
              <div>
                <List
                  height={height}
                  itemCount={rowCount}
                  itemData={itemData}
                  itemSize={CARD_SIZE}
                  width={width}
                >
                  {Row}
                </List>
              </div>
            );
          }}
        </AutoSizer>
      </div>
    );
  }
}

DogsGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DogsGrid);
