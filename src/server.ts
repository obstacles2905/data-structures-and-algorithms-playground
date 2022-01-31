import express from 'express';
import * as bodyParser from 'body-parser';

const PORT = 3001;
export const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`Server runs on ${PORT}`);
});