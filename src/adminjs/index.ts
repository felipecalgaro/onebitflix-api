import AdminJS from "adminjs";
import AdminJSSequelize from "@adminjs/sequelize";
import AdminJSExpress from "@adminjs/express";
import { sequelize } from "../database";
import { adminJSResources } from "./resources";
import { User } from "../models";
import bcrypt from "bcrypt";

AdminJS.registerAdapter(AdminJSSequelize);

export const adminJS = new AdminJS({
  databases: [sequelize],
  rootPath: "/admin",
  resources: adminJSResources,
  branding: {
    companyName: "OneBitFlix",
    logo: "/logoOnebitflix.svg",
    theme: {
      colors: {
        primary100: "#ff0043",
        primary80: "#ff1a57",
        primary60: "#ff3369",
        primary40: "#ff4d7c",
        primary20: "#ff668f",
        grey100: "#151515",
        grey80: "#333333",
        grey60: "#4d4d4d",
        grey40: "#666666",
        grey20: "#dddddd",
        filterBg: "#333333",
        accent: "#151515",
        hoverBg: "#151515",
      },
    },
  },
});

export const adminJSRouter = AdminJSExpress.buildAuthenticatedRouter(
  adminJS,
  {
    authenticate: async (email, password) => {
      const user = await User.findOne({ where: { email } });

      if (user && user.role === "admin") {
        const matched = await bcrypt.compare(password, user.password);

        if (matched) {
          return user;
        }
      }

      return false;
    },
    cookiePassword: "cookie-password",
  },
  null,
  {
    resave: false,
    saveUnitialized: false,
  }
);
