import type { Metadata } from 'next'
import type { GenerateMetadataProps, PageProps } from 'next-roots'
import { Page } from '@/features/common/components/Page'
import { getAboutHref, router } from '@/server/router'
import { getDictionary } from '@/server/utils/getDictionary'

async function getData(locale: string) {
  const t = await getDictionary(locale)
  return {
    title: t('about.title'),
    content: t('about.content'),
    href: getAboutHref(locale),
  }
}

export default async function AboutPage({ pageHref }: PageProps) {
  const pageLocale = router.getLocaleFromHref(pageHref)

  const { title, content } = await getData(pageLocale)
  return (
    // @ts-expect-error Async Server Component
    <Page title={title} content={content} />
  )
}

export async function generateMetadata({
  pageHref,
}: GenerateMetadataProps<void>): Promise<Metadata> {
  const pageLocale = router.getLocaleFromHref(pageHref)
  const { title, content } = await getData(pageLocale)

  return { title, description: content }
}
