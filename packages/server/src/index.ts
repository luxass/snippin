import express from 'express';
import SnippinMiddleware from 'snippin-express';

const app = express();

app.use("/hello", SnippinMiddleware('Hello World!'));
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(4000, () => {
  console.log('Listening on port 4000');
});
