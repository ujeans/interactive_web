import CarouselControls from "../molecules/CarouselControls";
import ImagesInfo from "../molecules/ImagesInfo";
import Slide from "../molecules/Slide";

interface CarouselProps {
  images: { src: string; alt: string }[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  return (
    <div className="carousel relative h-screen flex justify-center items-center flex-col">
      <Slide src={images[0].src} alt={"dd"} />
      <ImagesInfo />
      <CarouselControls />
    </div>
  );
};

export default Carousel;
