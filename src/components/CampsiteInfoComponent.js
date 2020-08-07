import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

export class CampsiteInfo extends Component {
  renderCampsite({ image, name, description }) {
    return (
      <div className='col-md-5 m-1'>
        <Card>
          <CardImg top src={image} alt={name} />
          <CardBody>
            <CardTitle>{name}</CardTitle>
            <CardText>{description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

  renderComments({ comments }) {
    if (comments) {
      return (
        <div className='col-md-5 m-1'>
          <h4>Comments</h4>
          {comments.map((comment) => {
            return (
              <>
                <p>{comment.text}</p>
                <p>
                  -- {comment.author}{' '}
                  {new Intl.DateTimeFormat('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: '2-digit',
                  }).format(new Date(Date.parse(comment.date)))}
                </p>
              </>
            );
          })}
        </div>
      );
    }

    return <div />;
  }

  // How would I destructure props?
  render(props) {
    if (this.props.campsite) {
      return (
        <>
          <div className='row'>
            {this.renderCampsite(this.props.campsite)}
            {this.renderComments(this.props.campsite)}
          </div>
        </>
      );
    }

    return <div />;
  }
}

export default CampsiteInfo;
