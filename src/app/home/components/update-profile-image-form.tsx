import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useUser } from '@clerk/nextjs';
import { Loader2, UploadCloud } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useState } from 'react';

interface UpdateProfileImageFormProps {
  onSelected: (file: File | null) => void
}

export function UpdateProfileImageForm({ onSelected }: UpdateProfileImageFormProps) {
  const [avatar, setAvatar] = useState<File | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const { isLoaded, isSignedIn, user } = useUser()
  const { toast } = useToast()

  const router = useRouter()

  function handleSelectFile(e: ChangeEvent<HTMLInputElement>) {
    const { files } = e.currentTarget

    if (!files) {
      return
    }

    const selectedFile = files[0]

    onSelected(selectedFile)
    setAvatar(selectedFile)
  }

  async function handleUpdateProfileImage(e: FormEvent) {
    e.preventDefault()

    if (!isLoaded || !isSignedIn || !avatar) return;

    try {
      setIsLoading(true)

      await user.setProfileImage({
        file: avatar
      })
  
      router.refresh()
    } catch (err: any) {
      toast({
        variant: 'destructive',
        title: 'Upload Error',
        description: err.errors[0].longMessage,
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleUpdateProfileImage} className="mt-[10px]">
      <label 
        htmlFor="avatar" 
        className="w-full h-[100px] border-2 border-dashed border-zinc-200 rounded-lg group flex flex-col items-center justify-center gap-2 hover:border-purple-700 hover:bg-zinc-50 transition-colors"
      >
        <UploadCloud className="h-6 w-6 stroke-zinc-300 group-hover:stroke-zinc-400 transition-colors" />

        <p className="text-center text-xs text-zinc-300 block w-32 group-hover:text-zinc-400 transition-colors">
          extensões permitidas: .png, .jpg, .jpeg
        </p>
      </label>

      <input type="file" id="avatar" onChange={handleSelectFile} className="sr-only" />

      <Button 
        disabled={isLoading} 
        className="w-full mt-[10px] bg-purple-700 hover:bg-purple-800"
      >
        {isLoading ? (
          <Loader2 className="h-6 w-6 stroke-white animate-spin" />
        ) : 'Atualizar'}
      </Button>
    </form>
  )
}