import React, {useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import clsx from "clsx";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from "@material-ui/core/Grid";
import PeopleOutlinedIcon from '@material-ui/icons/PeopleOutlined';
import MoodIcon from '@material-ui/icons/Mood';
import PostAddOutlinedIcon from '@material-ui/icons/PostAddOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import PowerSettingsNewOutlinedIcon from '@material-ui/icons/PowerSettingsNewOutlined';

const useStyles = makeStyles(() => ({

  root: {
    justifyContent: "center",
    display: "flex",
    alignSelf: "center",

  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  drawerPaper: {
    height: "100%",
    backgroundColor: "#f7f5ed"
  },
  image: {
    margin: "15px 0px",
    alignSelf: "center",
    justifyContent: "center",
  },
  iconColor: {
    color: '#225aba'
  }

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
    {text: "Home", link: "/", icon: <HomeOutlinedIcon className={classes.iconColor}/>},
    {text: "My friends", link: "/friends", icon: <PeopleOutlinedIcon className={classes.iconColor}/>},
    {text: "My Booster", link: "/list", icon: <MoodIcon className={classes.iconColor}/>},
    {text: "Add Booster", link: "/add", icon: <PostAddOutlinedIcon className={classes.iconColor}/>},
    {text: "FAQ", link: "/faq", icon: <HelpOutlineOutlinedIcon className={classes.iconColor}/>},
    {text: "Logout", link: "/logout", icon: <PowerSettingsNewOutlinedIcon style={{color: '#c20909'}}/>}
  ]
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Grid container justify="center">

          <img className={classes.image} src={"/logo.png"} alt="logo_small" width={"40%"} height={"40%"}/>
        </Grid>
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