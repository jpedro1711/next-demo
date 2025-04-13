// components/Header.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <header className="w-full border-b">
      <div className="container flex h-28 p-2 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/Logo.png"
            alt="Logo" 
            width={64} 
            height={64} 
            className="rounded m-5"
          />
        </Link>

        <span className="font-bold text-lg">Debuga<span className='underline decoration-emerald-500'>ê</span></span>

      </div>
    </header>
  )
}
