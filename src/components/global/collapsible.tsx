import { useState } from "react";

interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
}

const Collapsible: React.FC<CollapsibleProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-600 rounded-lg w-full mx-auto">
      <button
        onClick={toggleOpen}
        className="w-full text-left px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-t-lg focus:outline-none"
      >
        <span className="font-semibold">{title}</span>
        <span className="float-right">{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && (
        <div className="p-4 border-t border-gray-300 bg-gray-50 rounded-b-lg">
          {children}
        </div>
      )}
    </div>
  );
};

export default Collapsible;
