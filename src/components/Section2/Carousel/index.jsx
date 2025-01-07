import { useCallback, useEffect, useRef, useState } from 'react';
import './styles.css';

//passar esse para o meu carousel css...

export const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoTransition = useRef(null);

  const slides = [
    { id: 1, url: "https://picsum.photos/800/600?random=1" },
    { id: 2, url: "https://picsum.photos/800/600?random=2" },
    { id: 3, url: "https://picsum.photos/800/600?random=3" },
    { id: 4, url: "https://picsum.photos/800/600?random=4" }
  ];
  // assets/img/carousel/buildings-1836478_12803-4.jpg
  // assets/img/carousel/cafe-7454951_12803-4.jpg
  // assets/img/carousel/clifford-VobvKmG-StA-unsplash3-4.jpg
  // assets/img/carousel/coffee-machine3-4.jpg

  const navigate = useCallback((direction) => {
    setCurrentSlide(current => {
      if (direction === 'next') {
        return current === slides.length - 1 ? 0 : current + 1;
      }
      return current === 0 ? slides.length - 1 : current - 1;
    })
  }, [slides.length]);

  const resetInterval = useCallback(() => {
    if(autoTransition.current) clearInterval(autoTransition.current);

    autoTransition.current = setInterval(() => navigate('next'), 5000);

  }, [navigate]);

  useEffect(() => {

    resetInterval();
    return () => autoTransition.current && clearInterval(autoTransition.current);

  }, [resetInterval]);

  return (
    <div id="carrossel">
      <div className="slider">
        <div id="slides">

          {slides.map((slide, i) => (
            <input
              key={slide.id}
              type='radio'
              name='radio-btn'
              id={`radio${slide.id}`}
              checked={currentSlide === i}
              onChange={() => {
                setCurrentSlide(i);
                resetInterval();
              }}
            />
          ))}

          {slides.map((slide, i) => (
            <div key={slide.id} className={`slide ${i === 0 ? 'first' : ''}`}>
              <img src={slide.url} alt={`Slide ${slide.id}`} />
            </div>
          ))}

          <div className="manual-navigation">

            {slides.map(slide => (
              <label key={slide.id} htmlFor={`radio${slide.id}`} className={`manual-btn manual-btn${slide.id}`} />
            ))}
          </div>

          <div
            className="arrow"
            id="arrow-left"
            onClick={() => {
              navigate('previous');
              resetInterval();
            }}
          >
            <div>&#10094;</div>
          </div>
          <div
            className="arrow"
            id="arrow-right"
            onClick={() => {
              navigate('next');
              resetInterval();
            }}
          >
            <div>&#10095;</div>
          </div>
        </div>
      </div>
    </div>
  );
};
