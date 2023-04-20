const Express = require("express");
const dotenv = require("dotenv");
const UserRouter = require("./app/user/router");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = Express();
const port = process.env.PORT;

dotenv.config();

app.use(cors());

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/api/transactions", UserRouter);

app.listen(port, () => console.log(`Server is running on ${port}`));
