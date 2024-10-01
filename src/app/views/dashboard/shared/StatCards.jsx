// import { Box, Card, Grid, IconButton, styled, Tooltip } from "@mui/material";
// import { AttachMoney, Group, ShoppingCart, Store, ArrowRightAlt } from "@mui/icons-material";
// import { Small } from "app/components/Typography";


// const StyledCard = styled(Card)(({ theme }) => ({
//   display: "flex",
//   flexWrap: "wrap",
//   alignItems: "center",
//   justifyContent: "space-between",
//   padding: "24px !important",
//   background: theme.palette.background.paper,
//   [theme.breakpoints.down("sm")]: { padding: "16px !important" }
// }));

// const ContentBox = styled(Box)(({ theme }) => ({
//   display: "flex",
//   flexWrap: "wrap",
//   alignItems: "center",
//   "& small": { color: theme.palette.text.secondary },
//   "& .icon": { opacity: 0.6, fontSize: "44px", color: theme.palette.primary.main }
// }));

// const Heading = styled("h6")(({ theme }) => ({
//   margin: 0,
//   marginTop: "4px",
//   fontSize: "14px",
//   fontWeight: "500",
//   color: theme.palette.primary.main
// }));

// export default function StatCards() {
//   const cardList = [
//     { name: "New Leads", amount: 3050, Icon: Group },
//     { name: "This week Sales", amount: "$80,500", Icon: AttachMoney },
//     { name: "Inventory Status", amount: "8.5% Stock Surplus", Icon: Store },
//     { name: "Orders to deliver", amount: "305 Orders", Icon: ShoppingCart }
//   ];

//   return (
//     <Grid container spacing={3} sx={{ mb: "24px" }}>
//       {cardList.map(({ amount, Icon, name }) => (
//         <Grid item xs={12} md={6} key={name}>
//           <StyledCard elevation={6}>
//             <ContentBox>
//               <Icon className="icon" />

//               <Box ml="12px">
//                 <Small>{name}</Small>
//                 <Heading>{amount}</Heading>
//               </Box>
//             </ContentBox>

//             <Tooltip title="View Details" placement="top">
//               <IconButton>
//                 <ArrowRightAlt />
//               </IconButton>
//             </Tooltip>
//           </StyledCard>
//         </Grid>
//       ))}
//     </Grid>
//   );
// }


import { Box, Card, Grid, IconButton, styled, Tooltip } from "@mui/material"; 
import { AttachMoney, Group, ShoppingCart, Store, ArrowRightAlt } from "@mui/icons-material";
import { Small } from "app/components/Typography";

// Gradient card with blue shades and rounded corners
const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "24px !important",
  borderRadius: "16px", // Smooth rounded corners
  background: "linear-gradient(135deg, #1e3a8a, #4169e1)", // Blue gradient from dark to light blue
  color: "#fff", // White text for contrast
  boxShadow: "0 12px 24px rgba(0,0,0,0.1)", // Soft shadow for floating effect
  transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth transition on hover
  cursor: "pointer", // Pointer to make the card interactive

  "&:hover": {
    transform: "scale(1.05)", // Enlarges the card on hover
    boxShadow: "0 16px 30px rgba(0,0,0,0.2)", // Stronger shadow on hover
  },

  [theme.breakpoints.down("sm")]: { padding: "16px !important" } // Adjust padding for smaller screens
}));

const ContentBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  "& small": { color: "#fff" }, // White text on gradient
  "& .icon": {
    opacity: 0.9, 
    fontSize: "44px", 
    color: "#fff" // White icon for better visibility
  }
}));

const Heading = styled("h6")(({ theme }) => ({
  margin: 0,
  marginTop: "4px",
  fontSize: "18px", // Slightly larger font for the title
  fontWeight: "600", // Bold title for emphasis
  color: "#fff" // White text color for heading
}));

export default function StatCards() {
  const cardList = [
    { name: "New Leads", amount: 3050, Icon: Group },
    { name: "This Week Sales", amount: "$80,500", Icon: AttachMoney },
    { name: "Inventory Status", amount: "8.5% Stock Surplus", Icon: Store },
    { name: "Orders to Deliver", amount: "305 Orders", Icon: ShoppingCart }
  ];

  return (
    <Grid container spacing={3} sx={{ mb: "24px" }}>
      {cardList.map(({ amount, Icon, name }) => (
        <Grid item xs={12} md={6} key={name}>
          <StyledCard elevation={6}>
            <ContentBox>
              <Icon className="icon" />

              <Box ml="12px">
                <Small>{name}</Small>
                <Heading>{amount}</Heading>
              </Box>
            </ContentBox>

            <Tooltip title="View Details" placement="top">
              <IconButton sx={{ color: "#fff" }}>
                <ArrowRightAlt />
              </IconButton>
            </Tooltip>
          </StyledCard>
        </Grid>
      ))}
    </Grid>
  );
}
