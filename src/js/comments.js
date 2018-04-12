import React from 'react';
import { Card } from 'semantic-ui-react'


export default class Comments extends React.Component {
  render() {
    return <div>
      <h1>Comments</h1>
      {this.props.comments.map(comment =>
        <Card header={comment.body}></Card>)}
    </div>

  }
}
