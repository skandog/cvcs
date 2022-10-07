import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import SkillsList from './components/SkillsList';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <skillsContext.Provider value={(Skills, setSkills)}>
      <App />
    </skillsContext.Provider>
  </React.StrictMode>,
);
