function parseHttpUrl(value: string, name: string): URL {
  let url: URL
  try {
    url = new URL(value)
  } catch {
    throw new Error(`${name} must be an absolute HTTP(S) URL`)
  }
  if (url.protocol !== 'http:' && url.protocol !== 'https:') {
    throw new Error(`${name} must be an absolute HTTP(S) URL`)
  }
  return url
}

export async function checkSession(serviceUrl: string, signal?: AbortSignal): Promise<boolean> {
  const url = new URL('/auth/me', parseHttpUrl(serviceUrl, 'VITE_AUTH_SERVICE_URL'))
  const response = await fetch(url.href, { credentials: 'include', signal })
  if (response.status === 401) return false
  if (!response.ok) throw new Error(`Session check failed with HTTP ${response.status}`)
  return true
}

export function buildAuthRedirect(frontendUrl: string, currentUrl: string): string {
  const url = parseHttpUrl(frontendUrl, 'AUTH_FRONTEND_URL')
  url.searchParams.set('redirect', currentUrl)
  return url.href
}
