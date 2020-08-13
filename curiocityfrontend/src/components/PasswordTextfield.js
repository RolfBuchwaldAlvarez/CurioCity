import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import {TextField} from "@material-ui/core";

const styles = {
  root: {
    background: "none",
    width: "300px",
    height: "40px",
    marginBottom: 16,
  },
  input: {
    color: "white",
  },
  label: {
    color: "white"
  }
};

function PasswordTextfield(props) {
  const {classes} = props;

  return (
    <TextField
      className={classes.root}
      InputLabelProps={{
        className: classes.label
      }}
      InputProps={{
        className: classes.input
      }}
      rid="standard-basic"
      label="Password"
      type="password"
    />
  );
}

PasswordTextfield.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PasswordTextfield);