import React from "react";

import {
  //Assessment,
  //GridOn,
  Web,
  //BorderClear,
  //BorderOuter,
  BusinessCenter,
  Business,
  BarChart,
  CreateNewFolder,
  Description,
  DesktopMac,
  Extension,
  FormatListBulleted,
  FormatShapes,
  Home,
  PlayCircleFilled,
  Settings,
  Subscriptions,
  Launch,
  LocalOffer,
  PermIdentity,
} from "@material-ui/icons";

import { Role } from "../components/helpers";

const menuItems = {
  menus: [
    {
      text: "Home",
      icon: <Home />,
      link: "/dashboard",
      Authorization: [Role.All],
    },
    {
      text: "Setup",
      icon: <Settings />,
      link: "/Setup/Organization", // Does not work :()
      Authorization: [Role.Admin],
      subMenus: [
        {
          text: "Subscriptions",
          icon: <Subscriptions />,
          link: "/Setup/Organization",
        },
        {
          text: "Organization",
          icon: <Business />,
          link: "/Setup/Organization",
        },
        {
          text: "Business Unit",
          icon: <BusinessCenter />,
          link: "/Setup/BusinessUnit",
        },
        {
          text: "Program",
          icon: <CreateNewFolder />,
          link: "/Setup/Program",
        },
        {
          text: "Project",
          icon: <Description />,
          link: "/Setup/Project",
        },
        {
          text: "Apps",
          icon: <DesktopMac />,
          link: "/Setup/Application",
        },
      ],
    },
    {
      text: "Build",
      icon: <Launch />,
      Authorization: Role.Admin,
      subMenus: [
        {
          text: "Catalog",
          icon: <FormatListBulleted />,
          link: "/Build/CatalogList",
        },
        {
          text: "Blueprint",
          icon: <Extension />,
          link: "/Build/Blueprint",
        },
      ],
    },
    {
      text: "Build",
      icon: <Launch />,
      Authorization: Role.Planner,
      subMenus: [
        {
          text: "Catalog",
          icon: <FormatListBulleted />,
          link: "/Build/CatalogList",
        },
        {
          text: "Blueprint",
          icon: <Extension />,
          link: "/Build/Blueprint",
        },
      ],
    },
    {
      text: "Build",
      icon: <Launch />,
      Authorization: Role.Approver,
      subMenus: [
        {
          text: "Catalog",
          icon: <FormatListBulleted />,
          link: "/Build/CatalogList",
        },
        {
          text: "Blueprint",
          icon: <Extension />,
          link: "/Build/Blueprint",
        },
      ],
    },
    {
      text: "Plan",
      icon: <Web />,
      Authorization: Role.Planner,
      subMenus: [
        {
          text: "Design Studio",
          icon: <FormatShapes />,
          link: "/Plan/Design",
        },
        {
          text: "Deploy",
          icon: <PlayCircleFilled />,
          link: "/Plan/Deploy",
        },
        {
          text: "Create Blueprint",
          icon: <Extension />,
          link: "/Build/Blueprint",
        },
      ],
    },
    {
      text: "Plan",
      icon: <Web />,
      Authorization: Role.Admin,
      subMenus: [
        {
          text: "Design Studio",
          icon: <FormatShapes />,
          link: "/Plan/Design",
        },
        {
          text: "Deploy",
          icon: <PlayCircleFilled />,
          link: "/Plan/Deploy",
        },
        {
          text: "Create Blueprint",
          icon: <Extension />,
          link: "/Build/Blueprint",
        },
      ],
    },
    {
      text: "Plan",
      icon: <Web />,
      Authorization: Role.Approver,
      subMenus: [
        {
          text: "Design Studio",
          icon: <FormatShapes />,
          link: "/Plan/Design",
        },

        {
          text: "Create Blueprint",
          icon: <Extension />,
          link: "/Build/Blueprint",
        },
      ],
    },
    {
      text: "Monitor",
      icon: <BarChart />,
      Authorization: [Role.All],
      subMenus: [
        {
          text: "Instances",
          icon: <Web />,
          link: "/Monitor/InstanceDetails",
        },
        {
          text: "Apps",
          icon: <DesktopMac />,
          link: "/Monitor/AppDetails",
        },
        {
          icon: <LocalOffer />,
          link: "/Monitor/CostDetails",
        },
      ],
    },
    {
      text: "Request Access",
      icon: <PermIdentity />,
      link: "/AccessRequest",
      Authorization: [Role.All],
    },
    {
      text: "Tasks",
      icon: <Web />,
      link: "/Tasks",
      Authorization: [Role.All],
    },
    {
      text: "TestpageFunction",
      icon: <Web />,
      link: "/TestpageFunction",
      Authorization: [Role.All],
    },
    {
      text: "Test Page Component",
      icon: <Web />,
      link: "/TestpageComponent",
      Authorization: [Role.All],
    },
  ],
};

export default menuItems;
