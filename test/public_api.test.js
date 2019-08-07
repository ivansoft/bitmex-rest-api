const bitmex = require('bit_mex_api');

const API_KEY = require('../bitmex-api-keys').API_KEY;
const API_PRIVATE = require('../bitmex-api-keys').API_PRIVATE;

let api;

beforeAll(() => {
    const client = bitmex.ApiClient.instance;
    const apiKey = client.authentications['apiKey'];
    apiKey.apiKey = API_KEY;
    const apiSecret = client.authentications['apiSecret'];
    apiSecret.apiKey = API_PRIVATE;
    // todo
    api = bitmex.APIKeyApi();
});

test('bitmex api connect', () => {

});
