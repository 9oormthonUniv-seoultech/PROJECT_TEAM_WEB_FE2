/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // JSX, TSX 파일을 포함시켜야 Twin.macro를 사용할 수 있습니다.
  ],
  theme: {
    colors: {
      main: "#5453EE",
      purple: "#B0B0EE",
      yellow: "#FCEF7B",
      green: "#9DF4B6",
      blue: "#7DDFF9",
      gray700: "#171D24",
      gray600: "#2A303A",
      gray500: "#373D49",
      gray400: "#676F7B",
      gray300: "#A1A6B5",
      gray200: "#C7C9CE",
      gray100: "#E9EAEE",
      background: "#F9F9FB",
    },
    extend: {
      fontFamily: {
        display: ["Pretendard"],
      },
      fontSize: {
        22: ["22px"],
        18: ["18px"],
        16: ["16px"],
        14: ["14px"],
        12: ["12px"],
        10: ["10px"],
        8: ["8px"],
      },
    },
  },
  plugins: [],
};
