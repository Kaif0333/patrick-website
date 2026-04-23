import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BackToTop from './BackToTop';
import LeadModal from './LeadModal';
import ScrollToHash from './ScrollToHash';

function Layout() {
  return (
    <div className="bg-background text-on-background w-full min-h-screen font-body relative">
      <ScrollToHash />
      <Header />
      <div className="w-full">
        <Outlet />
      </div>
      <Footer />
      <BackToTop />
      <LeadModal />
    </div>
  );
}
export default Layout;