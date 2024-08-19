import React from 'react'
import { motion } from 'framer-motion'
import { theme } from '@styles/theme'

// Componets
import SectionNext from '@components/section-next/SectionNext'
import SectionNextHeader from '@components/section-next/SectionNextHeader'
import Icon from '@components/icon/Icon'
import Title from '@components/title/Title'
import Text from '@components/text/Text'
import Grid from '@components/grid/Grid'
import Card from '@components/card/Card'
import { Button } from '@components/button/Button'

type TBenefitItem = {
  icon?: React.ReactElement
  title: string
  subtitle: string
}

type TBenefits = {
  items: TBenefitItem[]
}

const HomeAnimatedBenefits = ({ items }: TBenefits) => {
  return (
    <SectionNext bg="">
      <SectionNextHeader maxWidth="900px" align="center">
        <Title align="center">Automated, collaborative, secure</Title>
        <Text align="center">
          Easily launch a beautiful, modern site that helps you accomplish more. Join 150,000+
          companies that rate B12 as a top website builder on Google, Trustpilot, and G2.
        </Text>
        <Button as="anchor" variant="primary" to="https://b12.io/signup/" label="Start for free" />
      </SectionNextHeader>
      <Grid>
        {items.map((item, idx) => {
          return (
            <motion.div
              key={`card-item-${idx}`}
              whileHover={{ y: -15 }}
              initial={{ y: 0 }}
              transition={{ type: 'bounce', duration: 0.3 }}
            >
              <Card
                style={{ height: '100%' }}
                bg={theme.colors.brand.accentLightest}
                borderRadius="36px"
                noBorder
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.8 }}
                variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
                transition={{ type: 'spring', delay: idx * 0.6, duration: 2 }}
              >
                {item.icon && <Icon light> {item.icon}</Icon>}
                <Title as="h3" textStyle="h4">
                  {item.title}
                </Title>
                <Text>{item.subtitle}</Text>
              </Card>
            </motion.div>
          )
        })}
      </Grid>
    </SectionNext>
  )
}

export default HomeAnimatedBenefits
