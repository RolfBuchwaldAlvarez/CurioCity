import React, {useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from '@material-ui/icons/Menu';
import PowerSettingsNewOutlinedIcon from '@material-ui/icons/PowerSettingsNewOutlined';

const useStyles = makeStyles(() => ({

  list: {
    width: 180,
  },
  drawerPaper: {
    height: "100%",
    backgroundColor: "rgba(94,114,141,0.8)",
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
    {text: "MySpots", link: "/main"},
    {text: "Settings", link: "/main"},
    {text: "Logout", link: "/login", icon: <PowerSettingsNewOutlinedIcon style={{color: '#000000'}}/>}
  ]
  const list = (anchor) => (
    <div
      /*className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}*/
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {navLinks.map((linkItem,) => (

          <ListItem onClick={() => {
            window.location = linkItem.link
          }
          } button key={linkItem.text}>
            <ListItemIcon>{linkItem.icon}</ListItemIcon>
            <ListItemText primary={linkItem.text}/>

          </ListItem>

        ))}
      </List>

    </div>
  );


  return (

    <React.Fragment key={"left"}>
      <Button onClick={toggleDrawer("left", true)}>{<MenuIcon style={{color: 'rgb(109 144 199)'}}/>}</Button>
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