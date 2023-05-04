import { getDictionary } from '@/server/utils/getDictionary'

export async function generateRouteNames() {
  const tES = await getDictionary('es')
  const tEN = await getDictionary('en')

  return [
    { locale: 'es', path: tES('about.slug') },
    { locale: 'en', path: tEN('about.slug') },
  ]
}
