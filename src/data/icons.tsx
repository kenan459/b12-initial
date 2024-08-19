// Icons

import IconSimple from '@images/icons/simple.inline.svg'
import IconPen from '@images/icons/pen.inline.svg'
import IconChart from '@images/icons/chart.inline.svg'
import IconNewsletter from '@images/icons/newsletter.inline.svg'
import IconDocument from '@images/icons/firstdraft.inline.svg'
import IconSetup from '@images/icons/setup.inline.svg'
import IconPeople from '@images/icons/people.inline.svg'
import IconComment from '@images/icons/comment.inline.svg'
import IconFeedback from '@images/icons/sharefeedback.inline.svg'
import IconAi from '@images/icons/ai.inline.svg'
import IconFinances from '@images/icons/financial.inline.svg'
import IconAccountants from '@images/icons/accountants.inline.svg'
import IconRealEstate from '@images/icons/real-estate.inline.svg'
import IconArchitect from '@images/icons/architect.inline.svg'
import IconLaw from '@images/icons/law.inline.svg'
import IconInsurance from '@images/icons/insurance.inline.svg'
import IconMortgageBrokers from '@images/icons/mortgage-brokers.inline.svg'
import IconRocket from '@images/icons/rocket.inline.svg'
import IconItServices from '@images/icons/it-services.inline.svg'

// Types
type TIcons = {
  [key: string]: React.FC
}

// Icons mappings

const iconsData: TIcons = {
  accountants: (props) => <IconAccountants {...props} />,
  ai: (props) => <IconAi {...props} />,
  architect: (props) => <IconArchitect {...props} />,
  chart: (props) => <IconChart {...props} />,
  comment: (props) => <IconComment {...props} />,
  document: (props) => <IconDocument {...props} />,
  idea: (props) => <IconSimple {...props} />,
  insurance: (props) => <IconInsurance {...props} />,
  it_services: (props) => <IconItServices {...props} />,
  feedback: (props) => <IconFeedback {...props} />,
  finances: (props) => <IconFinances {...props} />,
  law: (props) => <IconLaw {...props} />,
  mortgage_broker: (props) => <IconMortgageBrokers {...props} />,
  newsletter: (props) => <IconNewsletter {...props} />,
  pen: (props) => <IconPen {...props} />,
  people: (props) => <IconPeople {...props} />,
  real_estate: (props) => <IconRealEstate {...props} />,
  rocket: (props) => <IconRocket {...props} />,
  setup: (props) => <IconSetup {...props} />,
}

export const getIcon = (name: string, props?: React.ComponentProps<any>) => {
  const Icon = iconsData[name]

  return <Icon {...props} />
}
