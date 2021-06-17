import React, { Component } from 'react';
import ParticlesBg  from "particles-bg";

class Header extends Component {
  render() {
    return (
      <header id="home">
      <ParticlesBg type="circle" bg={true} />
      <nav id="nav-wrap">
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#translator">Translator</a></li>
	         <li><a className="smoothscroll" href="#about">About</a></li>
         </ul>
      </nav>

      <div className="row banner">
      
         <div className="banner-text">
            <h1 className="responsive-headline">{'Language Translator Using NMT'}</h1>
            <h3>{'We are a Team of 3 People working on this Project.'}.</h3>
            <p className='header-info'>This Project Focus on Learning how Machine Translation work and How NMT Can be used for the task of Converting One Form of Language to another.</p>
            <p className='header-info'>We will discover how to develop a neural machine translation model for translating English to Hindi.</p>
             <hr />
            <ul className="social">
               <a href={'#translator'} className="button btn project-btn"><i className="fa fa-book"></i>Translate</a>
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
