export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-2",
    BUCKET: "bucketryoku"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://njapsbe60j.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_NXDDzegLw",
    APP_CLIENT_ID: "6e9q7tgd6427tr1r8limn9roci",
    IDENTITY_POOL_ID: "us-east-2:0a50335f-813c-43d7-983c-4a91706a52dd"
  }
};