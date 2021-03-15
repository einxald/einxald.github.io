import { Box, Container, Grid } from '@material-ui/core';
import Identity from "../src/components/Identity";
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <Container className="App" maxWidth="md">
        <Box my={10}>
          <Grid container spacing={3}>
            <Grid item md={3} xs={12}>
              <Identity />
            </Grid>
            <Grid item md={9} xs={12}>
              <Box fontFamily="Roboto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu vehicula sapien, eu sodales risus. Sed sem orci, iaculis nec sem a, posuere gravida tortor. Maecenas volutpat hendrerit sem sed mattis. Pellentesque aliquet est diam, quis condimentum dolor ultricies eget. Cras velit leo, cursus eget massa a, pulvinar venenatis tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum placerat, nisi a egestas semper, libero sem bibendum dolor, et hendrerit est neque non enim. Nunc imperdiet pretium justo, sit amet cursus libero pulvinar at. Mauris viverra, urna non dapibus tempus, eros nisi ultrices velit, sed pellentesque tellus erat id enim. Fusce ullamcorper est velit. Sed nulla est, sagittis et purus et, laoreet faucibus ex. Suspendisse potenti.

  Curabitur nec sagittis risus, quis tincidunt sem. Suspendisse potenti. Nullam ut ultrices ante. Morbi ut sollicitudin erat, a faucibus tortor. Etiam vitae enim id nisi vestibulum fermentum. Vestibulum semper pulvinar nulla, at fringilla lectus interdum vitae. Nullam ac nunc vestibulum, fermentum ligula fringilla, consequat ligula. Ut ut orci dolor. Nam porta mauris quis mi posuere, at condimentum eros finibus. Sed sapien enim, pulvinar a ornare suscipit, lobortis tristique nulla. Proin interdum aliquet orci, at molestie sapien finibus non. Vestibulum mi dui, lobortis in ultrices in, ultricies nec ligula. Nam laoreet nibh quis eros condimentum, ac sagittis dui iaculis. Quisque nulla neque, dapibus quis metus sit amet, aliquet auctor lorem. Sed sed dignissim risus. Phasellus lobortis turpis at maximus tempus.

  Quisque eleifend volutpat fermentum. Phasellus at pellentesque erat. Praesent tincidunt consectetur risus, in lobortis eros. Maecenas sagittis ligula a ultricies commodo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed aliquam est quis neque pulvinar maximus. In eu nunc ut justo congue aliquet ac dictum ante. Integer luctus imperdiet luctus. Sed et vehicula orci, nec mollis eros. Etiam convallis malesuada tellus, ac aliquam mauris faucibus id. Donec sodales elementum pulvinar. Suspendisse potenti. Donec pretium in ex non maximus. Mauris nulla orci, tincidunt nec ipsum at, porta dictum leo. Morbi eu viverra ex. Integer finibus lectus magna, iaculis laoreet velit mollis non.

  Nunc ut turpis massa. Fusce aliquam volutpat lectus, eget sodales lacus elementum vitae. Cras varius magna nec mollis cursus. Sed nulla erat, venenatis non diam a, iaculis porttitor metus. Suspendisse sit amet rutrum ipsum. Praesent sit amet tempor arcu. Fusce suscipit accumsan rhoncus. Nam aliquet elit odio, quis semper tellus pellentesque molestie. In maximus nec lacus vitae lacinia. Nunc hendrerit massa non ex lobortis, nec fermentum ex ultricies. Vivamus scelerisque elementum quam nec varius. Cras eu purus id velit bibendum cursus nec et nisl.

  In ut pellentesque enim. Nulla dictum id purus vitae maximus. Praesent ligula odio, hendrerit nec rhoncus eget, elementum nec mauris. Integer non sem mi. Vestibulum maximus placerat erat et tincidunt. In maximus pellentesque nisi id aliquet. Nulla eleifend sem eu dolor rhoncus dapibus.
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    );
  }
}

export default App;
