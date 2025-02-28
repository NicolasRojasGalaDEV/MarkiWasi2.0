import { Button } from '@/app/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/app/components/ui/card'
import { TrendCard } from './trend-card'

const users = [
  {
    category: 'kikobeats',
    postName: 'The Kiko Beats',
    reactionsCount: '100 likes'
  },
  {
    category: 'midudev',
    postName: 'Miguel Ángel Durán',
    reactionsCount: '100 likes'
  },
  {
    category: 'EmmaRincon',
    postName: 'Emanuel Rincón',
    reactionsCount: '100 likes'
  }
]

export function TrendingCard () {
  return (
    <Card className=' mt-10'>
      <CardHeader>
        <CardTitle>Hoy en Perú</CardTitle>
        <CardDescription>Tendencias de la semana en Perú</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='flex flex-col items-start'>
          {users.map(({ category, postName, reactionsCount }) => (
            <TrendCard
              key={`${postName}-${reactionsCount}`}
              category={category}
              postName={postName}
              reactionsCount={reactionsCount}
            ></TrendCard>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button>Ver más</Button>
      </CardFooter>
    </Card>
  )
}
