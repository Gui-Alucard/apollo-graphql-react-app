import React, { useState } from 'react';
import Img from './ImgComp';
import '../styles/Slider.css';
import i1 from '../styles/home-images/spacex-home01.jpg';
import i2 from '../styles/home-images/spacex-home02.jpg';
import i3 from '../styles/home-images/spacex-home03.jpg';
import i4 from '../styles/home-images/spacex-home04.jpg';
import i5 from '../styles/home-images/spacex-home05.jpg';
import i7 from '../styles/home-images/spacex-home07.jpg';
import i8 from '../styles/home-images/spacex-home08.jpg';

function Slider() {
  const [x, setX] = useState(0);

  let sliderArray = [
    <Img src={i1} />, <Img src={i2} />,
    <Img src={i3} />, <Img src={i4} />,
    <Img src={i5} />, <Img src={i7} />,
    <Img src={i8} />
  ];
  const goLeft = () => {
    (x === 0) ? setX(-100 * (sliderArray.length - 1)) : setX(x + 100)
  };

  const goRight = () => {
    (x === -100 * (sliderArray.length - 1)) ? setX(0) : setX(x - 100)
  };

  // useEffect(() => {
  //   const interval = () => setInterval(goRight(), 6000);
  //   interval();
  //   return () => clearInterval(interval)
  // }, [x]);

  // function estimate_pi(n) {
  //   let numInCirc = 0;
  //   let numInSquare = 0;
  //   for (const _ of Array(n).keys()) {
  //     const x = (Math.random() * (0 - 1)) + 1;
  //     const y = (Math.random() * (0 - 1)) + 1;
  //     const distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
  //     if (distance <= 1) {
  //       numInCirc += 1;
  //     }
  //     numInSquare += 1;
  //   }
  //   return console.log(4 * numInCirc / numInSquare);
  // };
  
  // estimate_pi(10000000);

  return (
    <section className="slider-container">
      <section className="slider-body">
        <section className="slider-slides">
          {
            sliderArray.map((image, index) => {
              return (
                <div
                  key={index}
                  className="slide"
                  style={{ transform:`translateX(${x}%)`}}
                >
                  {image}
                </div>
              );
            })
          }
          <button type="button" id="goLeft" onClick={goLeft}>
            <i className="fas fa-angle-left"></i>
          </button>
          <button type="button" id="goRight" onClick={goRight}>
            <i className="fas fa-angle-right"></i>
          </button>
        </section>
      </section>
    </section>
  );
}

export default Slider;
