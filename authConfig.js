import { PublicClientApplication } from "@azure/msal-browser";

const msalConfig = {
    auth: {
        clientId: "26cfb5c6-0d16-48eb-ae92-92463b0c9de0",
        authority: "https://login.microsoftonline.com/4f767953-3663-47ac-a6ba-c8be803fed6b",
        redirectUri: "https://your-app-name.azurewebsites.net"
    }
};

export const msalInstance = new PublicClientApplication(msalConfig);
