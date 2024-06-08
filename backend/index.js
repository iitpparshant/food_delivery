const express = require('express')
const app = express()
const port = 5000;
const cors = require('cors');
// app.use(cors());
const mongoDB= require("./db")
mongoDB();

(async () => {
  try {
      await mongoDB();
      app.listen(port, () => {
          console.log(`Express server listening on port ${port}`);
      });
  } catch (error) {
      console.error("Error connecting to MongoDB:", error);
  }
})();
// http://localhost:3000
app.use(cors({
  origin: ["https://food-delivery-zzyz-front.vercel.app"], 
  methods: ["POST", "GET"],
  credentials: true
}));


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(express.json());
app.use('/api', require("./Routes/CreatUser"));
app.use('/api', require("./Routes/DisplayData"));
app.use('/api', require("./Routes/OrderData"));

module.exports = app;