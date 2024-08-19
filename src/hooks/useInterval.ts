import { useEffect, useRef, useLayoutEffect } from 'react'

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

const useInterval = (callback: () => void, delay: number | null, timeout = 20000) => {
  const savedCallback = useRef(callback)

  // Remember the latest callback if it changes.
  useIsomorphicLayoutEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    // Don't schedule if no delay is specified.
    // Note: 0 is a valid value for delay.
    if (!delay && delay !== 0) {
      return
    }

    const id = setInterval(() => savedCallback.current(), delay)

    setTimeout(() => {
      clearInterval(id)
    }, timeout)

    return () => clearInterval(id)
  }, [delay])
}

export default useInterval
