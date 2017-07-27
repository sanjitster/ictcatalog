# ictcatalog

ICT201: Web Development Project

[http://45.77.45.197](http://45.77.45.197)

### Installing

Please go ahead to create firebase database.

Firebase database structure 

```
{
    catelog: {
        <itemID>: {
            "amount" : {
                "default" : "10",
                "max" : "50",
                "min" : "10",
                "values" : [ 10, 25, 50 ]
            },
            "country" : "US",
            "id" : <itemID>,
            "name" : "Athleta",
            "template" : "https://d16a8a62orsrve.cloudfront.net/assets/img/card_tpl/138146503284jqelw.png",
            "unit" : "usd"
        }
    }
}
```

And update the firebase `firebaseCredentials` on `src/app/app.constants.js`

```
{
    apiKey: '<apiKey>',
    authDomain: 'ict201-6b3fb.firebaseapp.com',
    databaseURL: '<databaseUrL>',
    projectId: 'ict201-6b3fb',
    storageBucket: 'ict201-6b3fb.appspot.com',
}
```

Lastly run the npm install to install packages and bower components.

```
npm install
```

### `serve`

For the development phase, the command `gulp serve` launches a server which supports live reload of your modifications.

Its usage is described in the chapters [Development server](#development-server) and [File watching & pre-processing](#file-watching--pre-processing)

### `test`

For testing, a fully working test environment is shipped with some examples. It uses Karma (with `gulp test`) for the unit tests, and Protractor for the end-to-end tests (with `gulp protractor`).

More information in the [Test environment configured](#test-environment-configured) chapter.

### `build`

The generator brings a state of the art optimization process with the command `gulp build` or simply `gulp`. It's fully described in the [Optimization process](#optimization-process) chapter.