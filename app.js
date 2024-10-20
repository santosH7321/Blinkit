
import "dotenv/config";
import Fastify from "fastify";
import { connectDB } from "./src/config/connect.js";

const start = async () => {
  await connectDB(process.env.MONGO_URI);

  const app = Fastify();

  await buildAdminRouter(app);

  app.listen({ port:PORT, host: "0.0.0.0" }, (err, addr) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Blinkit server on http://localhost:${PORT}${admin.options.rootPath}`);
      
    }
  });
};

start();
