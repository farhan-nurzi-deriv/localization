import { initReactI18next } from "react-i18next";
import i18n, { Resource, t } from "i18next";

type TLocalization = {
  namespace: string[];
  resources?: Resource;
};

export class Localization {
  namespace: string[];
  language: string = "EN";
  i18n: typeof i18n = i18n;

  constructor({ namespace, resources }: TLocalization) {
    this.namespace = namespace;

    i18n.use(initReactI18next).init({
      defaultNS: namespace[0],
      fallbackLng: "EN",
      lng: this.language,
      ns: this.namespace,
      resources,
    });
  }

  getLanguage() {
    return i18n.language;
  }

  setLanguage(language: string) {
    this.language = language;
    i18n.changeLanguage(language);
  }

  t(payload: Parameters<typeof t>[0]) {
    return t(payload);
  }
}
