import { JUMBOTRON_IMAGE } from "../../../../constants/listAsset";
import { useAtom } from "jotai";
import { languageAtom } from "../../../../jotai/atoms";
import EachUtils from "../../../../utils/EachUtils";
import {
  LIST_JUMBOTRON_ID,
  LIST_JUMBOTRON_EN,
} from "../../../../constants/listJumbotron";
import InputMembership from "../InputMembership";

const Jumbotron = () => {
  const [language] = useAtom(languageAtom);
  return (
    <div className="px-8 mb-24">
      <img
        src={JUMBOTRON_IMAGE}
        alt="bg"
        className="absolute top-0 left-0 w-full object-cover h-[700px] opacity-60"
      />
      <EachUtils
        of={language == "en" ? LIST_JUMBOTRON_EN : LIST_JUMBOTRON_ID}
        render={(item, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center justify-center gap-4 px-4 text-center mt-44"
          >
            <h1 className="text-5xl font-black text-white ">{item.title}</h1>
            <p className="text-xl text-white">{item.desc}</p>
            <InputMembership />
          </div>
        )}
      />
    </div>
  );
};

export default Jumbotron;
