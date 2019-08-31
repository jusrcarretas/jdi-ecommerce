import React, { Component } from 'react';
import { Button, Modal } from 'antd';
import './AddReview.css';
import AddReviewHeader from './AddReviewHeader';

class AddReview extends Component {
  state = {
    rating: 5
  }

  // Update rating state based on AddReview modal
  handleRatingChange = newRating => {
    this.setState({
      rating: newRating
    });
  }

  render() {
    return (
      <Modal
        title="New Review"
        visible={this.props.visible}
        onOk={this.props.handleOk}
        onCancel={this.props.handleCancel}
        footer={[
          <Button 
            key="back" 
            onClick={this.props.handleCancel}>
            Cancel
          </Button>,
          <Button 
            key="ok" 
            type="primary"
            onClick={this.props.handleOk}>
            Submit
          </Button>
        ]}>
        <AddReviewHeader
          productName={this.props.productName}
          rating={this.state.rating}
          handleRatingChange={this.handleRatingChange}/>
      </Modal>
    );
  }
}

export default AddReview;