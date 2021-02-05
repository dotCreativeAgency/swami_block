npm init

npm install --save-dev webpack webpack-cli

npm install -D babel-loader @babel/core @babel/preset-env 
# https://github.com/babel/babel-loader
# https://babeljs.io/docs/en/plugins

npm install --save-dev @babel/preset-react
# https://babeljs.io/docs/en/presets
# https://babeljs.io/docs/en/babel-preset-react

npm install browserslist @wordpress/browserslist-config --save-dev
# https://developer.wordpress.org/block-editor/packages/packages-browserslist-config/
# https://www.npmjs.com/package/@wordpress/browserslist-config

# configurare map
# https://webpack.js.org/configuration/devtool/

npm install sass-loader sass --save-dev
# https://github.com/webpack-contrib/sass-loader

npm install --save-dev css-loader
# https://github.com/webpack-contrib/css-loader

npm install --save-dev style-loader
# https://github.com/webpack-contrib/style-loader

npm install --save-dev mini-css-extract-plugin
# https://github.com/webpack-contrib/mini-css-extract-plugin

npm install --save-dev postcss-loader autoprefixer
# https://github.com/webpack-contrib/postcss-loader
# https://github.com/postcss/autoprefixer

npm install css-minimizer-webpack-plugin --save-dev
# https://webpack.js.org/plugins/css-minimizer-webpack-plugin/
# https://github.com/webpack-contrib/css-minimizer-webpack-plugin

npm install --save-dev clean-webpack-plugin
# https://github.com/johnagan/clean-webpack-plugin


#----------------- React di Wordpress --------------------

# installa react e react-dom
npm install react react-dom

npm install @wordpress/blocks --save
# https://developer.wordpress.org/block-editor/packages/packages-blocks/

npm install @wordpress/i18n --save
# https://developer.wordpress.org/block-editor/packages/packages-i18n/

npm install jquery

# installare gulp per creare il file zip con il plugin
npm install --global gulp-cli
npm install --save-dev gulp
npm install --save-dev gulp-zip
#https://gulpjs.com/docs/en/getting-started/quick-start

#installare eslint per debug javascript
npm install eslint
npx eslint --init       #crea il file di configurazione di eslint eslintrc

# eslint-loader è deprecato usare eslint-webpack-plugin 
npm install eslint-webpack-plugin --save-dev
# configurazione:
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  // ...
  plugins: [new ESLintPlugin(options)],
  // ...
};

# installare prettier
npm install prettier -D 
#https://prettier.io/playground/ per creare la configurazione .prettierrc

npm install --save-dev eslint-config-prettier

# installare husky per verificare la correttezza prima del commit https://typicode.github.io/husky/#/