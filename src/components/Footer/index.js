import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href='https://www.alura.com.br/'>
        <img
          src='https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg'
          alt='Logo Alura'
        />
      </a>
      <p>
        This site is fan-made and not affiliated with Grinding Gear Games in any
        way.
      </p>
      <p>
        Proudly build during
        <a href='https://www.alura.com.br/'>Imersão React da Alura</a>
      </p>
    </FooterBase>
  );
}

export default Footer;
