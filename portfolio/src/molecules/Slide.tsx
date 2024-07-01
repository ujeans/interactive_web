import Image from "../atoms/Image";

interface SlideProps {
  src: string;
  alt: string;
}

const Slide: React.FC<SlideProps> = ({ src, alt }) => {
  return (
    <div className="slide mb-6">
      <Image src={src} alt={alt} />
    </div>
  );
};

export default Slide;
