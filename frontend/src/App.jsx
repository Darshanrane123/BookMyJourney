import React, { useState } from 'react';
import './App.css';
import Home from './Home/Home';
import Menubar from './components/Menubar';
import BusBooking from './components/BusBooking';
import HotelBooking from './components/HotelBooking';
import FlightsBooking from './components/FlightsBooking';
import ProjectInfo from './components/ProjectInfo';
import Footer from './components/Footer';
import Train from'./components/Train';
import Hotels from './components/Hotels';
import Tourist from './Tourism/Tourist';

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
      case 'tourist':
        return <Tourist />;
      case 'hotels':
        return <Hotels />;
      case 'projectInfo':
      default:
        return <><ProjectInfo /> 
                <Footer/>
        </>;
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

      
    </>
  );
}

export default App;
