/* eslint-disable react/jsx-closing-bracket-location */
import { cn } from '@/libs/utils'
import { SVGProps } from 'react'

export default function HamburgerIcon({ className, ...props }: Readonly<SVGProps<SVGSVGElement>>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='currentColor'
      aria-hidden='true'
      className={cn('size-5 text-inherit', className)}
      {...props}>
      <path d='M4 18L20 18' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
      <path d='M4 12L20 12' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
      <path d='M4 6L20 6' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
    </svg>
  )
}
