import React, { Component } from 'react';

class CommentBox extends Component {
  constructor() {
    super();
    this.state = {
      author: '',
      content: '',
    }
  }

  handleChange = (event) => {
    const target = event.target;
    console.log(target.id);

    this.setState(prevState => ({
      ...prevState,
      [target.id]: target.value,
    }));
  }

  render() {
    const { onSubmit } = this.props;
    return (
      <div className="comment-form-wrap pt-5">
        <h3 className="mb-5">Leave a comment</h3>
        <form className="p-5 bg-light">
          <div className="form-group">
            <label htmlFor="author">Name *</label>
            <input type="text" className="form-control" id="author" onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="content">Message</label>
            <textarea name="" id="content" cols="30" rows="10" className="form-control" onChange={this.handleChange}></textarea>
          </div>
          <div className="form-group">
            <button className="btn btn-primary" onClick={(e) => { e.preventDefault(); onSubmit(this.state); }}>Post Comment</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CommentBox;
