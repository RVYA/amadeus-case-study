import "server-only"

import { i18n, type Locale } from "src/i18n-config"

// #region Constants
export type ConstantDictionary = typeof import("./constants/tr.json")

export async function getConstantsFor(
  locale: Locale,
): Promise<ConstantDictionary> {
  return (
    (await import(`./constants/${locale}.json`)).default ??
    (await import(`dictionaries/constants/${i18n.defaultLocale}.json`))
  )
}
// #endregion

// #region Dictionaries
// #endregion
