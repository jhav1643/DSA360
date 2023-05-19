import React from 'react';
import './header.css';

const Testimonial = () => {
  return (
    <section id="testimonials">
      <div id="testimonial-carousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active container-fluid">
            <h2 className="testimonial-text">Unlock your potential with DSA 360 - the ultimate platform for mastering Data Structures and Algorithms, preparing for placements, and upskilling yourself with daily practice and comprehensive study material.</h2>
          </div>
          <div className="carousel-item container-fluid">
            <h2 className="testimonial-text">DSA 360 is an educational website wherein you can practice the questions of Data Structures and Algorithms, DBMS , C++ , Computer Networks,OS etc.</h2>
          </div>
          <div className="carousel-item container-fluid">
            <h2 className="testimonial-text">You can upskill yourself with daily Practice.This website can be your one stop solution for your placements' preparation.</h2>
          </div>
        </div>
        <a className="carousel-control-prev" href="#testimonial-carousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href="#testimonial-carousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>
    </section>
  );
};

export default Testimonial;
