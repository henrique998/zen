export function Separator() {
  return (
    <div className="w-full flex items-center justify-center gap-[10px] mt-6">
      <div className="h-[1px] w-full bg-border flex-1" />
      <span className="text-xs text-zinc-900 text-center">Ou entre com</span>
      <div className="h-[1px] w-full bg-border flex-1" />
    </div>
  )
}