import { useRef } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
const CarouselLayout = ({ children }) => {
  const ref = useRef(null);

  const scroll = (offset) => {
    ref.current.scrollLeft += offset
  }
  return (
    <div className="relative overflow-hidden">
      <div className="absolute left-0 flex justify-between w-full h-full">
        <button
          onClick={() => scroll(-200)}
          className="z-10 w-10 text-center text-white transition-all duration-300 ease-in-out opacity-75 h-72 hover:bg-blue-900/50"
        >
          <GoChevronLeft size={32} />
        </button>
        <button
          onClick={() => scroll(200)}
          className="z-10 w-10 text-center text-white transition-all duration-300 ease-in-out opacity-75 h-72 hover:bg-blue-900/50"
        >
          <GoChevronRight size={32} />
        </button>
      </div>
      <div ref={ref} className="relative space-x-2 carousel scroll-smooth">
        {children}
      </div>
    </div>
  );
};

export default CarouselLayout;
