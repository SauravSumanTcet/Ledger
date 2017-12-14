// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  addData: 'http://localhost:4000/api/addData',
  getUserData: 'http://localhost:4000/api/getUserData',
  witapi:'https://api.wit.ai/message?v=10/12/2017&q='
};
