// components/Layout.js
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col bg-color work-sans-regular text-white text-justify">
      <Navbar />
      <main className="flex-grow max-w-[1280px] mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
