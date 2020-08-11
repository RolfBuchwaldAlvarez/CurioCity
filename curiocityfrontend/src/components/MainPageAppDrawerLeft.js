import React, {useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(() => ({

  listWrapper: {
    height: "100%",
    width: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  list: {
    width: 140,
    height: "auto",
  },
  drawerPaper: {
    height: "100%",
    backgroundColor: "rgba(94,114,141,0.6)",
  },
}));

export default function AppDrawerLeft(props) {

  const {container} = props;
  const classes = useStyles();
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({...state, [anchor]: open});
  };

  const navLinks = [
    {text: "Logout", link: "/"}
  ]

  const list = (anchor) => (
    <div
      className={classes.listWrapper}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List
        style={{
          paddingTop: 55,
          color: "rgba(255,255,255,1)"
        }}
      >
        {navLinks.map((linkItem,) => (

          <ListItem
            onClick={() => {
              window.location = linkItem.link
            }}
            button key={linkItem.text}
          >
            <ListItemText primary={linkItem.text}/>
          </ListItem>

        ))}
      </List>

    </div>
  );


  return (

    <React.Fragment key={"left"}>
      <Button onClick={toggleDrawer("left", true)}>
        {<MenuIcon style={{color: "rgba(255,255,255,1)"}}/>}
      </Button>
      <div className={classes.MuiDrawer}>
        <Drawer
          container={container}
          classes={{paper: classes.drawerPaper}}
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}>
          {list("left")}
        </Drawer>
      </div>
    </React.Fragment>

  );

}