import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import {TextField} from "@material-ui/core";

const styles = {
  root: {
    backgroundColor: "rgba(255,255,255,0.1)",
    width: 300,
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
    <div
      style={{
        position: "absolute",
        top: 350,
      }}
    >
      <TextField
        className={classes.root}
        InputProps={{
          className: classes.input
        }}
        error
        rid="standard-basic"
        label="User ID"
        defaultValue=""
        variant="outlined"
      />
    </div>
  );
}

PasswordLoginTextfield.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PasswordLoginTextfield);