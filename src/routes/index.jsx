import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import { ROUTES } from './paths';

const HomePage = lazy(() => import('@/pages/Home'));
const SuperAutoPage = lazy(() => import('@/pages/SuperAuto'));
const SuperCargoPage = lazy(() => import('@/pages/SuperCargo'));
const EviatorPage = lazy(() => import('@/pages/Eviator'));
const AboutPage = lazy(() => import('@/pages/About'));
const ContactPage = lazy(() => import('@/pages/Contact'));
const FindDealerPage = lazy(() => import('@/pages/FindDealer'));

export default function AppRoutes() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={ROUTES.home} element={<HomePage />} />
          <Route path={ROUTES.superAuto} element={<SuperAutoPage />} />
          <Route path={ROUTES.superCargo} element={<SuperCargoPage />} />
          <Route path={ROUTES.eviator} element={<EviatorPage />} />
          <Route path={ROUTES.about} element={<AboutPage />} />
          <Route path={ROUTES.contact} element={<ContactPage />} />
          <Route path={ROUTES.findDealer} element={<FindDealerPage />} />
          <Route path="*" element={<Navigate to={ROUTES.home} replace />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
