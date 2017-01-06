// var speech = require('@google-cloud/speech') ({
//     projectId: 'jarvis-154723',
//     keyFilename: './jarvis-3468dfd71e0d.json'
// });

var gcloud = require('google-cloud')({

    projectId: 'jarvis-154723',

    // The path to your key file:
    // keyFilename: './jarvis-3468dfd71e0d.json'

    // Or the contents of the key file:
    credentials: require('./jarvis-3468dfd71e0d.json')

    // For any APIs that accept an API key:
    // key: '...'
});