import { useNavigate } from "react-router-dom";
import DefaultButton from "../../components/Modules/LandingPage/DefaultButton";
import OptionLanguage from "../../components/Modules/LandingPage/OptionLanguage";

function Navbar() {
  const navigate = useNavigate();
  return (
    <header className="relative z-20">
      <nav className="flex flex-wrap items-center justify-between py-4 pr-10 pl-7">
        <div>
          <img
            src="/netflix_logo_icon.png"
            alt="netflix-logo"
            width={110}
            height={45}
          />
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <OptionLanguage />
          <DefaultButton onClick={() => navigate("/login")} text={"Sign in"} />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
