import EachUtils from "../../utils/EachUtils";
import { LIST_NAVBAR } from "../../constants/listNavbar";
import InputSearchMovies from "../../components/Modules/BrowsePage/InputSearchMovies";
import AccountMenu from "../../components/Modules/BrowsePage/AccountMenu";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate()
  return (
    <header className="relative">
      <nav className="fixed top-0 left-0 z-20 w-full px-8 text-white bg-[#141414]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              onClick={()=>navigate("/browse")}
              src="/netflix_logo_icon.png"
              alt=""
              className="ml-2 w-[120px] transition-all hover:scale-105 cursor-pointer"
            />
            <ul className="items-center hidden gap-4 sm:flex">
              <EachUtils
                of={LIST_NAVBAR}
                render={(item, index) => (
                  <li key={index}>
                    <a href={item.url}>{item.title}</a>
                  </li>
                )}
              />
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <InputSearchMovies />
            <AccountMenu />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
