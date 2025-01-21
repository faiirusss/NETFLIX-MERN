import EachUtils from "../../../../utils/EachUtils";
import SectionLayout from "../../../Layouts/SectionLayout";
import {
  LIST_CONTENT_4_EN,
  LIST_CONTENT_4_ID,
} from "../../../../constants/listContent";
import { useAtom } from "jotai";
import { languageAtom } from "../../../../jotai/atoms";
import { PROFILE_KIDS_IMAGE } from "../../../../constants/listAsset";

const SectionFourth = () => {
  const [language] = useAtom(languageAtom);
  return (
    <SectionLayout>
      <div>
        <img src={PROFILE_KIDS_IMAGE} alt="profile" />
      </div>
      <EachUtils
        of={language == "en" ? LIST_CONTENT_4_EN : LIST_CONTENT_4_ID}
        render={(item, index) => (
          <div key={index} className="px-8">
            <p className="text-5xl font-black">{item.title}</p>
            <p className="mt-4 text-2xl">{item.desc}</p>
          </div>
        )}
      />
    </SectionLayout>
  );
};

export default SectionFourth;
