import React, { Component, Fragment } from 'react';
import ReviewVotes from './ReviewVotes';
import { Icon, Button, Divider, Rate } from 'antd';
import axios from 'axios';

class Review extends Component {
  state = {
    review: null,
    upvoted: false,
    downvoted: false,
    sending: false
  }

  // Formats Date String to Locale String
  dateToLocaleString(currDate) {
    return new Date(currDate).toLocaleString();
  }

  // Send a Patch request to update the vote_count
  // by the number passed as the parameter
  postVote = votes => {
    this.setState({
      sending: true
    })

    const url = 'http://localhost:8000/api/reviews/' + this.state.review.id + '/';

    axios.patch(url, {
      vote_count: votes
    })
      .then(response => {
        this.setState({
          review: response.data
        })
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        this.setState({
          sending: false
        })
      });
  }

  // Logic when user chooses to upvote the Review
  // If the user previously selected Downvote, it will
  // increase the votes by two, else it would increase it by 1
  onUpvote = e => {
    let count;

    if (this.state.upvoted) {
      count = this.state.review.vote_count - 1;

      this.setState({
        upvoted: false
      }, () => {
        this.postVote(count);
      })
    }
    else {
      if (this.state.downvoted) {
        count = this.state.review.vote_count + 2;
      }
      else {
        count = this.state.review.vote_count + 1;
      }

      this.setState({
        upvoted: true,
        downvoted: false
      }, () => {
        this.postVote(count);
      })
    }
  }

  // Logic when user chooses to downvote the Review
  // If the user previously selected Upvote, it will
  // reduce the votes by two, else it would reduce it by 1
  onDownvote = e => {
    let count;

    if (this.state.downvoted) {
      count = this.state.review.vote_count + 1;

      this.setState({
        downvoted: false
      }, () => {
        this.postVote(count);
      })
    }
    else {
      if (this.state.upvoted) {
        count = this.state.review.vote_count - 2;
      }
      else {
        count = this.state.review.vote_count - 1;
      }

      this.setState({
        downvoted: true,
        upvoted: false
      }, () => {
        this.postVote(count);
      })
    }
  }

  isDownvoteAvailable = () => {
    // Disable downvote if sending
    // Disable downvote if votes is 0 and it's not downvoted
    // Disable downvote if it is upvoted and the the number of votes is 1
    if (this.state.sending || 
        (!this.state.downvoted && this.state.review.vote_count === 0) || 
        (this.state.upvoted && this.state.review.vote_count === 1)) {
      return true;
    }
    else {
      return false;
    }
  }

  // Convert review prop into state to allow
  // updating its own values (for example vote_count)
  updateReviewState = () => {
    this.setState({
      review: this.props.review
    })
  }

  componentDidMount() {
    this.updateReviewState();
  }

  renderReview() {
    return (
      <div>
        <Divider type="horizontal" />
        <h6 className="text-bold">{this.state.review.title}</h6>
        <Rate disabled defaultValue={this.state.review.rating} />
        <p className="margin-top-10">{this.dateToLocaleString(this.state.review.date_created)}</p>
        <p>{this.state.review.comment}</p>
        <ReviewVotes voteCount={this.state.review.vote_count} />
        <div>
          <Button 
            className="margin-right-10" 
            onClick={this.onUpvote} 
            disabled={this.state.sending}>
            <Icon 
              type="like" 
              theme="filled" 
              style={this.state.upvoted ? { color: '#80d38e' } : {}} />
          </Button>
          <Button 
            onClick={this.onDownvote} 
            disabled={this.isDownvoteAvailable()}>
            <Icon 
              type="dislike" 
              theme="filled" 
              style={this.state.downvoted ? { color: '#ee4d2d' } : {}} />
          </Button>
        </div>
      </div>
    )
  }

  render() {
    return (
      <Fragment>
        {this.state.review ? this.renderReview() : null}
      </Fragment>
    );
  }
}

export default Review;