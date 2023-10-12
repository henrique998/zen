'use client'

import { SocialButton } from '@/components/social-button'
import { useToast } from '@/components/ui/use-toast'
import { useSignIn } from '@clerk/nextjs'
import type { OAuthStrategy } from '@clerk/nextjs/server'
import Image from 'next/image'

export function ButtonsBox() {
  const { isLoaded, signIn } = useSignIn()
  const { toast } = useToast()

  function signInWith(strategy: OAuthStrategy) {
    if (!isLoaded) return

    return signIn.authenticateWithRedirect({
      strategy,
      redirectUrl: '/sso-callback',
      redirectUrlComplete: '/home'
    })
  }

  return (
    <div className="mt-6 flex items-center justify-center gap-4">
      <SocialButton onClick={() => signInWith('oauth_github')}>
        <Image src="/github-icon.svg" alt="" width={20} height={20} />
      </SocialButton>

      <SocialButton onClick={() => signInWith('oauth_google')}>
        <Image src="/google-icon.svg" alt="" width={20} height={20} />
      </SocialButton>

      <SocialButton onClick={() => signInWith('oauth_discord')}>
        <Image src="/discord-icon.svg" alt="" width={20} height={20} />
      </SocialButton>
    </div>
  )
}