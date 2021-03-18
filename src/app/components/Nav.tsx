import React from "react";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemText, Typography } from "@material-ui/core";

export default class Nav extends React.Component {
    render() {
        return (
            <List component="nav">
                <ListItem button>
                    <ListItemText>
                        <Typography variant="subtitle2" align="center" color="inherit">
                            <Link to="/rants">/rants</Link>
                        </Typography>
                    </ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemText>
                        <Typography variant="subtitle2" align="center" color="inherit">
                            <Link to="/experiments">/experiments</Link>
                        </Typography>
                    </ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemText>
                        <Typography variant="subtitle2" align="center" color="inherit">
                            <Link to="/experience">/experience</Link>
                        </Typography>
                    </ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemText>
                        <Typography variant="subtitle2" align="center" color="inherit">
                            <Link to="/hobbies">/hobbies</Link>
                        </Typography>
                    </ListItemText>
                </ListItem>
            </List>
        );
    }
}