require("express-async-errors");
const express = require('express');

const routes = require("./routes");
const AppError = require("./utils/AppError");

const app = express();
app.use(express.json());

app.use(routes);

app.use((error, request, response, next) => {
  if(error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message
    });
  }

  return response.status(500).json({
    status: "error",
    message: "Internal Server Error"
  });
});


PORT = 3333;
app.listen(PORT, () => console.log(`The server is running on PORT ${PORT}`));



