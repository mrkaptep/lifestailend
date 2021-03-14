import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class PostCarousel extends Component {

   render() {
      console.log(this.props)

      return(
         <div className="carousel-wrapper">
            <Carousel 
               infiniteLoop 
               useKeyboardArrows 
               autoPlay 
               interval={8000} 
               showStatus={false}
               showThumbs={false}
            >
            <div>
               <img src="https://cdn.graciousquotes.com/wp-content/uploads/2020/04/Keeping-a-journal-of-what%E2%80%99s-going-on-in-your-life-is-a-good-way-to-help-you-distill-what%E2%80%99s-important-and-what%E2%80%99s-not..jpg" />
            </div>
            <div>
               <img src="https://img.buzzfeed.com/buzzfeed-static/static/2020-04/16/2/tmp/de3f9ea90e66/c4c2407af8cc58703d342794cfc98082-15.jpg" />
            </div>
            <div>
               <img src="https://cdn.graciousquotes.com/wp-content/uploads/2020/04/Writing-in-a-journal-reminds-you-of-your-goals-and-of-your-learning-in-life.-It-offers-a-place-where-you-can-hold-a-deliberate-thoughtful-conversation-with-yourself..jpg" />
            </div>
            <div>
               <img src="https://cdn.graciousquotes.com/wp-content/uploads/2020/04/Writing-is-medicine.-It-is-an-appropriate-antidote-to-injury.-It-is-an-appropriate-companion-for-any-difficult-change..jpg" />
            </div>
            <div>
               <img src="https://cdn.graciousquotes.com/wp-content/uploads/2020/04/Life-moves-pretty-fast.-If-you-don%E2%80%99t-stop-and-look-around-once-in-a-while-you-could-miss-it..jpg" />
            </div>
            <div>
               <img src="https://cdn.graciousquotes.com/wp-content/uploads/2020/04/Journal-writing-is-a-voyage-to-the-interior..jpg" />
            </div>
            </Carousel>
         </div>
      );
      }
}
export default PostCarousel
