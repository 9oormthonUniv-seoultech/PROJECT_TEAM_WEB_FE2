import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,

  // Prettier 설정 추가
  prettierConfig,  // Prettier 설정이 ESLint 포맷 규칙을 덮어씌움
  {
    plugins: {
      prettier: prettierPlugin
    },
    rules: {
      "react/react-in-jsx-scope": "off", //React를 import하지 않아도 react를 사용 가능
      "prettier/prettier": "error",  // Prettier 규칙을 ESLint 오류로 표시
    }
  }
];