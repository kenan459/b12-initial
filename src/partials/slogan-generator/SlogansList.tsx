// Components
import { Button } from '../../components/button/Button'
import Title from '../../components/title/Title'
import { StyledSectionNextHeader } from './SlogansList.styles'
import GeneratedItemsWrapper from '../text-generators-partials/GeneratedItemsWrapper'
import GeneratedItem from '../text-generators-partials/GeneratedItem'

type TSlogansList = {
  slogans: Array<string>
  generateSlogans: () => void
  loadingSlogans?: boolean
}

const SlogansList = (props: TSlogansList) => {
  const { slogans, generateSlogans, loadingSlogans = false } = props
  if (slogans.length === 0) {
    return null
  }
  return (
    <StyledSectionNextHeader align="center">
      <Title as="h3" className="slogans-list">
        Here are a few slogans that match your inputs
      </Title>
      <GeneratedItemsWrapper>
        {slogans.map((slogan, index) => (
          <GeneratedItem generatedText={slogan} key={index} />
        ))}
      </GeneratedItemsWrapper>
      <Button
        as="button"
        variant="primary"
        label="Load more"
        to="#"
        onClick={generateSlogans}
        loading={loadingSlogans}
      />
    </StyledSectionNextHeader>
  )
}

export default SlogansList
