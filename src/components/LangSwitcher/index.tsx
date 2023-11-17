// components/LangSwitcher/index.tsx
import { useTranslation } from "next-i18next";
import { i18n } from "next-i18next";

const LangSwitcher = () => {
  const { t } = useTranslation("common");

  const switchLanguage = (language: string) => {
    i18n?.changeLanguage(language); // Use optional chaining here
  };

  return (
    <div>
      <button onClick={() => switchLanguage("en")}>English</button>
      <button onClick={() => switchLanguage("ja")}>日本語</button>
    </div>
  );
};

export default LangSwitcher;
