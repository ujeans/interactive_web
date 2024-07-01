import Carousel from "../organisms/Carousel";
import Header from "../organisms/Header";

const HomePage = () => {
  const images = [
    { src: "image1.jpg", alt: "Image 1" },
    { src: "image2.jpg", alt: "Image 2" },
    { src: "image3.jpg", alt: "Image 3" },
  ];

  return (
    <div>
      <Header />
      <Carousel images={images} />
    </div>
  );
};

export default HomePage;
