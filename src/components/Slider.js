import React from "react";

const Slider = () => {

    return(
        <>
            <div className="sliderContainer">
                <div className="sliderImages" id="sliderImages">
                    <iframe className="courseTrailer"
                        src="https://www.youtube.com/embed/Vi9bxu-M-ag">
                    </iframe>
                </div>
                <span className="scrollPrev">
                    <i class="fa-solid fa-angle-left"></i>
                </span>
                <span className="scrollNext">
                <i class="fa-solid fa-angle-right"></i>
                </span>
            </div>
        </>
    )
}

export default Slider