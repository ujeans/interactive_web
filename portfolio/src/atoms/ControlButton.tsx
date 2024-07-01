interface ButtonProps {
  direction: "prev" | "next";
  onClick: () => void;
}

const ControlButton: React.FC<ButtonProps> = ({ direction, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-50 h-50 mr-8 border border-theme2 text-white rounded-full flex justify-center items-center"
    >
      {direction === "prev" ? "<" : ">"}
    </button>
  );
};

export default ControlButton;
