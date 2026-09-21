import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import ScrollToTop from './components/ScrollToTop';
import Layout from '@/components/site/Layout';
import Home from '@/pages/Home';
import Ausbildung from '@/pages/Ausbildung';
import News from '@/pages/News';
import LadenPraxis from '@/pages/LadenPraxis';
import Lehrfilme from '@/pages/Lehrfilme';
import Kontakt from '@/pages/Kontakt';
import InfoTag from '@/pages/InfoTag';
import AuftragBewerten from '@/pages/AuftragBewerten';
import Impressum from '@/pages/Impressum';
import Datenschutz from '@/pages/Datenschutz';
import AGB from '@/pages/AGB';
import RegionPage from '@/pages/RegionPage';
import RegionenIndex from '@/pages/RegionenIndex';
import Banner from '@/pages/Banner';
import Blog from '@/pages/Blog';
// Add page imports here

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  // Show loading spinner while checking app public settings or auth
  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Handle authentication errors
  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      // Redirect to login automatically
      navigateToLogin();
      return null;
    }
  }

  // Render the main app
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/ausbildung" element={<Ausbildung />} />
        <Route path="/news" element={<News />} />
        <Route path="/laden-praxis" element={<LadenPraxis />} />
        <Route path="/lehrfilme" element={<Lehrfilme />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/info-tag" element={<InfoTag />} />
        <Route path="/auftrag-bewerten" element={<AuftragBewerten />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/agb" element={<AGB />} />
        <Route path="/regionen" element={<RegionenIndex />} />
        <Route path="/regionen/:slug" element={<RegionPage />} />
        <Route path="/banner" element={<Banner />} />
        <Route path="/blog" element={<Blog />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};


function App() {

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <ScrollToTop />
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App