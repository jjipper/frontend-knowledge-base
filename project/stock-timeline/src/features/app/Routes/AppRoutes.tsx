import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { ProtectedRoute } from './ProtectedRoute';
// import { Header } from 'features/shared/layout/Header/Header';
import MainPage from 'features/pages/MainPage/MainPage';
import IssuePage from 'features/pages/IssuePage/IssuePage';
import NotFoundPage from 'features/pages/NotFoundPage/NotFoundPage';
import StockPage from 'features/pages/StockPage/StockPage';
import { MainLayout } from 'features/layout/MaibLayout/MainLayout';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      {/* basePath==='/' && <Header />  // NOTE: 이런 식으로 되면 곤란해지기 때문에 Outlet 활용 */}
      {/* <div className="content-wrapper"> */}
      <Routes>
        <Route element={<MainLayout />}>
          {/* NOTE: 루트까지 봄 */}
          <Route path="/" element={<MainPage />} />
          <Route path="/issue" element={<IssuePage />}>
            {/* <Route path=":id" element={<IssuePage />} /> */}
          </Route>
          <Route path="/stock" element={<StockPage />}>
            {/* <Route path=":ticker" element={<StockPage />} /> */}
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>

        {/* <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        /> */}
      </Routes>
      {/* </div> */}
    </BrowserRouter>
  );
};
