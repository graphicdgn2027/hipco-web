import SideActions from '@/components/common/SideActions';
import usePageMeta from '@/hooks/usePageMeta';
import { AppLink } from '@/components/ui/AppLink';
import { ROUTES } from '@/routes/paths';

const meta = {
  title: 'Page Not Found | Montra Electric',
  description: 'The page you are looking for could not be found.',
  bodyClass: 'body-4',
};

export default function NotFoundPage() {
  usePageMeta(meta);

  return (
    <main className="ct-page" style={{ 
      minHeight: '60vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      flexDirection: 'column', 
      textAlign: 'center', 
      padding: '40px' 
    }}>
      <SideActions variant="home" />
      <h1 style={{ fontSize: '4rem', marginBottom: '16px', fontWeight: 'bold' }}>404</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '32px' }}>The page you are looking for doesn't exist or has been moved.</p>
      <AppLink href={ROUTES.home} className="ct-btn ct-btn--primary" style={{ padding: '12px 24px', backgroundColor: '#0056b3', color: 'white', borderRadius: '4px', textDecoration: 'none' }}>
        Return to Home
      </AppLink>
    </main>
  );
}
