import { useAuthState } from "react-firebase-hooks/auth";
import Navbar from "../../../pages/Landing/Navbar";
import { auth } from "../../../utils/firebase";
import Loading from "../../Modules/Elements/Loading";
const DefaultLayout = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) return <Loading />;

  if (error) return <p>Error...</p>;

  if (user) return location.replace("/browse");

  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default DefaultLayout;
