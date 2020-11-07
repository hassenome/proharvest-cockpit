// These constants are injected via webpack environment variables.
// You can add more variables in webpack.common.js or in profile specific webpack.<dev|prod>.js files.
// If you change the values in the webpack config files, you need to re run webpack to update the application

export const VERSION = process.env.VERSION;
export const DEBUG_INFO_ENABLED = Boolean(process.env.DEBUG_INFO_ENABLED);
export const SERVER_API_URL = process.env.SERVER_API_URL;
export const BUILD_TIMESTAMP = process.env.BUILD_TIMESTAMP;
export const CONSUL_URL = process.env.CONSUL_URL;
// change this only if you want to use a different gateway service from the pilot (ie a different backend config)
export const PILOT_ID = {
    "path":"/",
    "serviceId":"pilot",
    "serviceInstances": [],
    "status":"UP" // the fact that we got the services routes means the gateway is UP
  };

