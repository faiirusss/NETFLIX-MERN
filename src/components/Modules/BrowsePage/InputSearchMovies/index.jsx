import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { searchMoviesAtom } from "../../../../jotai/atoms";

const InputSearchMovies = () => {
  const [isShow, setIsShow] = useState(null);
  const [, setSearchMovies] = useAtom(searchMoviesAtom);

  const handleChange = (e) => {
    if (e.target.value.length > 3) {
      setSearchMovies(e.target.value);
    } else {
      setSearchMovies(null);
    }
  };

  return (
    <div className="relative">
      <motion.input
        initial={{ width: 0, opacity: 0 }}
        animate={{
          width: isShow ? "240px" : "0px",
          opacity: isShow ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 40,
        }}
        className="p-2 border pl-7"
        type="text"
        autoFocus
        placeholder="title, people, genres"
        style={{ display: isShow ? "block" : "none" }}
        onChange={handleChange}
      />
      <GoSearch
        className={
          isShow ? "absolute left-0 pl-2 -translate-y-1/2 top-1/2" : null
        }
        size={24}
        onClick={() => setIsShow(!isShow)}
      />
    </div>
  );
};

export default InputSearchMovies;
