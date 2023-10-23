import SectionTittle from "../../../components/SectionTittle";
import img from '../../../assets/images/sajib.webp'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./styles.css"

const carousel = (slider) => {
  const z = 300
  function rotate() {
    const deg = 360 * slider.track.details.progress
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`
  }
  slider.on("created", () => {
    const deg = 360 / slider.slides.length
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`
    })
    rotate()
  })
  slider.on("detailsChanged", rotate)
}


 


const Feedback = () => {
   const [sliderRef] = useKeenSlider(
     {
       loop: true,
       selector: ".carousel__cell",
       renderMode: "custom",
       mode: "free-snap",
     },
     [carousel]
   );
   
    return (
      <div>
        <SectionTittle
          heading1="Feedback Our"
          heading2="Students"
          subHeading="Our Seccessful Student are Here"
        ></SectionTittle>

        <div className="wrapper">
          <div className="scene">
            <div className="carousel keen-slider" ref={sliderRef}>
              <div className="carousel__cell number-slide1 "><img src={img} alt="" /></div>
              <div className="carousel__cell number-slide2"><img src={img} alt="" /></div>
              <div className="carousel__cell number-slide3"><img src={img} alt="" /></div>
              <div className="carousel__cell number-slide4"><img src={img} alt="" /></div>
              <div className="carousel__cell number-slide5"><img src={img} alt="" /></div>
              <div className="carousel__cell number-slide6"><img src={img} alt="" /></div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Feedback;