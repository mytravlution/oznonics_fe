var aws = require('aws-sdk');
require('dotenv').config();

aws.config.update({
    region:'us-east'
})