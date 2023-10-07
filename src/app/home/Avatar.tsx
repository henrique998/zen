import { Avatar as AvatarContainer, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function Avatar() {
  return (
    <AvatarContainer>
      <AvatarImage 
        src="https://github.com/henrique998.png" 
      />
      <AvatarFallback>JD</AvatarFallback> 
    </AvatarContainer>
  )
}