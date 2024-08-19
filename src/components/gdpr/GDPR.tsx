import { useEffect, useState } from 'react'

import { Wrapper, Content, Text, Link, Button } from './GDPR.styles'

const GDPR = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Gets GDPR cookie value.
    // Regex from https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie#Example_2_Get_a_sample_cookie_named_test2
    const cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)gdpr\s*\=\s*([^;]*).*$)|^.*$/, '$1')

    if (cookieValue !== 'agreed') {
      setIsVisible(true)
    }
  }, [])

  const handleClick = () => {
    document.cookie = 'gdpr=agreed; path=/'
    setIsVisible(false)
  }

  if (isVisible) {
    return (
      <Wrapper>
        <Content>
          <Text>
            This website uses cookies to ensure you get the best browsing experience.&nbsp;
            <Link
              href="https://cdn.b12.io/client_media/dmdju/2a2cd5ca-4fd4-11e8-b1b5-0242ac110002-Privacy_Policy.pdf"
              target="_blank"
              aria-label="Click to learn more about our Privacy Policy"
              title="Click to learn more about our Privacy Policy"
            >
              Learn more about our Privacy Policy
            </Link>
          </Text>
          <Button type="button" onClick={handleClick}>
            I agree
          </Button>
        </Content>
      </Wrapper>
    )
  }

  return null
}

export default GDPR
