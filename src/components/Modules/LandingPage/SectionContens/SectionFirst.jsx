import SectionLayout from "../../../Layouts/SectionLayout";
import {
  LIST_CONTENT_1_ID,
  LIST_CONTENT_1_EN,
} from "../../../../constants/listContent";
import EachUtils from "../../../../utils/EachUtils";
import { ENJOY_TV_IMAGE, ENJOY_TV_VIDEO } from "../../../../constants/listAsset";
import { languageAtom } from "../../../../jotai/atoms";
import { useAtom } from "jotai";

const SectionFirst = () => {
  const [language] = useAtom(languageAtom);
  return (
    <SectionLayout>
      <EachUtils
        of={language === "en" ? LIST_CONTENT_1_EN : LIST_CONTENT_1_ID}
        render={(item, index) => (
          <div key={index} className="px-8">
            <h2 className="text-5xl font-black">{item.title}</h2>
            <p className="mt-4 text-2xl">{item.desc}</p>
          </div>
        )}
      />
      <div className="relative max-w-xl mx-auto">
        <img className="relative z-20" src={ENJOY_TV_IMAGE} alt="" />
        <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[73%]">
          <video autoPlay muted loop>
            <source src={ENJOY_TV_VIDEO} type="video/mp4" />
          </video>
        </div>
      </div>
    </SectionLayout>
  );
};

export default SectionFirst;
