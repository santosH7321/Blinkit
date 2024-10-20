const express = require("express");

const start = async () => {
  const app = express();
  const PORT = process.env.PORT || 3000;

  app.listen({ port: PORT, host: "0.0.0.0" }, (err, addr) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Blinkit server listening on ${PORT}`);
    }
  });
};

start();
