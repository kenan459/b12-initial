import React from 'react'
import { motion } from 'framer-motion'
import { StaticImage } from 'gatsby-plugin-image'

import {
  CleanThemeWrapper,
  TextContent,
  Header,
  Divider,
  Logo,
  Navigation,
  NavLink,
  Content,
  Eyebrow,
  StyledTitle,
  StyledText,
  NextSection,
} from './theme.styles'

export const CleanTheme = () => {
  return (
    <CleanThemeWrapper>
      <Header
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.3 } }}
      >
        <Logo textStyle="h5">Conrad Consulting</Logo>
        <Navigation>
          <NavLink>Home</NavLink>
          <NavLink active>About</NavLink>
          <NavLink>Services</NavLink>
          <NavLink>Team</NavLink>
          <NavLink>Contact</NavLink>
        </Navigation>
      </Header>
      <Divider />
      <Content>
        <TextContent
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.3 } }}
        >
          <Eyebrow>Transform your life</Eyebrow>
          <StyledTitle>Unlock your potential with personal coaching</StyledTitle>
          <StyledText>
            At Conrad Consulting, we believe there is a better way to meet our clients' needs. We're
            a company that exists to help you achieve more than you ever thought possible.
          </StyledText>
          <StyledText className="underline">Get in touch</StyledText>
        </TextContent>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.4 } }}
        >
          <StaticImage
            src="../../../../images/conrad-consulting.jpg"
            className="theme-image-mobile"
            alt="Professional websites"
            placeholder="blurred"
            layout="fixed"
            height={105}
            width={80}
            quality={100}
            style={{ objectFit: 'cover', objectPosition: 'top' }}
          />
          <StaticImage
            src="../../../../images/conrad-consulting.jpg"
            className="theme-image-desktop"
            alt="Professional websites"
            placeholder="blurred"
            layout="fixed"
            height={240}
            width={180}
            quality={100}
            style={{ objectFit: 'cover', objectPosition: 'top' }}
          />
        </motion.div>
      </Content>
      <NextSection />
    </CleanThemeWrapper>
  )
}
