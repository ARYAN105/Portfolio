import React from 'react'
import "./scrollup.css"

const Scrollup = () => {
    window.addEventListener("scroll", function() {
        const scrollUp = document.querySelector(".scrollup");
        // when the scroll id higher than 500 viewprot height, add the show-scroll class to a tag with the scroll-top class
        if(this.scrollY >= 560) scrollUp.classList.add('show-scroll');
        else scrollUp.classList.remove('show-scroll');
    });
  return (
    <a href="#" className="scrollup">
    <i class="uil uil-arrow-up scrollup__icon"></i>
    </a>
  )
}

export default Scrollup