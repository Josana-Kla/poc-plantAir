import express from 'express';
import plantRouter from './routers/plants.routers.js'
import categoryRouter from './routers/categories.routers.js'

const app = express();
app.use(express.json());

// ROUTES:
app.use(plantRouter);
app.use(categoryRouter);

app.listen(4000, () => console.log("It's working on PORT 4000..."));