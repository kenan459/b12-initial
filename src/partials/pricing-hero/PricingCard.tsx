import {
  Wrapper,
  Popular,
  Title,
  PriceMonthly,
  PriceYearly,
  Period,
  Savings,
  Description,
  Users,
  Dify,
  DifyTitle,
  DifyDescription,
  StyledButton,
} from './PricingCard.styles'

// Types
export type Props = {
  slug?: string
  yearly: boolean
  title: string
  description: string
  price: {
    monthly: string | number
    yearly: string | number
  }
  users: string
  popular?: boolean
  savings: string
  discount?: string
  dify?: {
    title: string
    description: string
  }
}

const PricingCard = ({
  yearly = false,
  title = '',
  description = '',
  price,
  users,
  popular = false,
  savings,
  discount,
  dify,
}: Props) => (
  <Wrapper
    isPopular={popular}
    className={[popular && 'is-popular', yearly && 'is-yearly'].filter(Boolean).join(' ')}
  >
    {popular && <Popular>Most popular</Popular>}
    <Title>{title}</Title>
    <PriceMonthly>
      {price.monthly}
      <Period>/ month</Period>
    </PriceMonthly>
    <PriceYearly
      initial={{ opacity: 0, height: 0, y: -10 }}
      animate={{
        opacity: yearly ? 1 : 0,
        height: yearly ? 'auto' : 0,
        y: yearly ? 0 : -25,
      }}
    >
      {price.yearly}
      <Period>/ month</Period>
    </PriceYearly>
    {discount && (
      <Savings
        initial={{ opacity: 1, height: 'auto', marginTop: 0, marginBottom: 0 }}
        animate={{
          opacity: yearly ? 0 : 1,
          height: yearly ? 0 : 'auto',
          marginTop: yearly ? 0 : 20,
          marginBottom: yearly ? 0 : 8,
        }}
      >
        {discount}
      </Savings>
    )}
    <Savings
      initial={{ opacity: 0, height: 0, marginTop: 0, marginBottom: 0 }}
      animate={{
        opacity: yearly ? 1 : 0,
        height: yearly ? 'auto' : 0,
        marginTop: yearly ? 20 : 0,
        marginBottom: yearly ? 8 : 0,
      }}
    >
      {savings}
    </Savings>
    <Description>{description}</Description>
    <Users>{users}</Users>
    {dify && (
      <Dify>
        <DifyTitle>{dify.title}</DifyTitle>
        <DifyDescription>{dify.description}</DifyDescription>
      </Dify>
    )}
    <StyledButton
      as="anchor"
      to="https://b12.io/signup"
      label="Get started"
      variant={popular ? 'default' : 'primary'}
      fullWidth
      size="small"
      target="_blank"
    />
  </Wrapper>
)

export default PricingCard
