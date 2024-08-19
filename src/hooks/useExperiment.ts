import { useEffect, useState } from 'react'
import useRetryUntilResolved from './useRetryUntilResolved'

/**
 * Hook to get experiment data from the global b12Context
 *
 * You should pass the name of an experiment that you want to get data for
 * e.g.,
 * ```
 * const welcomeOfferExperiment = useExperiment('welcome_offer_coupon_experiment')
 * ```
 *
 * Then you need to check for required group (variant) slug like this:
 * ```
 * const isInHalfOffNowGroup = isInExperimentGroup(
 *   welcomeOfferExperiment,
 *   'half_off_now_welcome_offer_coupon'
 * )
 * ```
 *
 * You can get info about experiment slug and groups in product vip
 *
 * @param name Experiment slug
 * @returns Experiment object
 */

const useExperiment = (name: string): Experiment | null => {
  const [experiment, setExperiment] = useState<Experiment | null>(null)

  const hasResolved = useRetryUntilResolved(() => {
    return typeof window !== 'undefined' && typeof window.b12Context !== 'undefined'
  })

  useEffect(() => {
    if (!hasResolved) return

    if (b12Context?.experiments) {
      setExperiment(b12Context?.experiments[name])
    }
  }, [hasResolved])

  return experiment
}

export default useExperiment

export const isInExperimentGroup = (experiment: Experiment | null, groupSlug?: string) => {
  if (!experiment || !groupSlug || !experiment?.active) return false

  return experiment.group.slug === groupSlug
}
