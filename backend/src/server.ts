import express from 'express';
import bodyParser from 'body-parser';
import todoRoutes from './routes/todo-routes';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/api', todoRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});