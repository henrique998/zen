import Image from 'next/image';
import { SocialButton } from '../components/SocialButton';

export function ButtonsBox() {
  return (
    <div className="mt-6 flex items-center justify-center gap-4">
      <SocialButton>
        <Image src="/github-icon.svg" alt="" width={20} height={20} />
      </SocialButton>

      <SocialButton>
        <Image src="/google-icon.svg" alt="" width={20} height={20} />
      </SocialButton>

      <SocialButton>
        <Image src="/x-icon.svg" alt="" width={20} height={20} />
      </SocialButton>
    </div>
  )
}