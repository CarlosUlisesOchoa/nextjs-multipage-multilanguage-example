import 'server-only'

async function loadDB() {
  const rawData = await import('./db.json')
  return rawData
}

export async function fetchDictionary(locale: string) {
  const db = await loadDB()
  return db.dictionaries.find((dictionary) => dictionary.locale === locale)
}