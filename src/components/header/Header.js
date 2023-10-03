import React from 'react';
import { Button } from '@mui/material';
import { useLocation } from 'react-router-dom';
import './Header.css';

const Header = ({ onClick }) => {
  const location = useLocation();
  const currentPage = location.pathname.replace('/', '');

  return (
    <header className="header">
      <div className="left">
      {currentPage === "weatherApp" && <div className="title">Weather App</div>}
      </div>
      <div className="center">
        {currentPage === 'taskManager' ? (
          <Button onClick={onClick} sx={{ color: 'white', backgroundColor: '#ef4100', transition: 'background-color 0.8s' }}>
            Add Task
          </Button>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
