// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDhJ1QaIMu0XptyDLOUSs1YzQ4SmH7jVG8",
    authDomain: "two-flynns.firebaseapp.com",
    databaseURL: "https://two-flynns.firebaseio.com",
    projectId: "two-flynns",
    storageBucket: "two-flynns.appspot.com",
    messagingSenderId: "92837681507"
  }
};
