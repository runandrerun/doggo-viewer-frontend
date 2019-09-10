export const styles = theme => ({
  header: {
    height: "80px",
    color: "#484848",
    backgroundColor: "white",
    boxShadow: "none",
    borderBottom: "1px solid #e2e2e2"
  },
  mainIcon: {
    fontSize: "40px",
    color: "#f44336"
  },
  toolbar: {
    height: "80px"
  },
  grid: {
    display: "flex",
    alignItems: "center"
  },
  root: {
    width: "100%"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  magnifyingGlass: {
    fontWeight: 800,
    color: "black"
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 2px 4px",
    position: "relative",
    borderRadius: "4px",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "rgb(235, 235, 235)",
    borderRadius: "4px",
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: 20,
      width: "auto"
    }
  },
  searchIcon: {
    width: "50px",
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: "12px",
    paddingRight: "8px",
    paddingBottom: "12px",
    paddingLeft: "50px",
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 350
    },
    "&::placeholder": {
      color: "black",
      fontWeight: 600
    }
  },
  menubuttons: {
    fontWeight: 600
  }
});
