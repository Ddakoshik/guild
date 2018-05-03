// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBoAHLl4yEiVK4CpODb0s4dXV8oEVusSPk',
    authDomain: 'shadow-rainbow.firebaseapp.com',
    databaseURL: 'https://shadow-rainbow.firebaseio.com',
    projectId: 'shadow-rainbow',
    storageBucket: 'shadow-rainbow.appspot.com',
    messagingSenderId: '330817042490'
  }
};
