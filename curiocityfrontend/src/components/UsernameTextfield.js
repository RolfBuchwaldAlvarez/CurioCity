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

function UsernameTextfield(props) {
  const {classes} = props;

  return (
    <div>
      <TextField
        className={classes.root}
        InputLabelProps={{
          className: classes.label
        }}
        InputProps={{
          className: classes.input
        }}
        rid="standard-basic"
        label="Username"
      />
    </div>
  );
}

UsernameTextfield.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UsernameTextfield);