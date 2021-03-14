import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class GoalCarousel extends Component {
   render() {
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
               <img src="https://i.pinimg.com/originals/57/ed/76/57ed76aed3e27c46ff60e054c4fca305.jpg" />
            </div>
            <div>
               <img src="https://cdn.graciousquotes.com/wp-content/uploads/2020/06/Time-can-be-an-ally-or-an-enemy.-What-it-becomes-depends-entirely-upon-you-your-goals-and-your-determination-to-use-every-available-minute..jpg" />
            </div>
            <div>
               <img src="https://cdn.graciousquotes.com/wp-content/uploads/2020/06/When-obstacles-arise-you-change-your-direction-to-reach-your-goal-you-do-not-change-your-decision-to-get-there..jpg" />
            </div>
            <div>
               <img src="https://i.pinimg.com/originals/11/e2/4b/11e24baabe0c527d02f0282ae13eb7d6.png" />
            </div>
            <div>
               <img src="http://img.picturequotes.com/2/16/15958/a-goal-without-a-plan-is-just-a-wish-quote-1.jpg" />
            </div>
            <div>
               <img src="https://cdn.graciousquotes.com/wp-content/uploads/2020/06/A-goal-properly-set-is-halfway-reached..jpg" />
            </div>
            <div>
               <img src="https://cdn.graciousquotes.com/wp-content/uploads/2020/06/You-were-born-to-win-but-to-be-a-winner-you-must-plan-to-win-prepare-to-win-and-expect-to-win..jpg" />
            </div>
            <div>
               <img src="https://cdn.graciousquotes.com/wp-content/uploads/2020/06/If-you-want-to-reach-a-goal-you-must-see-the-reaching-in-your-own-mind-before-you-actually-arrive-at-your-goal..jpg" />
            </div>
            <div>
               <img src="https://cdn.graciousquotes.com/wp-content/uploads/2020/06/What-you-get-by-achieving-your-goals-is-not-as-important-as-what-you-become-by-achieving-your-goals.zigziglar.jpg" />
            </div>
            </Carousel>
         </div>
      );
      }
}
export default GoalCarousel