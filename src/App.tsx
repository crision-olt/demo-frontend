import { useLingui } from '@lingui/react/macro'
import { useEffect, useState } from 'react'
import { buildAuthRedirect, checkSession } from '@/lib/session'

export default function App() {
  const { t } = useLingui()
  const [status, setStatus] = useState<'checking' | 'authenticated' | 'error'>('checking')

  useEffect(() => {
    const controller = new AbortController()

    async function authenticate() {
      try {
        const authenticated = await checkSession(import.meta.env.VITE_AUTH_SERVICE_URL, controller.signal)
        if (controller.signal.aborted) return
        if (authenticated) {
          setStatus('authenticated')
        } else {
          window.location.assign(buildAuthRedirect(import.meta.env.AUTH_FRONTEND_URL, window.location.href))
        }
      } catch (error) {
        if (controller.signal.aborted) return
        console.error('Authentication check failed:', error)
        setStatus('error')
      }
    }

    void authenticate()
    return () => controller.abort()
  }, [])

  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      {status === 'checking' && <p role="status">{t`Checking your session...`}</p>}
      {status === 'authenticated' && <h1>{t`You are logged in.`}</h1>}
      {status === 'error' && <p role="alert">{t`Unable to check your session. Please try again later.`}</p>}
    </main>
  )
}
