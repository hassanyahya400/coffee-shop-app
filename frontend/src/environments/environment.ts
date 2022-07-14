/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */
// let secret = require('secret')

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'dev-t1ko47b4.us', // the auth0 domain prefix
    audience: 'drinks', // the audience set for the auth0 app
    clientId: 'dq58Z05DCGsuqdLAYxoTS19azOVINTtc', // the client id generated for the auth0 app
    callbackURL: 'http://127.0.0.1:8100', // the base url of the running ionic application. 
  }
};
