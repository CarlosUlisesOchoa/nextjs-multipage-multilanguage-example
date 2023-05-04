import 'server-only'
import { getPropValue } from '@/features/common/utils/getPropValue'
import { fetchDictionary } from '@/server/db'
import type { Paths } from '@/server/db/types'
import { getPageLocale } from '@/server/router'

export async function getDictionary(locale: string = getPageLocale()) {
  const dictionary = await fetchDictionary(locale)

  if (!dictionary) {
    throw new Error(`Dictionary does not exists for locale "${locale}".`)
  }

  return (propName: Paths<typeof dictionary.value>) => {
    const defaultValue =
      process.env.NODE_ENV === 'development'
        ? `MissingTranslation(${locale}): "${propName}"`
        : propName

    return getPropValue(dictionary.value, propName, defaultValue)
  }
}
