import { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router';
import { bool } from 'prop-types';

const BlogForm = ({ editing = false }) => {
  const history = useHistory();
  const { id } = useParams();

  const [title, setTitle] = useState('');
  const [originalTitle, setOriginalTitle] = useState('');
  const [body, setBody] = useState('');
  const [originalBody, setOriginalBody] = useState('');

  useEffect(() => {
    if (editing) {
    axios.get(`http://localhost:3001/posts/${id}`).then((res) => {
      setTitle(res.data.title);
        setOriginalTitle(res.data.title);
      setBody(res.data.body);
        setOriginalBody(res.data.body);
    });
    }
  }, [id, editing]);

  const idEdited = () => {
    return (
      title !== originalTitle ||
      body !== originalBody ||
      publish !== originalPublish
    );
  };

  const goBack = () => {
    if (editing) {
      history.push(`/blogs/${id}`);
    } else {
      history.push('/blogs');
    }
  };

  const onSubmit = () => {
    if (editing) {
      axios
        .patch(`http://localhost:3001/posts/${id}`, {
          title,
          body,
          publish,
        })
        .then((res) => {
          history.push(`/blogs/${id}`);
        });
    } else {
    axios
      .post('http://localhost:3001/posts', {
        title,
        body,
        createdAt: Date.now(),
      })
      .then(() => {
        history.push('/blogs');
      });
    }
  };

  return (
    <div>
      <h1>{editing ? 'Edit' : 'Create'} a blog post</h1>
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Body</label>
        <textarea
          value={body}
          onChange={(event) => {
            setBody(event.target.value);
          }}
          rows={10}
          className="form-control"
        />
      </div>
      <button
        onClick={onSubmit}
        className="btn btn-primary"
        disabled={editing && !idEdited()}
      >
        {editing ? 'Edit' : 'Post'}
      </button>
      <button className="btn btn-danger ms-2" onClick={goBack}>
        Cancel
      </button>
    </div>
  );
};

BlogForm.propTypes = {
  editing: bool,
};

export default BlogForm;
