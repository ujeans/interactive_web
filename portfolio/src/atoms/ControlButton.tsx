interface ButtonProps {
  onClick: () => void;
  label: string;
}

const MoveButton: React.FC<ButtonProps> = ({ onClick, label }) => {
  return (
    <button onClick={onClick} className="p-2 bg-blue-500 text-white rounded">
      {label}
    </button>
  );
};

export default MoveButton;
