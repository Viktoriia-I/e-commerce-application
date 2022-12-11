const path = require('path');
const fs = require('fs');
const merge = require('deepmerge');
const prettier = require('prettier');

const ALLOWED_FW = ['shopify', 'bigcommerce', 'shopify_local'];
const FALLBACK_FW = 'shopify';

function withFrameworkConfig(defaultConfig = {}) {
  let framework = defaultConfig?.framework?.name;

  if (!framework) {
    throw new Error('The api framework is missing. Please add a valid provider');
  }

  if (!ALLOWED_FW.includes(framework)) {
    throw new Error(
      `The api framework: ${framework} cannot be found. 
      Please use on of the ${ALLOWED_FW.join(', ')} `
    );
  }

  if (framework === 'shopify_local') {
    framework = FALLBACK_FW;
  }

  const frameworkNextConfig = require(path.join('../', framework, 'config'));
  const config = merge(defaultConfig, frameworkNextConfig);

  const tsConfigPath = path.join(process.cwd(), 'tsconfig.json');
  const tsConfig = require(tsConfigPath);

  tsConfig.compilerOptions.paths['@framework'] = [`framework/${framework}`];
  tsConfig.compilerOptions.paths['@framework/*'] = [`framework/${framework}/*`];

  fs.writeFileSync(tsConfigPath, prettier.format(JSON.stringify(tsConfig), { parser: 'json' }));

  return config;
}

module.exports = { withFrameworkConfig };
