import ReactPlayer from "react-player";
import BrowseLayout from "../../components/Layouts/BrowseLayout";
import { useNavigate, useParams } from "react-router-dom";
import { GoChevronLeft } from "react-icons/go";

const Watch = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  return (
    <BrowseLayout>
      <div className="absolute left-6 top-20">
        <button
          onClick={() => {
            navigate("/browse");
          }}
        >
          <GoChevronLeft size={32} />
        </button>
      </div>
      <ReactPlayer
        url={"https://youtube.com/watch?v=" + id}
        width={"100%"}
        height={"100vh"}
        playing={true}
        muted={false}
        controls={false}
      />
    </BrowseLayout>
  );
};

export default Watch;
