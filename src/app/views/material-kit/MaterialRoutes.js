import { lazy } from "react";
import Loadable from "app/components/Loadable";
import { element } from "prop-types";

const AppForm = Loadable(lazy(() => import("./forms/AppForm")));
const UpdateFrom = Loadable(lazy(() => import("./formupdate/UpdateFrom")));
 const UploadDoc = Loadable(lazy(() => import("./uploadsdoc/UploadDoc")));
 const DataSecure = Loadable(lazy(() => import("./datasecurity/DataSecure")));
 const Notification = Loadable(lazy(() => import("./notification/Notification")));
const AppTable = Loadable(lazy(() => import("./tables/AppTable")));
// const AppSwitch = Loadable(lazy(() => import("./switch/AppSwitch")));
// const AppSlider = Loadable(lazy(() => import("./slider/AppSlider")));
// const AppDialog = Loadable(lazy(() => import("./dialog/AppDialog")));
// const AppButton = Loadable(lazy(() => import("./buttons/AppButton")));
const AppCheckbox = Loadable(lazy(() => import("./viewdoc/AppCheckbox")));
// const AppSnackbar = Loadable(lazy(() => import("./snackbar/AppSnackbar")));
// const AppAutoComplete = Loadable(lazy(() => import("./auto-complete/AppAutoComplete")));
const AppExpansionPanel = Loadable(
  lazy(() => import("./expansion-panel/AppExpansionPanel"))
);
const CreateTeam = Loadable(lazy(() => import("./team/CreateTeam")));

const materialRoutes = [
  { path: "/material/table", element: <AppTable /> },
  { path: "/material/form", element: <AppForm /> },
  { path: "/material/team", element: <CreateTeam /> },
  { path: "/material/formupdate", element: <UpdateFrom /> },
  { path: "/material/uploaded", element: <UploadDoc/> },
   { path: "/material/data", element: <DataSecure /> },
   { path: "/material/notice", element: <Notification /> },
  { path: "/material/checkbox", element: <AppCheckbox /> },
  // { path: "/material/switch", element: <AppSwitch /> },
  // { path: "/material/radio", element: <AppRadio /> },
  // { path: "/material/slider", element: <AppSlider /> },
  // { path: "/material/autocomplete", element: <AppAutoComplete /> },
  { path: "/material/expansion-panel", element: <AppExpansionPanel /> },
  // { path: "/material/dialog", element: <AppDialog /> },
  // { path: "/material/snackbar", element: <AppSnackbar /> }
];

export default materialRoutes;
