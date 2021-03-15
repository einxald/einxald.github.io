import React from "react";
import { Grid, Link } from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";

class Social extends React.Component {
    render() {
        return (
            <Grid container justify="center" alignItems="center">
                <Grid item>
                    <Link href="mailto:marcaidadj@gmail.com" color="inherit">
                        <MailIcon fontSize="large" />
                    </Link>
                </Grid>
                <Grid item>
                    <Link href="https://www.linkedin.com/in/daniel-jay-marcaida-7bb78b146/" color="inherit">
                        <LinkedInIcon fontSize="large" />
                    </Link>
                </Grid>
                <Grid item>
                    <Link href="https://www.facebook.com/zerothdemon" color="inherit">
                        <FacebookIcon fontSize="large" />
                    </Link>
                </Grid>
            </Grid>
        );
    }
}

export default Social