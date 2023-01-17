import AdminJS from "adminjs";
import AdminJSSequelize from "@adminjs/sequelize";
import AdminJSExpress from "@adminjs/express";
import { sequelize } from "../database";
import { adminJSResources } from "./resources";
import { locale } from "./locale";
import { dashboardOptions } from "./dashboard";
import { brandingOptions } from "./branding";
import { authenticationOptions } from "./authentication";

AdminJS.registerAdapter(AdminJSSequelize);

export const adminJS = new AdminJS({
  databases: [sequelize],
  rootPath: "/admin",
  resources: adminJSResources,
  branding: brandingOptions,
  dashboard: dashboardOptions,
});

export const adminJSRouter = AdminJSExpress.buildAuthenticatedRouter(
  adminJS,
  authenticationOptions,
  null,
  {
    resave: false,
    saveUninitialized: false,
  }
);
