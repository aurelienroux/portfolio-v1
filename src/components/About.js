import React from 'react'

const About = () => (
  <div className="about">
    <div className="content-container">
    <h3 className="about__title">About</h3>
      <p>
        I'm a french canadian developer based in Montreal QC. 
        I started development with HTML5 and CSS3 as a hobby in 2013 and after doing a couple of websites, it became my full-time job in 2016.
      </p>
      <p>
        In 2017, I completed <a href="https://concordiabootcamps.ca/" target="_blank" rel="noopener noreferrer">DecodeMtl</a>, a Full-stack immersive bootcamp specializing in javascript,
        where I have learned fundamentals of programming and how to develop websites and web applications the right way.
      </p>
      <p>
        A Lifelong learner, I’m always trying to improve my skills and learn new technologies.
        My interests are in React, VueJs, Gatsby, NextJS and basically everything that has to do with JavaScript. 
        I'm also very interested in back-end dev and would love to learn more about it.
      </p>
      <p>
        here's a few techs that I have been working with
      </p>
      <ul className="about__techs">
        <li>HTML & (S)CSS</li>
        <li>Javascript es6+</li>
        <li>React</li>
        <li>Redux</li>
        <li>WordPress</li>
        <li>WooCommerce</li>
        <li>jQuery</li>
      </ul>
    </div>
  </div>
);

export default About;