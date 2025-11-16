import { memo } from "react";

const ProductList = () => {
  return (
    <div>
      <div className="container my-10 grid grid-cols-4 gap-8">
        {[
          // Array of image URLs for cleaner mapping
          "https://i.pinimg.com/1200x/8e/fd/c6/8efdc65d2d07bd8b215997ec05157b1d.jpg",
          "https://i.pinimg.com/1200x/29/32/97/2932976634b26ea751db046d3759a31c.jpg",
          "https://i.pinimg.com/1200x/28/85/bd/2885bdefd80677579a3d51c2d07b86bd.jpg",
          "https://i.pinimg.com/736x/aa/fa/e9/aafae976a38bd341fa0d1d6f57a52d6e.jpg",
        ].map((src, idx) => (
          <div
            key={idx}
            className="bg-white h-70 overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out transform hover:scale-110 hover:rotate-1 hover:brightness-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(ProductList);
