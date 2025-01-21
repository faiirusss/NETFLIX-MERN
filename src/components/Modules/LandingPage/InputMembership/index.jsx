import EachUtils from "../../../../utils/EachUtils";
import { useAtom } from "jotai";
import { emailAtom, languageAtom } from "../../../../jotai/atoms";
import { LIST_CTA_EN, LIST_CTA_ID } from "../../../../constants/listCTA";
import DefaultButton from "../DefaultButton";
import { useNavigate } from "react-router-dom";

const InputMembership = () => {
  const navigate = useNavigate();
  const [language] = useAtom(languageAtom);
  const [, setEmailAtom] = useAtom(emailAtom);

  const handlerEmail = (e) => {
    e.preventDefault();
    navigate("/register");
  };

  return (
    <form>
      <EachUtils
        of={language === "en" ? LIST_CTA_EN : LIST_CTA_ID}
        render={(item, index) => (
          <div key={index}>
            <h3 className="text-xl text-white">{item.title}</h3>
            <div className="relative flex items-center justify-center gap-2 py-4">
              <input
                className="w-full p-4 placeholder-transparent border rounded-md bg-black/50 border-white/50 peer"
                type="email"
                onChange={(e) => setEmailAtom(e.target.value)}
                placeholder={item.labelInput}
              />
              <label className="absolute top-0 left-0 pl-4 peer-placeholder-shown:top-8 peer-focus:top-[20px] peer-focus:text-sm transition-all text-lg">
                {item.labelInput}
              </label>
              <DefaultButton
                text={item.buttonSubmit}
                isArrowIcon="true"
                styles="flex py-4 w-1/2 justify-center items-center font-semibold gap-2 text-xl"
                onClick={handlerEmail}
              />
            </div>
          </div>
        )}
      />
    </form>
  );
};

export default InputMembership;
