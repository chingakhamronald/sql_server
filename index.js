const Express = require("express");
const dotenv = require("dotenv");
const UserRouter = require("./app/user/router");
const app = Express();

dotenv.config();

const port = process.env.PORT;

app.use(Express.json());

app.use("/api/users", UserRouter);

app.listen(port, () => console.log(`Server is running on ${port}`));
