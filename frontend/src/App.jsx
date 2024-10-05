import React, { useState } from 'react';
import './App.css';
import Home from './Home/Home';
import Menubar from './components/Menubar';
import BusBooking from './components/BusBooking';
import HotelBooking from './components/HotelBooking';
import FlightsBooking from './components/FlightsBooking';
import ProjectInfo from './components/ProjectInfo';
import Footer from './components/Footer';
import Train from'./components/Train'

function App() {
  // State to track the currently active section
  const [activeSection, setActiveSection] = useState('projectInfo'); // Initialize to show ProjectInfo

  // Handler function to update the active section
  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  // Function to render content based on the active section
  const renderContent = () => {
    switch (activeSection) {
      case 'buses':
        return <BusBooking />;
      case 'trains':
        return <Train />;
      case 'flights':
        return <FlightsBooking />;
      case 'hotels':
        return <HotelBooking />;
      case 'projectInfo':
      default:
        return <ProjectInfo />;
    }
  };

  return (
    <>
      <Home onBookMyJourneyClick={() => handleSectionChange('projectInfo')} />

      {/* Only show Menubar if the active section is Project Info */}
      {activeSection === 'projectInfo' && (
        <Menubar onSectionChange={handleSectionChange} />
      )}

      {/* Render the appropriate section content */}
      <div className="scrollable-content">
        {renderContent()}
      </div>

      <Footer />
    </>
  );
}

export default App;
