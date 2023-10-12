export function Footer() {
  const now = new Date()

  return (
    <footer className="w-full text-center">
      <span className="font-medium text-xs text-zinc-300">
        &copy; {now.getFullYear()} Zen. Todos os direitos reservados.
      </span>
    </footer>
  )
}