module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
  },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@tanstack/eslint-plugin-query/recommended",
    "prettier",
  ],
  ignorePatterns: [
    "dist",
    "setupTests.ts",
    "tailwind.config.js",
    "postcss.config.js",
    "vite.config.ts",
    ".eslintrc.cjs",
    "coverage/*",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react", "prettier"],
  rules: {
    "react/prop-types": "off",
    "react/require-default-props": "off",
    "no-console": "warn", // Transforme les console.log en avertissements
    "react/react-in-jsx-scope": "off", // Désactive la règle nécessitant React dans la portée pour JSX, nécessaire pour React 17+
    "@typescript-eslint/no-unused-vars": "warn", // Transforme les variables inutilisées en avertissements plutôt qu'en erreurs
    "react/jsx-props-no-spreading": "off", // Autorise la propagation des props
  },
};
