"use client";

interface HoverModalProps {
  open: boolean;
  title: string;
  onClose: () => void;
}

const HoverModal: React.FC<HoverModalProps> = ({ open, title, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed top-23 left-0 w-full h-[calc(100vh-80px)] z-40">
      <div
        onMouseEnter={onClose}
        className="absolute inset-0 bg-black/70"
      ></div>

      <div className="relative w-full h-[50vh] bg-white shadow-lg animate-fade-slide-slow">
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">{title}</h2>
          <p>Dynamic modal based on menu selection</p>
        </div>
      </div>
    </div>
  );
};

export default HoverModal;
