import Image from 'next/image';

export function BrandBg() {
  return (
    <div className="bg-zinc-950 items-center justify-center hidden lg:flex">
      <Image src="/white-logo-lg.svg" alt="" width={156} height={60} />
    </div>
  )
}