declare var require: any;

export const environment = {
  production: true,
  version: require('../../package.json').version,
  configFile: 'assets/config/config.json'
};
