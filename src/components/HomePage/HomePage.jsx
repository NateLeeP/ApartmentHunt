import React, { useState } from 'react';
import { Login, LoginModal } from '../Authentication/index';
import HomePageSearch from './Search.jsx';
import './styles/homelogin.css';

const HomePage = ({ setSearchValue }) => {
  const [clickedLogin, setClickedLogin] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (boolean) => {
    setClickedLogin(true);
    setModalOpen(boolean);
  };

  return (
    <div className='homepage-container'>
      <div className='top-container'>
        <div className='container'>
          <h1 className='Sign-In' onClick={() => openModal(true)}>
            Log In
          </h1>
          {clickedLogin ? (
            <LoginModal
              Login={<Login />}
              modalOpen={modalOpen}
              openModal={openModal}
            />
          ) : (
            ''
          )}
        </div>
        <div>
          <h1 className='Logo'>Apartment Hunt</h1>
          <p className='Slogan'>
            Smarter apartment search. Quality apartments you'll want to rent.
          </p>
        </div>
        <HomePageSearch setSearchValue={ setSearchValue } />
      </div>
      <div className='button-container'></div>
    </div>
  );
};

export default HomePage;
