const request = require('postman-request');

const album = (userId, callback) => {
    const url = `https://jsonplaceholder.typicode.com/albums?userId=`+userId;

    request(url, { json: true }, (error, response, body) => {
        if (error) {
            callback('Error: ', undefined, 'Unable to connect...');
        } else if (response.body.length === 0) {
            callback('Error: ', undefined, 'Unable to find userId.');
        } else {
            callback(undefined, {
                userData: body,
            }, 'success')
        }
    });
}
module.exports = {album};
