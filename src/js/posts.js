import React from 'react';
import axios from 'axios';
import {Card} from 'semantic-ui-react';

export default class Posts extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      posts:[]
    };
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        this.setState({posts:response.data});
      });
  }

  render() {
    return(
    <div>
      <h1>Posts</h1>
      {this.state.posts
        .map(post =>
          <Card
            header={post.title}
            onClick={()=>this.props.onClick(post.id)}>
          </Card>)}
    </div>
    );
  }
}
