'use client'

import { Avatar as AvatarContainer, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useUser } from '@clerk/nextjs';

export function Avatar() {
  const { user } = useUser()

  return (
    <AvatarContainer>
      <AvatarImage 
        src={user?.imageUrl}
        className="object-cover"
      />
      <AvatarFallback>JD</AvatarFallback> 
    </AvatarContainer>
  )
}