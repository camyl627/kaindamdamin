import { useState } from 'react';
import './meals.css';

export default function Meals() {
  const [activeTab, setActiveTab] = useState('saved');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="meals-container">
      <div className="meals-tabs">
        <button
          className={`meals-tab-button ${activeTab === 'saved' ? 'active' : ''}`}
          onClick={() => handleTabChange('saved')}
        >
          Saved Meals
        </button>
        <button
          className={`meals-tab-button ${activeTab === 'favorites' ? 'active' : ''}`}
          onClick={() => handleTabChange('favorites')}
        >
          Favorite Meals
        </button>
      </div>

      <div className="meals-content">
        {activeTab === 'saved' && (
          <div className="meals-tab-panel">
            <h3>Saved Meals</h3>
            {/* Replace with actual saved meals data */}
            <p>No saved meals yet.</p>
          </div>
        )}
        {activeTab === 'favorites' && (
          <div className="meals-tab-panel">
            <h3>Favorite Meals</h3>
            {/* Replace with actual favorite meals data */}
            <p>No favorite meals yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
