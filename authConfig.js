import { PublicClientApplication } from "@azure/msal-browser";

const msalConfig = {
    auth: {
        clientId: "YOUR_AZURE_AD_CLIENT_ID",
        authority: "https://login.microsoftonline.com/YOUR_TENANT_ID",
        redirectUri: "https://your-app-name.azurewebsites.net"
    }
};

export const msalInstance = new PublicClientApplication(msalConfig);
