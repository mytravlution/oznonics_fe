var aws = require('aws-sdk');
require('dotenv').config();

aws.config.update({
    region:'us-east-1',
    accessKeyId: process.env.AWSAccessKeyId,
    secretAccessKey: process.env.AWSSecretKey
})

const S3_bucket = process.env.Bucket;


exports.sign_s3 = (req, res)=>{
    const s3 = new aws.s3();
    const fileName = req.body.fileName;
    const fileType = req.body.fileType;
}

const s3Params={
    Bucket : S3_bucket,
    
}