import { useAtom } from "jotai";
import { emailStorageAtom, tokenAtom } from "../../../../jotai/atoms";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../../../utils/firebase";

const AccountMenu = () => {
  const navigate = useNavigate();

  const [token, setToken] = useAtom(tokenAtom);
  const [, setEmailStorage] = useAtom(emailStorageAtom)

  return (
    <div className="flex dropdown dropdown-hover dropdown-end" tabIndex={0}>
      <div className="avatar">
        <div className="w-10 rounded">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <button
        tabIndex={0}
        className="w-32 py-1 bg-black dropdown-content top-10"
        onClick={() => {
          signOut(auth).then(() => {
            setToken(null);
            setEmailStorage(null)
            navigate("/");
          });
        }}
      >
        Sign Out
      </button>
    </div>
  );
};

export default AccountMenu;
