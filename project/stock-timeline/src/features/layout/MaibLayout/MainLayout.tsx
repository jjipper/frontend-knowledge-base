import { Header } from '../Header/Header';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="content-wrapper">
        <Outlet />
      </div>
    </>
  );
};
