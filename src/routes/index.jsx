import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import { ROUTES } from './paths';

const HomePage = lazy(() => import('@/pages/Home'));
const SuperAutoPage = lazy(() => import('@/pages/SuperAuto'));
const SuperCargoPage = lazy(() => import('@/pages/SuperCargo'));
const EviatorPage = lazy(() => import('@/pages/Eviator'));
const AboutPage = lazy(() => import('@/pages/about'));
const ContactPage = lazy(() => import('@/pages/Contact'));
const FindDealerPage = lazy(() => import('@/pages/FindDealer'));
const BookTestDrivePage = lazy(() => import('@/pages/BookTestDrive'));

// New pages
const BecomeDealerPage = lazy(() => import('@/pages/BecomeDealer'));
const SitemapPage = lazy(() => import('@/pages/Sitemap'));
const MediaAccoladesPage = lazy(() => import('@/pages/MediaAccolades'));
const PrivacyPage = lazy(() => import('@/pages/Privacy'));
const PrivacyPowerDockPage = lazy(() => import('@/pages/PrivacyPowerDock'));
const NotFoundPage = lazy(() => import('@/pages/NotFound'));

/** Thin skeleton shown while a lazy page chunk loads (between navigations). */
function PageSkeleton() {
  return (
    <div
      style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      aria-hidden="true"
    >
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: '50%',
          border: '3px solid rgba(31,184,31,0.15)',
          borderTopColor: '#1fb81f',
          animation: 'spin 0.7s linear infinite',
        }}
      />
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );
}

export default function AppRoutes() {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={ROUTES.home} element={<HomePage />} />
          <Route path={ROUTES.superAuto} element={<SuperAutoPage />} />
          <Route path={ROUTES.superCargo} element={<SuperCargoPage />} />
          <Route path={ROUTES.eviator} element={<EviatorPage />} />
          <Route path={ROUTES.about} element={<AboutPage />} />
          <Route path={ROUTES.contact} element={<ContactPage />} />
          <Route path={ROUTES.findDealer} element={<FindDealerPage />} />
          <Route path={ROUTES.bookTestDrive} element={<BookTestDrivePage />} />
          <Route path={ROUTES.becomeDealer} element={<BecomeDealerPage />} />
          <Route path={ROUTES.sitemap} element={<SitemapPage />} />
          <Route path={ROUTES.mediaAccolades} element={<MediaAccoladesPage />} />
          <Route path={ROUTES.privacy} element={<PrivacyPage />} />
          <Route path={ROUTES.privacyPowerDock} element={<PrivacyPowerDockPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
