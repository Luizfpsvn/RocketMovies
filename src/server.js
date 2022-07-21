const express = require('express');

const routes = require("./routes");

const app = express();
app.use(express.json());

app.use(routes);

PORT = 3333;
app.listen(PORT, () => console.log(`The server is running on PORT ${PORT}`));



