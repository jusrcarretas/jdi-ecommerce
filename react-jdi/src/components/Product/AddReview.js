import React, { Component } from 'react';
import { Button, Modal } from 'antd';

class AddReview extends Component {
  state = {}
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
        Add Review
      </Modal>
    );
  }
}

export default AddReview;