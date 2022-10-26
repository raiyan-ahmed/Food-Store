import React from 'react';
import Logo from '../Logo';
import './styles.css';
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai';
import { BsPinterest } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <div className='top'>
        <p>
          We're a team of Professional cooks who are excited about their food,
          amazing skills and expertiness in cooking.
        </p>
        <Logo />
      </div>
      <div className='bottom'>
        <div>
          <AiFillFacebook />
          <AiFillInstagram />
          <AiFillTwitterSquare />
          <BsPinterest />
        </div>
        <p>Raiyan © 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
