import { usePathname } from 'next/navigation'

/**
 * Client side hook.
 * @returns true if it should be hidden
 */
export default function useDashboardHidden(): boolean {
  const pathname = usePathname()

  if (pathname?.includes('/dashboard')) {
    return false
  }

  return true
}
