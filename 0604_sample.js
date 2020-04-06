let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    try {
        let data = await ddb.scan({
            TableName: "hirutest"
        }).promise();
        console.log(data);
    } catch (err) {
        // error handling goes here
    };

    try {
        let data = await ddb.get({
            TableName: "hirutest",
            Key: {
                price: "ll",
                colour: "ll"
            }
        }).promise();
        console.log(data);
    } catch (err) {
        // error handling goes here
    };


    return { "message": "Successfully executed" };
};