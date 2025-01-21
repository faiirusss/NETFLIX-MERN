import Navbar from "../../../pages/Browse/Navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../utils/firebase";
import Loading from "../../Modules/Elements/Loading";

const BrowseLayout = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) return <Loading />;

  if (error) return <p>Error...</p>;

  if (!user) return location.replace("/ ");
  return (
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default BrowseLayout;
