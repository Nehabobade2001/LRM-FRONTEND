export const navigations = [
  { name: "dashboard", path: "/dashboard/default", icon: "dashboard" },
  { label: "PAGES", type: "label" },
  {
    name: "Session/Auth",
    icon: "security",
    children: [
      { name: "Sign in", iconText: "SI", path: "/session/signin" },
      { name: "Sign up", iconText: "SU", path: "/session/signup" },
      { name: "Forgot Password", iconText: "FP", path: "/session/forgot-password" },
      { name: "Error", iconText: "404", path: "/session/404" }
    ]
  },
  { label: "Components", type: "label" },
  {
    name: "Components",
    icon: "favorite",
    badge: { value: "30+", color: "secondary" },
    children: [
      // { name: "Auto Complete", path: "/material/autocomplete", iconText: "A" },
      // { name: "Buttons", path: "/material/buttons", iconText: "B" },
       { name: "view doc", path: "/material/checkbox", iconText: "C" },
       { name: "Data Security", path: "/material/data", iconText: "D" },
       { name: "System Notifications", path: "/material/notice", iconText: "N" },

      { name: " Upload Doc", path: "/material/form", iconText: "F" },
      // { name: "Switch", path: "/material/switch", iconText: "S" },
      // { name: "Icons", path: "/material/icons", iconText: "I" },
      // { name: "Menu", path: "/material/menu", iconText: "M" },
      // { name: "Progress", path: "/material/progress", iconText: "P" },
      // { name: "Radio", path: "/material/radio", iconText: "R" },
      // { name: "Slider", path: "/material/slider", iconText: "S" },
      // { name: "Snackbar", path: "/material/snackbar", iconText: "S" },
       { name: "Document Management", path: "/material/table", iconText: "T" },
       { name: "Team", path: "/material/team", iconText: "T" }
    ]
  },
  // {
  //   name: "Charts",
  //   icon: "trending_up",
  //   children: [{ name: "Echarts", path: "/charts/echarts", iconText: "E" }]
  // },
  {
    name: "Documentation",
    icon: "launch",
    type: "extLink",
    path: "http://demos.ui-lib.com/matx-react-doc/"
  }
];
