import * as express from 'express';
import { connect } from 'mongoose';
import * as path from 'path';

const username = 'slicetime';
const password = 'slicetimev1';

(async () => {
  try {
    await connect(
      `mongodb+srv://${username}:${password}@slicetime.ilhx63l.mongodb.net/?retryWrites=true&w=majority`,
      { dbName: 'slicetime' }
    );

    const app = express();

    app.use('/assets', express.static(path.join(__dirname, 'assets')));

    app.get('/api', async (req, res) => {
      res.send({ message: 'Welcome to api!' });
    });

    const port = process.env.port || 3333;
    const server = app.listen(port, () => {
      console.log(`Listening at http://localhost:${port}/api`);
    });
    server.on('error', console.error);
  } catch (error) {
    console.log(error.message);
  }
})();
