import { useAtom } from "jotai";
import EachUtils from "../../../../utils/EachUtils";
import { languageAtom } from "../../../../jotai/atoms";
import { LIST_FOOTER_EN, LIST_FOOTER_ID } from "../../../../constants/listFooter";
import OptionLanguage from "../OptionLanguage";

const SectionFooter = () => {
  const [language] = useAtom(languageAtom);
  return (
    <footer className="relative w-full text-white bg-black border-t-8 border-t-stone-900">
      <div className="p-16 mx-auto bg-black max-w-7xl">
        <div>
          Question? <a href="/">123-456-789</a>
        </div>
        <ul className="grid gap-4 py-8 sm:grid-cols-4">
          <EachUtils
            of={language == "en" ? LIST_FOOTER_EN : LIST_FOOTER_ID}
            render={(item, index) => (
              <li key={index}>
                <a href={item.url} className="underline">
                  {item.title}
                </a>
              </li>
            )}
          />
        </ul>
        <OptionLanguage />
        <p className="mt-4">Netflix Indonesia</p>
      </div>
    </footer>
  );
};

export default SectionFooter;
