import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { SidebarLayout } from '../components/sidebar/sidebar-layout'
import { type Database } from '@/app/types/database'
import { redirect } from 'next/navigation'

export default async function Messages () {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  if (session === null) {
    redirect('/login')
  }

  const userId = session.user.id

  const { data: messages } = await supabase
    .from('messages')
    .select('*,sender:users!messages_sender_id_fkey(name, avatar_url, user_name),receiver:users!messages_receiver_id_fkey(name, avatar_url, user_name)')
    .or(`sender_id.eq.${userId}, receiver_id.eq.${userId}`)
    .order('created_at', { ascending: false })
  return (
    <SidebarLayout>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <pre>
            <h1>Hola</h1>
            {JSON.stringify(messages, null, 2)}
            {messages[0].sender.name}
            { console.log(messages) }
            { console.log(messages[0].sender.name) } 
        </pre>
        </div>
    </SidebarLayout>
  )
}
