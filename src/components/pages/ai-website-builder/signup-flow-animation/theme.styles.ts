import styled from '@emotion/styled'
import { theme, mq } from '@styles/theme'
import { motion } from 'framer-motion'

// Components
import Title from '@components/title/Title'
import Text from '@components/text/Text'

export const themeContentVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { staggerChildren: 0.5, delay: 0.2, duration: 0.3 } },
}

export const Logo = styled(Title)<{ alternative?: boolean }>`
  font-size: 6px;
  line-height: 7px;
  letter-spacing: 1px;
  font-weight: ${(props) => (props.alternative ? '600' : '700')};
  font-family: ${(props) => (props.alternative ? 'Libre Baskerville' : 'Poppins')};
  color: ${(props) => (props.alternative ? theme.palette.common.white : '#020402')};
  text-transform: ${(props) => (props.alternative ? 'capitalize' : 'uppercase')};

  ${mq['md']} {
    font-size: 9px;
    line-height: 1.2;
  }
`

export const LaptopFrame = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 290px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fcfcfc;
  border-radius: 15px;
  box-shadow: 0 20px 30px 0 rgb(22 14 51 / 10%);
  border: 1px solid ${theme.colors.surface.borderLight};
  padding: 8px;
  margin: 0 auto;

  ${mq['md']} {
    padding: 20px;
    height: 450px;
    padding: 20px;
    border-radius: 25px;
    margin: 0 auto;
    max-width: 650px;
  }
`

export const Header = styled(motion.div)`
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: 2fr 3fr;
  padding: 6px 20px;
  z-index: 10;

  ${mq['md']} {
    padding: 12px 40px;
    grid-template-columns: 1fr 3fr;
  }

  ${mq['lg']} {
    padding: 12px 60px;
  }
`

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${theme.colors.surface.border};
`

export const StyledTitle = styled(Title)<{ alternative?: boolean }>`
  font-size: 8px;
  line-height: 10px;
  font-weight: 600;
  margin: ${(props) => (props.alternative ? '6px 0' : '4px 0')};
  color: ${(props) => (props.alternative ? theme.colors.text.white : '#020402')};
  font-family: ${(props) => (props.alternative ? 'Libre Baskerville' : 'Poppins')};

  ${mq['sm']} {
    font-size: 8px;
    line-height: 10px;
  }

  ${mq['md']} {
    line-height: 20px;
    font-size: ${(props) => (props.alternative ? '14px' : '15px')};
    margin: ${(props) => (props.alternative ? '8px 0' : '12px 0')};
  }
`

export const TextContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
`

// Clean theme styles
export const CleanThemeWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: 1px solid ${theme.colors.surface.borderLight};
  border-radius: 8px;
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  align-items: center;
  gap: 10px;
  padding: 20px;
  height: 100%;

  .theme-image-desktop {
    display: none;
  }

  ${mq['md']} {
    padding: 0 40px;
    gap: 20px;

    .theme-image-desktop {
      display: block;
    }

    .theme-image-mobile {
      display: none;
    }
  }

  ${mq['lg']} {
    padding: 0 60px;
    gap: 50px;
  }
`

export const Eyebrow = styled.span<{ alternative?: boolean }>`
  text-align: left;
  font-weight: 700;
  font-size: ${(props) => (props.alternative ? '5px' : '6px')};
  line-height: ${(props) => (props.alternative ? '7px' : '6px')};
  font-family: ${(props) => (props.alternative ? 'Muli' : 'Poppins')};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: ${(props) => (props.alternative ? 500 : '600')};
  color: ${(props) => (props.alternative ? theme.colors.text.white : '#32aa27')};

  ${mq['md']} {
    font-size: ${(props) => (props.alternative ? '8px' : '9px')};
    line-height: ${(props) => (props.alternative ? '10px' : '11px')};
  }
`

export const NextSection = styled.div`
  background: #eef1ef;
  height: 30px;
`

export const Navigation = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: flex-end;
  gap: 5px;

  ${mq['md']} {
    gap: 12px;
  }
`

export const NavLink = styled.li<{ active?: boolean; alternative?: boolean }>`
  font-size: 5px;
  line-height: 1.25;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: capitalize;
  text-decoration: none;
  display: inline-block;
  margin: 0;
  padding: 2px 0;
  font-family: ${(props) => (props.alternative ? 'Muli' : 'Poppins')};
  color: ${(props) => (props.alternative ? theme.colors.text.white : '#595959')};

  ${(props) =>
    props.active &&
    `
    border-bottom: 1px solid #32aa27; color: #32aa27 !important;`}

  ${mq['md']} {
    font-size: 9px;
    padding: 4px 0;
    ${(props) =>
      props.active &&
      `
    border-bottom: 2px solid #32aa27;`}
  }
`

export const StyledText = styled(Text)`
  font-size: 7px;
  line-height: 10px;
  text-align: left;
  font-family: Poppins;
  font-weight: 400;
  color: #595959;
  margin-bottom: 5px;

  ${mq['sm']} {
    font-size: 7px;
    line-height: 10px;
  }

  ${mq['md']} {
    font-size: 9px;
    line-height: 14px;
    margin-bottom: 12px;
  }

  ${mq['lg']} {
    font-size: 11px;
    line-height: 18px;
    margin-bottom: 12px;
  }

  &.underline {
    text-decoration: underline;
  }
`

// Classic theme styles
export const ClassicThemeWrapper = styled(motion.div)`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: 1px solid ${theme.colors.surface.borderLight};
  border-radius: 8px;
`

export const ClassicContent = styled.div`
  padding: 10px 20px 0 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  z-index: 10;

  .theme-image-desktop,
  .theme-image-tablet {
    display: none;
  }

  ${mq['md']} {
    padding: 30px 40px 0px 40px;

    .theme-image-tablet {
      display: block;
    }

    .theme-image-mobile {
      display: none;
    }
  }

  ${mq['lg']} {
    padding: 30px 60px 0px 60px;

    .theme-image-tablet {
      display: none;
    }

    .theme-image-desktop {
      display: block;
    }
  }
`

export const ThemeBackground = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 70%;
  left: 0;
  top: 0;
  right: 0;
  bottom: 40px;
  background-color: #062767;
  border-radius: 8px 8px 0 0;
`

export const StyledButton = styled.button`
  all: unset;
  padding: 3px 5px;
  border-radius: 3px;
  background-color: #141c26;
  color: ${theme.colors.text.white};
  font-size: 6px;
  font-family: Muli;
  font-weight: 500;

  ${mq['md']} {
    padding: 6px 10px;
    font-size: 9px;
  }
`
