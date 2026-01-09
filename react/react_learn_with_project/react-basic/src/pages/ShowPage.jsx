import axios from 'axios';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';

const ShowPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  const getPost = (id) => {
    axios.get(`http://localhost:3001/posts/${id}`).then((res) => {
      setPost(res.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    getPost(id);
  }, [id]);

  const printDate = (timestamp) => {
    return new Date(timestamp).toLocaleString();
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <div className="d-flex justify-content-between">
        <h1>{post.title}</h1>
        <div className="d-flex align-items-center">
          <Link className="btn btn-primary" to={`/blogs/${id}/edit`}>
            Edit
          </Link>
        </div>
      </div>
      <small className="text-muted ">
        Created At: {printDate(post.createdAt)}
      </small>
      <hr />
      <p>{post.body}</p>
    </div>
  );
};

export default ShowPage;
