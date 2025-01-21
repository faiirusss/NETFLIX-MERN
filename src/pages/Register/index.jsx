import { useNavigate } from "react-router-dom";
import { JUMBOTRON_IMAGE } from "../../constants/listAsset";
import { emailAtom } from "../../jotai/atoms";
import { useAtom } from "jotai";
import { useState } from "react";
import { GoChevronLeft } from "react-icons/go";
import { auth } from "../../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import DefaultLayout from "../../components/Layouts/DefaultLayout";

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useAtom(emailAtom);
  const [password, setPassword] = useState(null);

  const handleRegister = async (e) => {
    try {
      e.preventDefault();
      const register = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (register) {
        toast("Register has been successfully");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (error) {
      toast(error.message)
    }
  };

  return (
    <DefaultLayout>
      <ToastContainer />
      <img src={JUMBOTRON_IMAGE} className="h-[100vh] opacity-70 w-full" />
      <div className="absolute z-10 w-full max-w-xl -translate-x-1/2 -translate-y-1/2 p-14 bg-black/80 top-1/2 left-1/2 rounded-xl">
        <div className="flex items-center gap-2 my-7">
          <div
            className="cursor-pointer text-slate-200 hover:text-white"
            onClick={() => navigate("/")}
          >
            <GoChevronLeft size={20} />
          </div>
          <h3 className="text-3xl font-bold text-white">Sign Up</h3>
        </div>
        <form className="flex flex-col gap-4">
          <div className="relative">
            <input
              className="w-full p-4 placeholder-transparent border rounded-md bg-black/50 border-white/50 peer"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <label className="absolute -z-10 left-0 pl-4  peer-placeholder-shown:top-4 peer-focus:top-[2px] peer-focus:text-sm transition-all text-lg text-white">
              Email
            </label>
          </div>
          <div className="relative">
            <input
              className="w-full p-4 placeholder-transparent border rounded-md bg-black/50 border-white/50 peer"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <label className="absolute -z-10 left-0 pl-4  peer-placeholder-shown:top-4 peer-focus:top-[2px] peer-focus:text-sm transition-all text-lg text-white">
              Password
            </label>
          </div>
          <div className="">
            <button
              onClick={handleRegister}
              className="w-full py-2 font-bold text-white bg-red-600 rounded-sm"
            >
              Sign Up
            </button>
          </div>
          <div>
            <p>
              Already have an account?
              <span
                onClick={() => navigate("/login")}
                className="ml-1 font-bold text-white cursor-pointer"
              >
                Sign in here
              </span>
            </p>
          </div>
        </form>
      </div>
    </DefaultLayout>
  );
};

export default Register;
