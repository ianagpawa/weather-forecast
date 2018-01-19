# Weather-React
##### This repo is for a weather forecast app utilizing React and Redux and the OpenWeatherMap API.    

### Quick Start
-Clone the repo: `git clone https://github.com/ianagpawa/weather-forecast.git`


#### Dependencies
This app requires `Node` and `npm` to be installed on your system.  To install dependencies, while the terminal is in the project folder, execute the following command:
```
$   npm install
```

#### Requirements
This app requires an API key from [OpenWeatherMap](http://openweathermap.org). The API key should be saved in a `client_secrets.js` file in the `actions` folder.

##### OpenWeatherMap
`client_secrets.js`
```
const API_KEY = "XXXXX"
module.exports = API_KEY
```


### View the App
In order to view the app, navigate the terminal into the project folder, execute the command
```
npm start
```
Open your browser to `http://localhost:3000`:

### Deploying the App
To deploy the app, an optimized bundle for production must be first built.  Navigate the terminal to the project folder and execute the following command:
```
npm run build
```

#### Google App Engine
The `app.yaml` file is required to be in the folder with the new optimized build (the top level folder).  To deploy, as per usual, execute the following command while the terminal is in the project folder:
```
gcloud app deploy
```

### What's included
Within the project folder, you will find the following files:

```
weather-forecast/
    ├── public/
    |   ├── favicon.ico
    |   ├── index.html
    |   ├── index.html
    |   └── manifest.json
    ├── src/
    |   ├── actions/
    |   |    ├── client_secrets.js (NOT INCLUDED)
    |   |    └── index.js
    |   ├── components/
    |   |    ├── chart.js
    |   |    ├── current_weather.js
    |   |    ├── functions.js
    |   |    ├── icons.json
    |   |    └── weather.js
    |   ├── containers/
    |   |    ├── current_weather.js
    |   |    └── search_bar.js
    |   ├── reducers/
    |   |    ├── index.js
    |   |    └── reducer_weather.js
    |   ├── App.js
    |   ├── App.test.js
    |   ├── index.css
    |   ├── index.js
    |   ├── logo.svg
    |   └── registerServiceWorker.js
    ├── .gitignore
    ├── app.yaml
    ├── package-lock.json
    ├── package.json
    └── README.md
```

## Creator

**Ian Agpawa**
[Github](https://github.com/ianagpawa)
 agpawaji@gmail.com

#### Credits
Built with Create-React-App
https://github.com/facebookincubator/create-react-app
