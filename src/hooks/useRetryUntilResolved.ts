import { useState } from 'react'
import useInterval from '@hooks/useInterval'

function useRetryUntilResolved(callback: () => boolean, interval = 100, timeout = 20000) {
  const [hasResolved, setHasResolved] = useState(false)

  useInterval(
    () => {
      const result = callback()

      if (result) {
        setHasResolved(true)
      }
    },
    hasResolved ? null : interval,
    timeout
  )

  return hasResolved
}

export default useRetryUntilResolved
