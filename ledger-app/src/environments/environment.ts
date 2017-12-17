// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
let baseurl = 'http://localhost:4000/api/';
export const environment = {
  production: false,

  getUserData: baseurl + 'getUserData',
  addData: baseurl + 'addData',
  editLedgerRow: baseurl + 'editData',
  deleteLedgerRow: baseurl + 'deleteData',
  witapi: 'https://api.wit.ai/message?v=10/12/2017&q='
};
