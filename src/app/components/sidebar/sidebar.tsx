'use client'

import * as React from 'react'
import {
  AudioWaveform,
  BellIcon,
  BriefcaseBusinessIcon,
  Command,
  GalleryVerticalEnd,
  HomeIcon,
  MailIcon,
  PlusIcon,
  SearchIcon,
  TrendingUpIcon
} from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail
} from '@/app/components/ui/sidebar'
import { OrgSwitcher } from './org-switcher'
import { NavMain } from './nav-main'
import { NavMore } from './nav-more'
import { NavUser } from './nav-user'

// This is sample data.
const data = {
  user: {
    name: 'aysaac',
    email: 'aysaacdev@example.com',
    avatar: 'https://github.com/shadcn.png'
  },
  teams: [
    {
      name: 'Acme Inc',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise'
    },
    {
      name: 'Acme Corp.',
      logo: AudioWaveform,
      plan: 'Startup'
    },
    {
      name: 'Evil Corp.',
      logo: Command,
      plan: 'Free'
    }
  ],
  navMain: [
    {
      title: 'Crear',
      url: '#',
      icon: PlusIcon,
      isActive: true
    },
    {
      title: 'Inicio',
      url: 'http://localhost:3000',
      icon: HomeIcon
    },
    {
      title: 'Explorar',
      url: '#',
      icon: SearchIcon
    },
    {
      title: 'Mensajes',
      url: 'http://localhost:3000/messages',
      icon: MailIcon
    }
  ],
  projects: [
    {
      name: 'Notificaciones',
      url: '#',
      icon: BellIcon
    },
    {
      name: 'Comunidad',
      url: 'http://localhost:3000/comunity',
      icon: BriefcaseBusinessIcon
    },
    {
      name: 'Tendencias',
      url: 'http://localhost:3000/trending',
      icon: TrendingUpIcon
    }
  ]
}

export function AppSidebar ({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible='icon' {...props}>
      <SidebarHeader>
        <OrgSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavMore projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
