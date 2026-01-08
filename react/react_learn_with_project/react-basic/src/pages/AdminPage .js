import BlogList from '../components/BlogList';
import { Link } from 'react-router-dom';

const AdminPage = () => {
  return (
    <div>
      <div className="d-flex justify-content-between mb-2">
        <h1>Admin</h1>
        <div>
          <Link to="/blogs/create" className="btn btn-success">
            Create New
          </Link>
        </div>
      </div>
      <BlogList isAdmin={true} />
    </div>
  );
};

export default AdminPage;
