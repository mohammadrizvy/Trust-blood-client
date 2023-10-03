import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Swiper = () => {
    useEffect(() => {
      AOS.init();
    }, []);
  const slides = [
    {
      id: 1,
      title: "Unexplained Fatigue",
      description:
        " Persistent, unexplained fatigue or weakness can be a sign that your body is not getting enough oxygen-rich blood. It may indicate an underlying health issue that requires attention.",
      imageUrl: "https://i.ibb.co/Cw8HZ9Q/d1.jpg",
    },
    {
      id: 2,
      title: "Pale Skin",
      description:
        "Paleness in the skin, particularly when accompanied by fatigue and weakness, can suggest anemia or other blood-related conditions. Anemia can lead to a decrease in red blood cells, affecting oxygen delivery to your tissues.",
      imageUrl: "https://i.ibb.co/FBxhVfN/2d609d87882ec527936425c51d20c928.jpg",
    },
    {
      id: 3,
      title: " Shortness of Breath",
      description:
        "Difficulty breathing or shortness of breath, especially during everyday activities, can be a symptom of low blood count or other blood-related disorders. It's essential to consult a healthcare professional for proper evaluation.",
      imageUrl: "https://i.ibb.co/vHNJ8PM/d3jpg.jpg",
    },
    {
      id: 4,
      title: "Unexplained Bruising and Bleeding",
      description:
        "Frequent and unexplained bruising, as well as excessive bleeding from minor cuts or injuries, may indicate a problem with your blood's ability to clot. This could be a sign of a clotting disorder or low platelet count.",
      imageUrl: "https://i.ibb.co/TYM3yYW/d4.jpg",
    },
  ];

  return (
    <div className="mt-16">
      <div data-aos="fade-right" className="">
        <h1 className="title-text text-5xl font-bold underline text-center">
          Recognizing the Need for <span className="text-red"> Blood</span>
        </h1>
        <p className="font-semibold text-red text-center mt-2 lg:-mb-20">
          Understanding the Symptoms
        </p>
      </div>
      <div className="carousel w-full lg:h-[550px]">
        {slides.map((slide) => (
          <div
            key={slide.id}
            id={`slide${slide.id}`}
            className="carousel-item relative w-full"
          >
            <div
              data-aos="zoom-in-up"
              className="flex flex-col lg:flex-row lg:mr-10 lg:ml-32 lg:gap-20 hero-content p-4 lg:p-24"
            >
              <div className="space-y-7  flex-1">
                <h2 className="text-2xl lg:text-4xl title-text font-bold">
                  {slide.title}
                </h2>
                <p>{slide.description}</p>
                <button className="btn button lg:text-center text-white">
                  See More Details  
                </button>
              </div>
              <div className="flex-1 ">
                <img
                  src={slide.imageUrl}
                  alt={`Slide ${slide.id}`}
                  className="w-80 h-80 rounded-md"
                />
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href={`#slide${slide.id === 1 ? 4 : slide.id - 1}`}
                className="btn btn-circle"
              >
                ❮
              </a>
              <a
                href={`#slide${slide.id === 4 ? 1 : slide.id + 1}`}
                className="btn btn-circle"
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Swiper;
