import BlogList from '../components/BlogList';

const ListPage = () => {
  return (
    <div>
      <div className="d-flex mb-2">
        <h1>Blogs</h1>
      </div>
      <BlogList />
    </div>
  );
};

export default ListPage;
