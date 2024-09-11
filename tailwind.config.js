/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // JSX, TSX 파일을 포함시켜야 Twin.macro를 사용할 수 있습니다.
  ],
  theme: {
    colors: {
      main: '#5453EE',
      sub:'#B0B0EE',
      yellow: '#FCEF7B',
      gray900: '#171D24',
      gray800: '#2A303A',
      gray700: '#373D49',
      gray600: '#4B515A',
      gray500: '#676F7B',
      gray400: '#A1A6B5',
      gray300: '#C7C9CE',
      gray200: '#E9EAEE',
      gray100: '#F2F3F6'

    },
    extend: {
      fontFamily: {
        display: ["Pretendard Variable"],
      },
      fontSize:{
        
      }
    },
  },
  plugins: [],
}