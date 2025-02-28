import { SidebarLayout } from '../components/sidebar/sidebar-layout'
import { ClassCards } from '../components/comunity/class-cards'

export default function Comunity () {
  return (
    <SidebarLayout>
        <section className="flex flex-col items-center justify-center min-h-screen">
        <ClassCards />
        </section>
    </SidebarLayout>
  )
}
