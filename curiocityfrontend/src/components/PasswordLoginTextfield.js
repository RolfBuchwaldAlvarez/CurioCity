import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/Textfield";

const styles = {
  root: {
    backgroundColor: "rgba(255,255,255,0.1)",
    width: "300px",
    /*height: "40px",*/
    margin: 16,
    borderRadius: 4,
  },
  input: {
    color: "rgba(255,255,255,0.6)",
  },
};

function PasswordLoginTextfield(props) {
  const {classes} = props;

  return (
    <TextField
      className={classes.root}
      InputProps={{
        className: classes.input
      }}
      error
      id="outlined-error"
      rid="standard-basic"
      label="User ID"
      defaultValue=""
      variant="outlined"
    />
  );
}

PasswordLoginTextfield.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PasswordLoginTextfield);