'use client'

import { SocialButton } from '@/components/social-button'
import { useSignUp } from '@clerk/nextjs'
import { OAuthStrategy } from '@clerk/nextjs/server'
import Image from 'next/image'
import { useCallback } from 'react'

export function ButtonsBox() {
  const { isLoaded, signUp } = useSignUp()

  const  signUpWith = useCallback((strategy: OAuthStrategy) => {
    if (!isLoaded) return

    return signUp.authenticateWithRedirect({
      strategy,
      redirectUrl: '/sso-callback',
      redirectUrlComplete: '/home'
    })
  }, [])

  return (
    <div className="mt-6 flex items-center justify-center gap-4">
      <SocialButton onClick={() => signUpWith('oauth_github')}>
        <Image src="/github-icon.svg" alt="" width={20} height={20} />
      </SocialButton>

      <SocialButton onClick={() => signUpWith('oauth_google')}>
        <Image src="/google-icon.svg" alt="" width={20} height={20} />
      </SocialButton>

      <SocialButton onClick={() => signUpWith('oauth_discord')}>
        <Image src="/discord-icon.svg" alt="" width={20} height={20} />
      </SocialButton>
    </div>
  )
}