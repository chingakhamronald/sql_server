const Express = require("express");
const dotenv = require("dotenv");
const UserRouter = require("./app/user/router");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = Express();

dotenv.config();

const port = process.env.PORT;

app.use(cors());

app.use(bodyParser.json());

app.use("/api/transactions", UserRouter);

app.listen(port, () => console.log(`Server is running on ${port}`));
