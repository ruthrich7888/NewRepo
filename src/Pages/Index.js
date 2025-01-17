import { lazy } from "react";

const Homepage = lazy(() => import("./Homepage"));
const Services = lazy(() => import("./Services"));
const AboutUs = lazy(() => import("./AboutUs"));
const Contact = lazy(() => import("./Contact"));
const Careers = lazy(() => import("./Careers"));
const EquipmentList = lazy(() => import("./EquipmentList"));
export { Homepage, Services, AboutUs, Contact, Careers, EquipmentList };
