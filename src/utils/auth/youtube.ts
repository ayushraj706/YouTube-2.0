import {google} from 'googleapis';
const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
const redirectUrl = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URL;


const OAuth2 = google?.auth?.OAuth2;

export const oauth2client = new OAuth2(
    clientId,
    clientSecret,
    redirectUrl,
)

export const youtube = google?.youtube({version : "v3" , auth : oauth2client });
