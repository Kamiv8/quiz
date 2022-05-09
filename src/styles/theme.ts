interface ThemeType {
  colors?: {
    white: string,
    main: string,
    second: string,
    gray: string,
    blue: string,
    black50: string,
  },
  gradients?: {
    html: string,
    css: string,
    js: string,
    angular: string,
    react: string
  },
  device: {
    mobileS: string,
    mobileM: string,
    mobileL: string,
    tablet: string,
    laptop: string,
    laptopL: string,
    desktop: string,
  }
}
const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

const theme: ThemeType = {
  gradients: {
    html: 'linear-gradient(135deg, #e44d26, #20150c)',
    css: 'linear-gradient(135deg, #264de4, #0c0d1f)',
    js: 'linear-gradient(135deg, #f7df1e, #2f2e14)',
    angular: 'linear-gradient(135deg, #dd1b16, #2f1414)',
    react: 'linear-gradient(135deg, #61dafb, #14292f)',
  },
  colors: {
    white: '#ffffff',
    main: '#9cf0c7',
    second: '#e33720',
    gray: '#333333',
    black50: 'rgba(0,0,0,.5)',
    blue: '#0075FF',
  },
  device: {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
  },

};
export default theme;
