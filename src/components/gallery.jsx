//import { Image } from "./image";
import ImageSlider from "../components/imageSlider";
import { sliderData } from "../components/sliderData";
export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="row">
          <div className="portfolio-items">
            <ImageSlider slides={sliderData} />
          </div>
        </div>
      </div>
    </div>
  );
};
