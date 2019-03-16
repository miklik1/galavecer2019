import React, { Component } from 'react';
import Parallax from 'react-rellax';
import zaclona_prava from './img/zaclona_prava.png';
import zaclona_leva from './img/zaclona_leva.png';
import newyork from './img/newyork.png';
import man from './img/man.png';
import moon from './img/moon.png';
import napis from './img/napis.png';
import text from './img/text.png';
import tlacitko from './img/tlacitko.png';
import fai from './img/logos/fai.jpg';
import fame from './img/logos/fame.png';
import fhs from './img/logos/fhs.png';
import flkr from './img/logos/flkr.png';
import ft from './img/logos/ft.png';
import fmk from './img/logos/fmk.png';
import kni from './img/logos/kni.png';
import utb from './img/logos/utb.png';
import su from './img/logos/su2.png';
import './vars.sass';
import './Home.sass';
import './Info.sass';
import './Partneri.sass';


class Home extends Component {
  render() {
    var scrollToElement = require('scroll-to-element');
 
    scrollToElement('#id');
    return (
      <div>
        <div className="Home">
          <nav>
            <ul>
              <li><a onClick={() => scrollToElement('.Info')}>o co se jedná?</a></li>
              <li><a onClick={() => scrollToElement('.nominace')} className="golden">NOMINACE</a></li>
              <li><a onClick={() => scrollToElement('.Partneri')}>Partneři</a></li>
            </ul>
          </nav>
          <img src={zaclona_prava} className="zaclona zaclonaPrava" alt="zaclona" />
          <img src={zaclona_leva} className="zaclona zaclonaLeva" alt="zaclona" />         
          <Parallax speed={-4} zIndex={1}><img src={moon} className="moon" alt="moon"/></Parallax>
          <img src={newyork} className="newyork" alt="newyork" />
          <img src={man} className="man rellax" alt="man" data-rellax-speed="7"/>
          <img src={text} className="text rellax" alt="text" data-rellax-speed="7"/>
          <img src={napis} className="napis rellax" alt="napis" data-rellax-speed="7"/>
        </div>
        <div className="Info">
          <h2>Co je to Galavečer UTB?</h2>
            <div className="popis">
              <p>Jako každoročně tak i letos se bude konat Galavečer Univerzity Tomáše Bati ve Zlíně. 
              A co to vlastně je za akci? Na této slavnostní události se oceňují ti nejvíce pracovití, sportovně založení studenti
               z celé univerzity. 
              Dále samozřejmě osobnosti podílející se na nejrůznějších výzkumech vedených univerzitou.
              Nominuj i Ty někoho, o kom si myslíš, že si zaslouží toto ocenění, a svou chvíli slávy v tento večer.</p>
            </div>
          <h2 className="nominace">NOMINACE</h2>
          <div className="popis">
              <p>Nominuj ty, o kterých si myslíš, že si to zaslouží!</p>
              <a href="https://goo.gl/forms/a9T4yrwirnZrz94S2" target="_blank" rel="noopener noreferrer"><img src={tlacitko} className="tlacitko" alt="tlacitko" /></a>
          </div>
        </div>
        <div className="Partneri">
          <h2>Partneři</h2>
          <div className="grid">
            <img src={fai} className="zone fai" alt="fai" />
            <img src={fame} className="zone fame" alt="fame" />
            <img src={fhs} className="zone fhs" alt="fhs" />
            <img src={flkr} className="zone flkr" alt="flkr" />
            <img src={ft} className="zone ft" alt="ft" />
            <img src={fmk} className="zone fmk" alt="fmk" />
            <img src={kni} className="zone kni" alt="kni" />
          </div>
          <div className="grid2">
            <img src={utb} className="zone utb" alt="utb" />
            <img src={su} className="zone su" alt="su" />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
