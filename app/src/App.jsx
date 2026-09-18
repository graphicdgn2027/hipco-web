import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/home/HomePage.jsx'));
const SuperAutoPage = lazy(() => import('./pages/super-auto/SuperAutoPage.jsx'));
const SuperCargoPage = lazy(() => import('./pages/super-cargo/SuperCargoPage.jsx'));
const EviatorPage = lazy(() => import('./pages/eviator/EviatorPage.jsx'));

export default function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lastmile/superauto" element={<SuperAutoPage />} />
        <Route path="/lastmile/supercargo" element={<SuperCargoPage />} />
        <Route path="/e-scv/eviator" element={<EviatorPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}
