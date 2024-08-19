import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { StaticImage } from 'gatsby-plugin-image'

import {
  ClassicThemeWrapper,
  ThemeBackground,
  Header,
  Logo,
  Navigation,
  NavLink,
  Eyebrow,
  ClassicContent,
  StyledTitle,
  TextContent,
  StyledButton,
} from './theme.styles'

export const ClassicTheme = () => {
  const [updatedContent, setUpdatedContent] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setUpdatedContent(true)
    }, 4200)
  }, [])

  return (
    <>
      <ClassicThemeWrapper>
        <ThemeBackground
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.3 } }}
        />
        <Header
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.3 } }}
        >
          <Logo textStyle="h5" alternative>
            Conrad Consulting
          </Logo>
          <Navigation>
            <NavLink alternative>Home</NavLink>
            <NavLink alternative>About</NavLink>
            <NavLink alternative>Services</NavLink>
            <NavLink alternative>Team</NavLink>
            <NavLink alternative>Contact</NavLink>
          </Navigation>
        </Header>
        <ClassicContent>
          <TextContent
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.3 } }}
            style={{ alignItems: 'center' }}
          >
            <Eyebrow alternative>
              {updatedContent ? 'Discover your potential' : 'Transform your life'}
            </Eyebrow>
            <StyledTitle alternative align="center">
              {updatedContent
                ? 'Unlock your full potential with our coaching services'
                : 'Unlock your potential with personal coaching'}
            </StyledTitle>
            <StyledButton disabled>View services</StyledButton>
          </TextContent>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.4 } }}
          >
            {updatedContent ? (
              <>
                <StaticImage
                  src="../../../../images/conrad-image.jpg"
                  className="theme-image-desktop"
                  alt="Conrad Consulting"
                  placeholder="blurred"
                  layout="fixed"
                  height={200}
                  width={450}
                  quality={100}
                  style={{ marginTop: '20px' }}
                />
                <StaticImage
                  src="../../../../images/conrad-image.jpg"
                  className="theme-image-tablet"
                  alt="Conrad Consulting"
                  placeholder="blurred"
                  layout="fixed"
                  height={180}
                  width={400}
                  quality={100}
                  style={{ marginTop: '20px' }}
                />
                <StaticImage
                  src="../../../../images/conrad-image.jpg"
                  className="theme-image-mobile"
                  alt="Conrad Consulting"
                  placeholder="blurred"
                  layout="fixed"
                  height={90}
                  width={220}
                  quality={100}
                  style={{ marginTop: '8px' }}
                />
              </>
            ) : (
              <>
                <StaticImage
                  src="../../../../images/conrad-consulting.jpg"
                  className="theme-image-desktop"
                  alt="Conrad Consulting"
                  placeholder="blurred"
                  layout="fixed"
                  height={200}
                  width={450}
                  quality={100}
                  style={{ marginTop: '20px' }}
                />
                <StaticImage
                  src="../../../../images/conrad-consulting.jpg"
                  className="theme-image-tablet"
                  alt="Conrad Consulting"
                  placeholder="blurred"
                  layout="fixed"
                  height={190}
                  width={400}
                  quality={100}
                  style={{ marginTop: '20px' }}
                />
                <StaticImage
                  src="../../../../images/conrad-consulting.jpg"
                  className="theme-image-mobile"
                  alt="Conrad Consulting"
                  placeholder="blurred"
                  layout="fixed"
                  height={90}
                  width={220}
                  quality={100}
                  style={{ marginTop: '8px' }}
                />
              </>
            )}
          </motion.div>
        </ClassicContent>
      </ClassicThemeWrapper>
    </>
  )
}
