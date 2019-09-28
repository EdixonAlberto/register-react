import { config } from 'dotenv';

if(process.env.NODE_ENV === 'development') config();

export default {
    apiKey: process.env.REACT_APP_API_KEY,
    databaseURL: 'https://' + process.env.REACT_APP_DB_NAME + '.firebaseio.com'
};
