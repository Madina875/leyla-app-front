interface HoverModalProps {
  open: boolean;
  onClose: () => void;
}

const HoverModal: React.FC<HoverModalProps> = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed top-13 left-0 w-full h-[calc(100vh-80px)] z-40">
      <div
        onMouseEnter={onClose}
        className="absolute top-1 -bottom-30 inset-0 bg-black/50"
      ></div>

      <div className="relative w-full bg-white shadow-lg animate-fade-in-top">
        <div className="p-6">
          <div className="min-h-50 gap-5 flex">
            <div className="h-full w-[70%] p-2 grid gap-4 grid-cols-6">
              {Array(9)
                .fill(0)
                .map((_, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center"
                  >
                    {/* Image */}
                    <div className="bg-gray-100 w-full h-30 rounded-md overflow-hidden">
                      <img
                        src={`https://picsum.photos/200/200?random=${idx}`}
                        alt={`Product ${idx + 1}`}
                        className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="mt-1 text-center px-1">
                      <p className="text-[13px] font-medium text-gray-700 line-clamp-2 capitalize">
                        Product Name {idx + 1}
                      </p>
                      <strong className="text-[13px] font-semibold text-gray-900">
                        $1222
                      </strong>
                    </div>
                  </div>
                ))}
            </div>

            <div className="m-5 border-l capitalize min-h-20 border-gray-400 w-[30%] p-5">
              <ul className="flex flex-col gap-2  text-black/80 italic">
                <li>Mobile type first </li>
                <li>Mobile type first </li>
                <li>Mobile type first </li>
                <li>Mobile type first </li>
                <li>Mobile type first </li>
                <li>Mobile type first </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverModal;
