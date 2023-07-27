const port = process.env.APP_PORT || 3000;

const apiBasePath = "/api/auth/";

export const websiteDomain = 'http://localhost:3000'

export const appInfo = {
    appName: "SuperTokens Demo App",
    websiteDomain: 'http://localhost:3000',
    apiDomain: websiteDomain,
    apiBasePath,
};
