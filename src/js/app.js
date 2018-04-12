import React from 'react';
import { Grid } from 'semantic-ui-react'
import Posts from './posts';
import Comments from './comments';
import axios from 'axios';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      comments: [],
    };
    this.getComments = this.getComments.bind(this);
  }
  getComments(currentPostId) {
    axios.get('https://jsonplaceholder.typicode.com/comments?postId=' + currentPostId)
      .then((response)=>{
        this.setState({comments: response.data})
      })
  }
  render() {

    return (<Grid columns={2}>
            <Grid.Column>
              <Posts onClick={this.getComments}/>
            </Grid.Column>

            <Grid.Column>
              <Comments comments={this.state.comments}/>
            </Grid.Column>
    </Grid>);
  }
}