import React from "react";
import { styled } from "@material-ui/styles";
import { Avatar, Box, Divider, Grid } from "@material-ui/core";
import Social from "./Social";
import Nav from "./Nav";

const StyledAvatar = styled(Avatar)({
    height: 168,
    width: 168
});

class Identity extends React.Component {
    render() {
        return (
            <Grid container direction="column" justify="center" alignItems="center" spacing={4}>
                <Grid item>
                    <StyledAvatar title="me" src="https://bit.ly/3lcJVX5"/>
                </Grid>
                <Divider style={{ width: "100%", maxWidth: 132 }} />
                <Grid item>
                    <Box textAlign="center" fontFamily="Roboto" fontSize={22}>
                        Daniel Jay Marcaida
                    </Box>
                </Grid>
                <Grid item>
                    <Box textAlign="center" fontFamily="Roboto" fontSize={14}>
                        Hiya! I'm a Software Engineer from Pampanga, Philippines.
                    </Box>
                </Grid>
                <Grid item style={{ width: "100%"}}>
                    <Nav />
                </Grid>
                <Grid item>
                    <Social />
                </Grid>
            </Grid>
        );
    }
}

export default Identity;