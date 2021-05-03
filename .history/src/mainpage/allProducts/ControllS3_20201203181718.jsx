var aws = require('aws-sdk');
require('dotenv').config();

aws.config.update({
    region:'us-east-1',
    accessKeyId: process.env.AWSAccessKeyId,
    secretAccessKey: process.env.AWSSecretKey
})

const S3_bucket = process.env.bu