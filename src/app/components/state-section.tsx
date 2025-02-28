import AvatarPost from '@/app/avatar/avatar-post'

export function StateSection () {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row gap-x-10">
        <div className="rounded-full border-4 border-yellow-600 w-16 h-16 mb-4">
          <AvatarPost />
        </div>
        <div className="rounded-full border-4 border-yellow-600 w-16 h-16 mb-4">
          <AvatarPost />
        </div>
        <div className="rounded-full border-4 border-yellow-600 w-16 h-16 mb-4">
          <AvatarPost />
        </div>
        <div className="rounded-full border-4 border-yellow-600 w-16 h-16 mb-4">
          <AvatarPost />
        </div>
        <div className="rounded-full border-4 border-yellow-600 w-16 h-16 mb-4">
          <AvatarPost />
        </div>
        <div className="rounded-full border-4 border-yellow-600 w-16 h-16 mb-4">
          <AvatarPost />
        </div>
      </div>
      <div></div>
    </div>
  )
}
