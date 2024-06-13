export type Translation = { locale: string; value: string }
export type TranslationOf<T, P extends keyof T> = Omit<T, P> &
  // eslint-disable-next-line no-use-before-define
  WithLocale<{
    // eslint-disable-next-line no-unused-vars
    [x in P]: string
  }>

export type WithLocale<T> = T & { locale: string }

export type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}${'' extends P ? '' : '.'}${P}`
    : never
  : never

export type Prev = [never, 0, 1, 2, 3, 4, ...0[]]

export type Paths<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
    ? {
        [K in keyof T]-?: K extends string | number ? `${K}` | Join<K, Paths<T[K], Prev[D]>> : never
      }[keyof T]
    : ''
