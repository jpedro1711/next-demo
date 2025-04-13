'use client'

export function Footer() {
  return (
    <footer className="w-full border-t mt-10">
      <div className="container mx-auto px-4 py-6 text-sm text-muted-foreground text-center">
        <span>
          © {new Date().getFullYear()} Debugaê. Todos os direitos reservados.
        </span>
      </div>
    </footer>
  )
}
