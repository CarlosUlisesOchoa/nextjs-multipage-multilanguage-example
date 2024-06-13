/* eslint-disable react/jsx-closing-bracket-location */
import { cn } from '@/libs/utils'
import { SVGProps } from 'react'

export default function XIcon({ className, ...props }: Readonly<SVGProps<SVGSVGElement>>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='currentColor'
      aria-hidden='true'
      className={cn('size-5 text-inherit', className)}
      {...props}>
      <path
        d='M3 21.32L21 3.32001'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M3 3.32001L21 21.32'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
