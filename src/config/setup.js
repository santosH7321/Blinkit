import AdminJS from "adminjs";
import AdminJSFastify from "@adminjs/fastify";
import * as AdminJSMongoose from "@adminjs/mongoose";
import * as Models from "../models/index.js";
import { authenticate, COOKIE_PASSWORD, sessionStore } from "./config.js";

AdminJS.registerAdapter(AdminJSMongoose);

export const admin = new AdminJS({
  resources: [
    {
      resource: Models.Customer,
      options: {
        listProperties: ["phone", "role", "isActivated"],
        filterProperties: ["phone", "role"],
      },
    },
    {
      resource: Models.DeliveryPartner,
      options: {
        listProperties: ["email", "role", "isActivated"],
        filterProperties: ["email", "role"],
      },
    },
    {
      resource: Models.Admin,
      options: {
        listProperties: ["email", "role", "isActivated"],
        filterProperties: ["email", "role"],
      },
    },
    {
      resource: Models.Branch,
    },
  ],
  branding: {
    companyName: "Blinkit",
    withMadeWithLove: false,
    favicon: ""
  },
  rootPath: "/admin",
});

export const buildAminRouter = async(app) => {
    await AdminJSFastify.builAuthenticatedRouter(
        admin,
        {
          authenticate,
          cookiePassword: COOKIE_PASSWORD,
          cookieName: "adminjs",
        },
        app,
        {
          store: sessionStore,
          saveUnintiliazed: true,
          secret:COOKIE_PASSWORD,
          cookie: {
            httpOnly: process.env.NODE_ENV === "production",
            secure: process.env.NODE_ENV === "production",

          },
        }
    );
}