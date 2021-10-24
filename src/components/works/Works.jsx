import Item from "./Item";
import "./works.scss"
import { useState } from 'react'
export default function Works() {
  const data = [
    {
      id: "1",
      icon: "./assets/globe.png",
      title: "Web Application",
      desc:
        "Web programming is my strong point. I can build web apps anytime, anywhere.I can handle both frontend, backend.",
      img:
        "./assets/stationery2.png",
      project: "https://github.com/tandev2k/jsp-servlet-stationery-store"
    },
    {
      id: "2",
      icon: "./assets/mobile.png",
      title: "Mobile Application",
      desc:
        "Currently, I can build mobile apps in Java but I also use React native.",
      img:
        "./assets/grocery2.png",
      project: "https://github.com/tandev2k/MobilePrograming-MiniStuck"
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Game Programming",
      desc:
        "In high school, My hobby was playing games. I think it can help me improve my ideas.",
      img:
        "./assets/candy-crush.png",
      project: ""
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);


  function renderListItem() {
    return data.map(item => <Item item={item} key={item.id} />)
  }

  function handleClick(state) {
    // if state == -1 slide to left 
    if (state === -1) {
      currentSlide > 0 ? setCurrentSlide(currentSlide - 1) : setCurrentSlide(data.length - 1)
    }
    currentSlide < data.length - 1 ? setCurrentSlide(currentSlide + 1) : setCurrentSlide(0)
  }

  return (
    <div className="works" id="works">
      <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        {renderListItem()}
      </div>
      <img src="assets/arrow.png" className="arrow left" alt="" onClick={() => handleClick(-1)} />
      <img src="assets/arrow.png" className="arrow right" alt="" onClick={() => handleClick(1)} />
    </div>
  )
}
