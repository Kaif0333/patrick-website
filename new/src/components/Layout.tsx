import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Layout() {
  return (
    <div className="bg-background text-on-background w-full min-h-screen font-body relative">
      <Header />
      <div className="w-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
export default Layout;