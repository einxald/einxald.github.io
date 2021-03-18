import React from "react";
import { List, ListItem, ListItemText, Typography } from "@material-ui/core";

export default class Nav extends React.Component {
    render() {
        return (
            <List component="nav">
                <ListItem button component="a" href="#">
                    <ListItemText>
                        <Typography variant="subtitle2" align="center" color="primary">/rants</Typography>
                    </ListItemText>
                </ListItem>
                <ListItem button component="a" href="#">
                    <ListItemText>
                        <Typography variant="subtitle2" align="center" color="primary">/experiments</Typography>
                    </ListItemText>
                </ListItem>
                <ListItem button component="a" href="#">
                    <ListItemText>
                        <Typography variant="subtitle2" align="center" color="primary">/experience</Typography>
                    </ListItemText>
                </ListItem>
                <ListItem button component="a" href="#">
                    <ListItemText>
                        <Typography variant="subtitle2" align="center" color="primary">/hobbies</Typography>
                    </ListItemText>
                </ListItem>
            </List>
        );
    }
}