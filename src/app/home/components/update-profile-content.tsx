'use client'

import { useUser } from '@clerk/nextjs'
import { useMemo, useState } from 'react'
import { UpdateProfileImageForm } from './update-profile-image-form'

export function UpdateProfileContent() {
  const [avatarFile, setAvatarFile] = useState<File | null>(null)
  const { user } = useUser()

  const previewUrl = useMemo(() => {
    if (!avatarFile) return null

    return URL.createObjectURL(avatarFile)
  }, [avatarFile])

  return (
    <div className="border-b border-b-zinc-200 p-3">
      <div className="flex items-center gap-[10px]">
        {previewUrl ? (
          <img 
            src={previewUrl}
            alt=""
            className="h-10 w-10 rounded-full object-cover"
          />
        ) : (
          <img 
            src={user?.imageUrl}
            alt=""
            className="h-10 w-10 rounded-full object-cover"
          />
        )}

        <span className="text-sm text-zinc-500">Foto de perfil</span>
      </div>

      <UpdateProfileImageForm onSelected={setAvatarFile} />
    </div>
  )
}