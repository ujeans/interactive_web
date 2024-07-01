interface ButtonProps {
  direction: "prev" | "next";
  onClick: () => void;
}

const ControlButton: React.FC<ButtonProps> = ({ direction, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-40 h-40 border border-theme2 text-white rounded-full flex justify-center items-center"
    >
      {direction === "prev" ? "<" : ">"}
    </button>
  );
};

export default ControlButton;
