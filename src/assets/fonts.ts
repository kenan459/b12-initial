import { css } from '@emotion/react'

const fontsPath = `/fonts/`

const fonts = css`
  @font-face {
    font-family: 'Heebo';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(''), url('${fontsPath}heebo-v9-latin-regular.woff2') format('woff2'),
      url('${fontsPath}heebo-v9-latin-regular.woff') format('woff');
  }

  @font-face {
    font-family: 'Heebo';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local(''), url('${fontsPath}heebo-v9-latin-500.woff2') format('woff2'),
      url('${fontsPath}heebo-v9-latin-500.woff') format('woff');
  }

  @font-face {
    font-family: 'Heebo';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local(''), url('${fontsPath}heebo-latin-600.woff2') format('woff2'),
      url('${fontsPath}heebo-latin-600.woff') format('woff');
  }

  @font-face {
    font-family: 'Heebo';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local(''), url('${fontsPath}heebo-v9-latin-700.woff2') format('woff2'),
      url('${fontsPath}heebo-v9-latin-700.woff') format('woff');
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Roboto'), local('Roboto-Regular'),
      url('${fontsPath}roboto-v20-latin-regular.woff2') format('woff2'),
      url('${fontsPath}roboto-v20-latin-regular.woff') format('woff');
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local('Roboto Medium'), local('Roboto-Medium'),
      url('${fontsPath}roboto-v20-latin-500.woff2') format('woff2'),
      url('${fontsPath}roboto-v20-latin-500.woff') format('woff');
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('Roboto Bold'), local('Roboto-Bold'),
      url('${fontsPath}roboto-v20-latin-700.woff2') format('woff2'),
      url('${fontsPath}roboto-v20-latin-700.woff') format('woff');
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('Poppins Bold'), local('Poppins-Bold'),
      url('${fontsPath}poppins-bold.woff2') format('woff2'),
      url('${fontsPath}poppins-bold.woff') format('woff');
  }
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Poppins'), local('Poppins'),
      url('${fontsPath}poppins-regular.woff2') format('woff2'),
      url('${fontsPath}poppins-regular.woff') format('woff');
  }
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local('Poppins'), local('Poppins'), url('${fontsPath}poppins-medium.woff2') format('woff2'),
      url('${fontsPath}poppins-medium.woff') format('woff');
  }
  @font-face {
    font-family: 'Libre Baskerville';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('Libre Baskerville'), local('Libre Baskerville'),
      url('${fontsPath}librebaskerville-bold.woff2') format('woff2'),
      url('${fontsPath}librebaskerville-bold.woff') format('woff');
  }
  @font-face {
    font-family: 'Muli';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local('Muli'), local('Muli'), url('${fontsPath}muli-semibold.woff2') format('woff2'),
      url('${fontsPath}muli-semibold.woff') format('woff');
  }
`

export default fonts
