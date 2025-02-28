'use client'

import { Button } from '@/app/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/app/components/ui/card'
import { FollowingCard } from './following-card'

const users = [
  {
    userName: 'kikobeats',
    name: 'The Kiko Beats',
    isFollowing: true
  },
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true
  },
  {
    userName: 'EmmaRincon',
    name: 'Emanuel Rincón',
    isFollowing: true
  }
]

export function FollowCard () {
  return (
    <Card className=" mt-10">
      <CardHeader>
        <CardTitle>Deberías conocer</CardTitle>
        <CardDescription>Usuarios que siguen a MarkiWasi</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-start">
          {users.map(({ userName, name, isFollowing }) => (
            <FollowingCard
              key={`${userName}-${name}`}
              userName={userName}
              initialIsFollowing={isFollowing}
            >
              {name}
            </FollowingCard>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button>Ver más</Button>
      </CardFooter>
    </Card>
  )
}
