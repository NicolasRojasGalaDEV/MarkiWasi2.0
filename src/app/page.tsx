import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { AuthButtonServer } from '@/app/components/auth-button-server'
import { redirect } from 'next/navigation'
import { PostLists } from './components/posts-list'
import { type Database } from './types/database'
import { ComposePost } from './components/compose-post'
import { StateSection } from './components/state-section'
import { TrendingCard } from './components/trending-card'
import { FollowCard } from './components/follow-card'
import { SidebarLayout } from './components/sidebar/sidebar-layout'

export default async function Home () {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  if (session === null) {
    redirect('/login')
  }

  const { data: posts } = await supabase
    .from('posts')
    .select('*, user:users(name, avatar_url, user_name)')
    .order('created_at', { ascending: false })

  return (
    <SidebarLayout>
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,_1fr)_auto] gap-4 min-h-screen p-4 md:gap-y-20 ">
      {/* Main Content - Centrado con ancho máximo */}
      <section
        className="flex flex-col items-center mx-auto w-full max-w-[650px]"
      >
        <section
          className="mt-10 mb-6 md:mt-20 md:mb-10 w-full flex items-center justify-center"
        >
          <StateSection />
        </section>
        <main
          className="w-full flex flex-col gap-y-6 md:gap-y-10 scrollable-container"
        >
          <ComposePost userAvatarUrl={session.user?.user_metadata?.avatar_url} />
          <PostLists posts={posts} />
          <AuthButtonServer />
        </main>
      </section>

      {/* Sidebar - Alineado a la Derecha con Ancho Máximo */}
      <section className="flex flex-col items-center p-y-4 max-w-[450px] w-full justify-self-end px-10">
        <section id="topTrends" className="w-full">
          <TrendingCard />
        </section>
        <section id="followSection" className="w-full mt-6">
          <FollowCard />
        </section>
      </section>
      </div>
    </SidebarLayout>
  )
}
