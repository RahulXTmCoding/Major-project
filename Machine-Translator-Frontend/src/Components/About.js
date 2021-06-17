import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var profilepic= "images/"+this.props.data.image;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Nordic Giant Profile Pic" />
         </div>
         <div className="nine columns main-col">
         <div className="row">
               <div className="columns contact-details">
                  <h2>What is Machine Translate</h2>
                  <p className="address">
						Machine Translation is the translation of text or speech by a computer with no human involvement.</p>
<p>With the power of deep learning, Neural Machine Translation (NMT) has arisen as the most powerful algorithm to perform this task.</p>
	             </div>
            
            </div>
            
            <h2>About Team</h2>
            <p className='header-info'>Rahul Singh- Web Developer(Working on Front End of this Project)</p>
             <p className='header-info'>Prakash Pandey- Training The  NMT modal</p>
             <p className='header-info'>Riya Punjabi- Working On Python Backend </p>
             <p className='header-info'>Learning all the aspect of the project from each other.</p>
            
            
         </div>
      </div>

   </section>
    );
  }
}

export default About;
