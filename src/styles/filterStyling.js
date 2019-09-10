export const styles = theme => ({
  header: {
    height: "65px",
    // color: "#FA7268",
    color: "#f44336",
    backgroundColor: "white",
    boxShadow: "none",
    borderBottom: "1px solid #e2e2e2",
    marginTop: 80
  },
  toolbar: {
    height: "65px",
    display: "flex",
    justifyContent: "space-between",
    padding: "0 85px"
  },
  grid: {
    display: "flex",
    alignItems: "center"
  },
  root: {
    width: "100%"
  },
  buttons: {
    margin: "0 0px",
    minHeight: 20,
    padding: "5px 10px"
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  }
});
