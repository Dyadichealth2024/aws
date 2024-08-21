import React, { useState } from 'react';
// project-imports
import Hero from 'sections/landing/Header';
import Technologies from 'sections/landing/Technologies';
import Combo from 'sections/landing/Combo';
import Apps from 'sections/landing/Apps';
import Free from 'sections/landing/Free';
import Articles from './Articles'; 
import Testimonial from 'sections/landing/Testimonial';
import Partner from 'sections/landing/Partner';
import ContactUs from 'sections/landing/ContactUs';

// ==============================|| LANDING PAGE ||============================== //

export default function Landing() {
  const [view, setView] = useState('combo'); // State to track the current view

  const handleToggle = (selectedView) => {
    if (view !== selectedView) {
      setView(selectedView);
    }
  };

  const styles = {
    sectionContainer: {
      padding: '20px', // Add some padding around the section content
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '10px',
      marginTop: '20px', // Add margin on top to separate buttons from the content above
    },
    button: {
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
      backgroundColor: '#007bff',
      color: '#fff',
      fontSize: '16px',
      transition: 'background-color 0.3s ease',
    },
    buttonDisabled: {
      backgroundColor: '#6c757d',
      cursor: 'not-allowed',
    },
  };

  return (
    <React.Fragment>
      <Hero />
      <section id="combo" style={styles.sectionContainer}>
        {/* Conditional content rendering based on selected view */}
        {view === 'combo' ? <Combo /> : <Articles />}
        <div style={styles.buttonContainer}>
          <button
            onClick={() => handleToggle('combo')}
            disabled={view === 'combo'}
            style={{
              ...styles.button,
              ...(view === 'combo' && styles.buttonDisabled),
            }}
          >
            Videos
          </button>
          <button
            onClick={() => handleToggle('articles')}
            disabled={view === 'articles'}
            style={{
              ...styles.button,
              ...(view === 'articles' && styles.buttonDisabled),
            }}
          >
            Articles
          </button>
        </div>
      </section>
      <section id="technologies">
        <Technologies />
      </section>
      <section id="apps">
        <Apps />
      </section>
      <Free />
      {/* Uncomment these sections if you want to use them */}
      {/* 
      <Testimonial />
      <Partner />
      <ContactUs /> 
      */}
    </React.Fragment>
  );
}
