import React from 'react';
import { Grid } from 'semantic-ui-react'
import Posts from './posts';
import Comments from './comments';

export default class App extends React.Component {
  render() {
    return (<Grid columns={2}>
            <Grid.Column>
              <Posts/>
            </Grid.Column>

            <Grid.Column>
              <Comments/>
            </Grid.Column>
    </Grid>);
  }
}