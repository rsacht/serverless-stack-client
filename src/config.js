export default {
    STRIPE_KEY: "pk_test_Ofj7Gg0Iw77UMcJFchu56VTy00ViM85UFd",
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app-uploads-notes"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://fhcb9geia0.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_rltn8AczT",
      APP_CLIENT_ID: "1d3un4pbu6i6gul04riei3l8au",
      IDENTITY_POOL_ID: "us-east-1:21093e18-b716-4003-a39d-45e6e9797f4c"
    }
  };