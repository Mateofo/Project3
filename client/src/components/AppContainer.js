import React, { useState } from 'react';
import NavTabs from './NavTabs';
import MainPage from './pages/MainPage';
import SignIn from './pages/SignIn';
import BulkFood from './pages/BulkFood';
import CutFood from './pages/CutFood';
import Footer from './pages/footer';

export default function AppContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'MainPage') {
      return <MainPage />;
    }
    if (currentPage === 'CutFood') {
      return <CutFood />;
    }
    if (currentPage === 'BulkFood') {
      return <BulkFood />;
    }
    return <SignIn />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}