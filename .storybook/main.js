module.exports = {
  "stories": [
    "../src/Components/*.stories.mdx",
    "../src/Components/*.stories.@(js|jsx|ts|tsx)",
    "../src/Components/*/*.stories.mdx",
    "../src/Components/*/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    '@storybook/preset-scss'
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}