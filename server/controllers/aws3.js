require("dotenv").config();
const AWS = require("aws-sdk");
const { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, BUCKET_NAME } = process.env;

module.exports = {
   aws3: (req, res) => {
      AWS.config = {
         region: "us-west-1",
         accessKeyId: AWS_ACCESS_KEY_ID,
         secretAccessKey: AWS_SECRET_ACCESS_KEY
      };
      const s3 = new AWS.S3({ signatureVersion: "v4" });
      const fileName = req.query["file-name"];
      const fileType = req.query["file-type"];
      console.log(fileName, fileType);
      const params = {
         Bucket: BUCKET_NAME,
         Key: fileName,
         Expires: 60,
         ContentType: fileType,
         ACL: "public-read"
      };

      s3.getSignedUrl("putObject", params, (err, data) => {
         if (err) {
            console.log(err);
            res.end();
         }
         const dataToSend = {
            signedRequest: data,
            url: `https://${BUCKET_NAME}.s3.amazonaws.com/${fileName}`
         };
         return res.send(dataToSend);
      });
   }
}
