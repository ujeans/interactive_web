import ControlButton from "../atoms/ControlButton";

const CarouselControls = () => {
  const handlePrev = () => {};
  const handleNext = () => {};

  return (
    <div className="absolute right-16 bottom-0 m-4 flex space-x-2">
      <ControlButton direction="prev" onClick={handlePrev} />
      <ControlButton direction="next" onClick={handleNext} />
    </div>
  );
};

export default CarouselControls;
