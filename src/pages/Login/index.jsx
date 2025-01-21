import { useNavigate } from "react-router-dom";
import { JUMBOTRON_IMAGE } from "../../constants/listAsset";
import { useAtom } from "jotai";
import { emailAtom, emailStorageAtom, tokenAtom } from "../../jotai/atoms";
import { useState } from "react";
import { GoChevronLeft } from "react-icons/go";
import { auth } from "../../utils/firebase";
import { signInWithEmailAndPassword, getIdToken } from "firebase/auth";
import { toast } from "react-toastify";
import DefaultLayout, { } from  "../../components/Layouts/DefaultLayout"

const Login = () => {
  const navigate = useNavigate();
  const [, setToken] = useAtom(tokenAtom);
  const [, setEmailStorage] = useAtom(emailStorageAtom);
  const [email, setEmail] = useAtom(emailAtom);
  const [password, setPassword] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const login = await signInWithEmailAndPassword(auth, email, password);
      if (login) {
        const firebaseToken = await getIdToken(login.user);
        setEmailStorage(login.user.email);
        setToken(firebaseToken);
        navigate("/browse");
      }
    } catch (error) {
      toast(error.message);
    }
  };
  return (
    <DefaultLayout>
      <img src={JUMBOTRON_IMAGE} className="h-[100vh] opacity-70 w-full" />
      <div className="absolute z-10 w-full max-w-xl -translate-x-1/2 -translate-y-1/2 p-14 bg-black/80 top-1/2 left-1/2 rounded-xl">
        <div className="flex items-center gap-2 my-7">
          <div
            className="cursor-pointer text-slate-200 hover:text-white"
            onClick={() => navigate("/")}
          >
            <GoChevronLeft size={20} />
          </div>
          <h3 className="text-3xl font-bold text-white">Sign In</h3>
        </div>
        <form className="flex flex-col gap-4">
          <div className="relative">
            <input
              className="w-full p-4 placeholder-transparent border rounded-md bg-black/50 border-white/50 peer"
              type="email"
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
              onClick={handleLogin}
              className="w-full py-2 font-bold text-white bg-red-600 rounded-sm"
            >
              Sign In
            </button>
          </div>
          <div>
            <p>
              New to Netflix?
              <span
                onClick={() => navigate("/register")}
                className="ml-1 font-bold text-white cursor-pointer"
              >
                Sign up now
              </span>
            </p>
          </div>
        </form>
      </div>
    </DefaultLayout>
  );
};

export default Login;
