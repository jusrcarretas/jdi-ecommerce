import React, { Component } from 'react';
import { Form, Input, Button, Modal } from 'antd';
import AddReviewHeader from './AddReviewHeader';
import axios from 'axios';
import './AddReview.css';

class AddReview extends Component {
  state = {
    rating: 5,
    title: null,
    comment: null,
    sending: false
  }

  // Update rating state based on AddReview modal
  handleRatingChange = newRating => {
    this.setState({
      rating: newRating
    });
  }


  // Handle input textchanges
  handleTextChanged = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  // Post Review
  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      sending: true
    });

    const url = 'http://localhost:8000/api/reviews/';

    axios.post(url, {
      title: this.state.title,
      comment: this.state.comment,
      rating: this.state.rating,
      product: this.props.productId
    })
      .then((response) => {
        // Send back response data to handleOk
        // to append new review to the list
        this.props.handleOk(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => {
        // Reset states to empty form after completion
        this.setState({
          rating: 5,
          title: null,
          comment: null,
          sending: false
        })
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
            htmlType="submit"
            loading={this.state.sending}>
            Submit
          </Button>
        ]}>
        <AddReviewHeader
          productName={this.props.productName}
          rating={this.state.rating}
          handleRatingChange={this.handleRatingChange} />

        <Form id="form-add-review" onSubmit={this.handleSubmit}>
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