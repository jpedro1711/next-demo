// app/dashboard/layout.tsx
import { ReactNode } from 'react'
import Link from 'next/link'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-100 dark:bg-gray-900 p-4 border-r">
        <nav className="flex flex-col gap-4">
          <Link href="/dashboard">🏠 Início</Link>
          <Link href="/dashboard/projetos">📁 Projetos</Link>
          <Link href="/dashboard/defeitos">🐞 Defeitos</Link>
          <Link href="/dashboard/relatorios">📊 Relatorios</Link>
          <Link href="/logout">🚪 Sair</Link>
        </nav>
      </aside>

      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  )
}
