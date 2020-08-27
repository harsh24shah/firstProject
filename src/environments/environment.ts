// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseApi: "https://api.nytimes.com/svc/topstories/v2/",
  basePopularApi: "https://api.nytimes.com/svc/mostpopular/v2/",
  firebase: {
    apiKey: "AIzaSyAP1ndwfrtkaTaSXo43SmGq0Yomdg-ZQso",
    authDomain: "harshapps-1a31e.firebaseapp.com",
    databaseURL: "https://harshapps-1a31e.firebaseio.com",
    projectId: "harshapps-1a31e",
    storageBucket: "harshapps-1a31e.appspot.com",
    messagingSenderId: "216672006441",
    appId: "1:216672006441:web:275bd1692dca14c1750738",
    measurementId: "G-HND8GSMJ43"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
