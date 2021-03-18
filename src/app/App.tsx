import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Box, Container, Grid } from '@material-ui/core';
import Identity from "./components/Identity";

class App extends React.Component {
  render() {
    return (
      <Container className="App" maxWidth="md">
        <BrowserRouter>
          <Box my={10}>
            <Grid container spacing={3}>
              <Grid item md={3} xs={12}>
                <Identity />
              </Grid>
              <Grid item md={9} xs={12}>
                <Route exact path={"/"} render={() => { return (<div>Welcome!</div>); }} />
                <Route path={"/rants"} render={() => { return (<div>Rants</div>); }} />
                <Route path={"/experiments"} render={() => { return (<div>Experiments</div>); }} />
                <Route path={"/experience"} render={() => { return (<div>Experience</div>); }} />
                <Route path={"/hobbies"} render={() => { return (<div>Hobbies</div>); }} />
              </Grid>
            </Grid>
          </Box>
        </BrowserRouter>
      </Container>
    );
  }
}

export default App;
