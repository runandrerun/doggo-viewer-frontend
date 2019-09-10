import React, { Component } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import Grid from "@material-ui/core/Grid";
import Explore from "@material-ui/icons/Explore";
import Button from "@material-ui/core/Button";
import { styles } from "../styles/filterStyling.js";

class Filter extends Component {
  render() {
    const { classes } = styles;
    console.log('Inside Filter', this.props);
    return (
      <div className={this.props.classes.root}>
        <AppBar position="fixed" className={this.props.classes.header}>
          <Toolbar className={this.props.classes.toolbar}>
            <Grid container spacing={24}>
              <Grid item className={this.props.classes.grid}>
                <Button
                  className={this.props.classes.buttons}
                  variant="outlined"
                  color="primary"
                >
                  Year
                </Button>
              </Grid>
              <Grid item className={this.props.classes.grid}>
                <div />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
};

export default withStyles(styles, { withTheme: true })(Filter);
