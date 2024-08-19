import { usePopupsQuery } from '@hooks/usePopupsQuery'
import useExperiment, { isInExperimentGroup } from '@hooks/useExperiment'

import Popup from './Popup'

const PopupContainer = ({ pathname }) => {
  const popup = usePopupsQuery(pathname)

  if (!popup) return null

  // Setup experiment data
  const experiment = useExperiment('rc_popup_experiment')
  const isInTestExperimentGroup = isInExperimentGroup(experiment, 'rc_popup_visible_20230823')
  const isInResourceCenter = pathname.includes('resource-center')

  // Don't show popup if we are in RC and not in the test group
  if (isInResourceCenter && !isInTestExperimentGroup) return null

  return <Popup data={popup} />
}

export default PopupContainer
