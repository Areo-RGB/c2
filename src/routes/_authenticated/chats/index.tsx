import { createFileRoute } from '@tanstack/react-router'
import { useNavigate, useRouter } from '@tanstack/react-router'
import { useEffect } from 'react'

export const Route = createFileRoute('/_authenticated/chats/')({
  component: ChatsIndex,
})

function ChatsIndex() {
  const navigate = useNavigate()
  const router = useRouter()

  useEffect(() => {
    // Only redirect if we're exactly at /chats/ path
    // This allows subpaths like /chats/player-progress to work
    if (router.state.location.pathname === '/chats' || 
        router.state.location.pathname === '/chats/') {
      navigate({ to: '/statistiken' })
    }
  }, [navigate, router.state.location.pathname])

  return null
}
