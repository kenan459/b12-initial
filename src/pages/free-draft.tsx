import React from 'react'
import useExperiment, { isInExperimentGroup } from '@hooks/useExperiment'

// Componenets
import SEO from '@components/SEO'
import LayoutClean from '@components/layouts/LayoutClean'
import FreeDraftExperiment from '@components/pages/free-draft/ExperimentLayout'
import FreeDraftControl from '@components/pages/free-draft/ControlLayout'

const FreeDraft = () => {
  const experiment = useExperiment('free_draft_vs_1_dollar_trial_experiment_20240515')

  if (experiment === null) {
    return <></>
  }

  const isInExperiment = isInExperimentGroup(experiment, '1_dollar_trial_page')

  return (
    <>
      {isInExperiment ? (
        <LayoutClean gdprHidden>
          <FreeDraftExperiment />
        </LayoutClean>
      ) : (
        <LayoutClean gdprHidden>
          <FreeDraftControl />
        </LayoutClean>
      )}
    </>
  )
}

export default FreeDraft

export const Head = () => {
  return <SEO pageTitle="Smart websites at your service" />
}
