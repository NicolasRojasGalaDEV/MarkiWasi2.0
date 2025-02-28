import { useState } from 'react'
import { Button } from '@/app/components/ui/button'

interface FollowingCardProps {
  children: React.ReactNode
  userName: string
  initialIsFollowing: boolean
}

export function FollowingCard ({ children, userName, initialIsFollowing }: FollowingCardProps) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className="flex items-center justify-between py-4 text-gray-800 rounded-lg w-full gap-x-6">
      <header className="flex items-center gap-4">
        <img
          className="w-10 h-10 rounded-full"
          alt={`El avatar de ${userName}`}
          src={`https://unavatar.io/${userName}`}
        />
        <div className="flex flex-col">
          <strong className="text-sm">{children}</strong>
          <span className="text-gray-500 text-xs">@{userName}</span>
        </div>
      </header>

      <aside>
        <Button
          variant={isFollowing ? "secondary" : "outline"}
          className="min-w-[90px] px-3 py-1 text-sm transition-all"
          onClick={handleClick}
        >
          { isFollowing ? (
            <span className="group relative">
              <span className="block group-hover:hidden">Following</span>
              <span className="hidden group-hover:block text-red-500">Unfollow</span>
            </span>
            ) : (
            'Follow')}
        </Button>
      </aside>
    </article>
  )
}
