import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostsNew extends Component {
  render() {
    const { fields: {title, categories, content}, handleSubmit } = this.props;
    // const title = this.props.fields.title;
    console.log(title);

    // ...title
    // Destructuring of the object(title) and passes its properties into input
    //

    return (
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h3>Create A New Post</h3>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" {...title}/>
          <div className="text-help">
            {title.touched ? title.error : ''}
          </div>
        </div>

        <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-control" {...categories}/>
            <div className="text-help">
              {categories.touched ? categories.error : ''}
            </div>
        </div>

        <div className="form-group">
          <label>Content</label>
          <textarea className="form-control" {...content}/>
            <div className="text-help">
              {content.touched ? content.error : ''}
            </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = "Enter a username";
  }

  if (!values.categories) {
    errors.categories = "Enter categories";
  }

  if (!values.content) {
    errors.content = "Enter content";

  }

  return errors;
}

// connect: first argument is mapstateToprops, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapstateToprops, 3rd is mapDispatchToProps

export default reduxForm({
  form: 'PostsNewForm', //some unique token
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost })(PostsNew);

// export default PostsNew;