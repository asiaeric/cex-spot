import i18n from "i18next";

import * as en from "./en";
import * as vn from "./vn";

type TupleUnion<U extends string, R extends unknown[] = []> = {
  [S in U]: Exclude<U, S> extends never
    ? [...R, S]
    : TupleUnion<Exclude<U, S>, [...R, S]>;
}[U];

const ns = Object.keys(en).map((key) => `cex-spot/${key}`) as TupleUnion<
  keyof typeof en
>;

export const defaultNS = ns[0];

export const languageResources = {
  en,
  vn,
};

export const languageNames: Record<string, string> = {
  en: "English",
  vn: "Tiếng Việt",
};

const initCexSpotI18n = (hostI18n = i18n) => {
  // Add your resources to the host i18next instance
  Object.entries(languageResources).forEach(([lang, namespaces]) => {
    Object.entries(namespaces).forEach(([ns, resources]) => {
      hostI18n.addResourceBundle(lang, `cex-spot/${ns}`, resources, true, true);
    });
  });
};

export { initCexSpotI18n };
