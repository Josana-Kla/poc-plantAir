import express from 'express';
import plantRouter from './routers/plants.routers'

const app = express();
app.use(express.json());

// ROUTES:
app.use(plantRouter);

app.listen(4000, () => console.log("It's working on PORT 4000..."));