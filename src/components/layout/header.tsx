import React from 'react'
import { cn } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { HeaderTeamSwitcher } from './header-team-switcher'
import { sidebarData } from './data/sidebar-data'

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  fixed?: boolean
  ref?: React.Ref<HTMLElement>
  showLogo?: boolean
}

export const Header = ({
  className,
  fixed,
  children,
  showLogo = true,
  ...props
}: HeaderProps) => {
  const [offset, setOffset] = React.useState(0)

  React.useEffect(() => {
    const onScroll = () => {
      setOffset(document.body.scrollTop || document.documentElement.scrollTop)
    }

    // Add scroll listener to the body
    document.addEventListener('scroll', onScroll, { passive: true })

    // Clean up the event listener on unmount
    return () => document.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'bg-background flex h-16 items-center gap-3 p-4 sm:gap-4',
        fixed && 'header-fixed peer/header fixed z-50 w-[inherit] rounded-md',
        offset > 10 && fixed 
            ? 'shadow-md dark:shadow-sm'
            : 'shadow-none',
        className
      )}
      {...props}
    >
      <SidebarTrigger variant='outline' className='scale-125 sm:scale-100' />
      <Separator orientation='vertical' className='h-6' />
      
      {showLogo && (
        <>
          <div className="flex items-center">
            <HeaderTeamSwitcher teams={sidebarData.teams} />
          </div>
          <Separator orientation='vertical' className='h-6 ml-2 hidden sm:block' />
        </>
      )}
      
      <div className="flex-1" />
      
      {children}
    </header>
  )
}

Header.displayName = 'Header'
