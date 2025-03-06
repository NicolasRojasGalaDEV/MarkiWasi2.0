import { type Database } from '../types/database'

type MessageEntity = Database['public']['Tables']['messages']['Row']
type UserEntity = Database['public']['Tables']['users']['Row']

export type Message = MessageEntity & {
  user: UserEntity
}
