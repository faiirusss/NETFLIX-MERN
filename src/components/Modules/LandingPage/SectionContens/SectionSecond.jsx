import SectionLayout from "../../../Layouts/SectionLayout";
import {
  DOWNLOAD_COVER_IMAGE,
  DOWNLOAD_PHONE_IMAGE,
} from "../../../../constants/listAsset";
import {
  LIST_CONTENT_2_EN,
  LIST_CONTENT_2_ID,
} from "../../../../constants/listContent";
import EachUtils from "../../../../utils/EachUtils";
import { useAtom } from "jotai";
import { languageAtom } from "../../../../jotai/atoms";

const SectionSecond = () => {
  const [language] = useAtom(languageAtom);
  return (
    <SectionLayout>
      <div className="relative max-w-xl mx-auto">
        <img src={DOWNLOAD_PHONE_IMAGE} alt="download phone" />
        <div className="px-4 absolute flex items-center rounded-xl py-2 gap-4 -translate-x-1/2 bg-black border w-[60%] border-white left-1/2 bottom-8">
          <img src={DOWNLOAD_COVER_IMAGE} alt="cover" className="max-h-20" />
          <div className="flex flex-col">
            <p className="font-bold">Stranger things</p>
            <p className="font-semibold text-left text-blue-600">Download...</p>
          </div>
        </div>
      </div>
      <EachUtils
        of={language == "en" ? LIST_CONTENT_2_EN : LIST_CONTENT_2_ID}
        render={(item, index) => (
          <div key={index}>
            <h2 className="text-5xl font-black">{item.title}</h2>
            <p className="mt-4 text-2xl">{item.desc}</p>
          </div>
        )}
      />
    </SectionLayout>
  );
};

export default SectionSecond;
