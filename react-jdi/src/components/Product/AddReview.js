import React, { Component } from 'react';
import { Form, Input, Button, Modal } from 'antd';
import './AddReview.css';
import AddReviewHeader from './AddReviewHeader';

class AddReview extends Component {
  state = {
    rating: 5,
    title: null,
    comment: null
  }

  // Update rating state based on AddReview modal
  handleRatingChange = newRating => {
    this.setState({
      rating: newRating
    });
  }

  handleTextChanged = e => {
    this.setState({
      [e.target.id]: e.target.value
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
            form="form-add-review"
            htmlType="submit">
            Submit
          </Button>
        ]}>
        <AddReviewHeader
          productName={this.props.productName}
          rating={this.state.rating}
          handleRatingChange={this.handleRatingChange} />

        <Form id="form-add-review" onSubmit={this.props.handleOk}>
          <Form.Item label="Title">
            <Input
              type="text"
              id="title"
              value={this.state.title}
              onChange={this.handleTextChanged}
              placeholder="Summarize your review in a title"
              required />
          </Form.Item>
          <Form.Item label="Review">
            <Input.TextArea
              value={this.state.comment}
              id="comment"
              placeholder="Tell us what you thought about our product"
              onChange={this.handleTextChanged}
              autosize={{ minRows: 3, maxRows: 5 }}
              required
            />
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

export default AddReview;