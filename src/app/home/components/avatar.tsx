'use client'

import { Avatar as AvatarContainer, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useUser } from '@clerk/nextjs';
import { User } from 'lucide-react';

export function Avatar() {
  const { user } = useUser()

  return (
    <AvatarContainer>
      <AvatarImage 
        src={user?.imageUrl}
        className="object-cover"
      />
      <AvatarFallback>
        <User className="stroke-zinc-600" />  
      </AvatarFallback> 
    </AvatarContainer>
  )
}