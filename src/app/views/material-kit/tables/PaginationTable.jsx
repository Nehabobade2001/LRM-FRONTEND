

// import { useState } from "react";
// import {
//   Box,
//   Icon,
//   Table,
//   styled,
//   TableRow,
//   TableBody,
//   TableCell,
//   TableHead,
//   IconButton,
//   TablePagination,
//   InputBase,
//   alpha,
//   Button,
// } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import { Link } from "react-router-dom";



// const StyledTable = styled(Table)(() => ({
//   whiteSpace: "pre",
//   "& thead": {
//     "& tr": { "& th": { paddingLeft: 0, paddingRight: 0 } },
//   },
//   "& tbody": {
//     "& tr": { "& td": { paddingLeft: 0, textTransform: "capitalize" } },
//   },
// }));


// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: '8px', // Add border-radius here
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(1),
//     width: 'auto',
//   },
// }));



// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("md")]: {
//       width: "20ch",
//     },
//   },
// }));

// const subscribarList = [
//   {
//     name: "john doe",
//     date: "18 january, 2019",
//     amount: 1000,
//     status: "close",
//     company: "ABC Fintech LTD.",
//   },
//   {
//     name: "kessy bryan",
//     date: "10 january, 2019",
//     amount: 9000,
//     status: "open",
//     company: "My Fintech LTD.",
//   },
//   {
//     name: "james cassegne",
//     date: "8 january, 2019",
//     amount: 5000,
//     status: "close",
//     company: "Collboy Tech LTD.",
//   },
//   {
//     name: "lucy brown",
//     date: "1 january, 2019",
//     amount: 89000,
//     status: "open",
//     company: "ABC Fintech LTD.",
//   },
// ];

// export default function PaginationTable() {
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);
//   const [searchText, setSearchText] = useState("");

//   const handleSearchChange = (event) => {
//     setSearchText(event.target.value.toLowerCase());
//   };

//   const filteredList = subscribarList.filter(
    
//     (subscriber) =>
//       subscriber.name.toLowerCase().includes(searchText) ||
//       subscriber.company.toLowerCase().includes(searchText) ||
//       subscriber.status.toLowerCase().includes(searchText) ||
//       subscriber.date.toLowerCase().includes(searchText)
//   );

//   const handleChangePage = (_, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };



//   return (
//     <>
//       <Search>
//         <SearchIconWrapper>
//           <SearchIcon />
//         </SearchIconWrapper>
//         <StyledInputBase
//           placeholder="Search…"
//           inputProps={{ "aria-label": "search" }}
//           value={searchText}
//           onChange={handleSearchChange}
//         />
//       </Search>
//       <Box width="100%" overflow="auto">
//         <StyledTable>

//           <TableHead>
//             <TableRow>
//               <TableCell align="left">Farmer Name</TableCell>
//               <TableCell align="center">Khasra Number</TableCell>
//               <TableCell align="center">Plot Number</TableCell>
//               <TableCell align="center">Date of Registration</TableCell>
//               <TableCell align="center">Amount</TableCell>
//               <TableCell align="right">Action</TableCell>
//             </TableRow>
//           </TableHead>
          
//           <TableBody>
//             {filteredList
//               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//               .map((subscriber, index) => (
//                 <TableRow key={index}>
//                   <TableCell align="left">{subscriber.name}</TableCell>
//                   <TableCell align="center">{subscriber.company}</TableCell>
//                   <TableCell align="center">{subscriber.date}</TableCell>
//                   <TableCell align="center">{subscriber.status}</TableCell>
//                   <TableCell align="center">${subscriber.amount}</TableCell>
//                   <TableCell align="right">
//                     {/* <IconButton>
//                       <Icon color="error">close</Icon>
//                     </IconButton> */}
//                     <Button>
//                       <Link className="bg-green-600">Action</Link>
//                     </Button>
//                   </TableCell>
//                 </TableRow>
//               ))}
//           </TableBody>
//         </StyledTable>
//         <TablePagination
//           sx={{ px: 2 }}
//           page={page}
//           component="div"
//           rowsPerPage={rowsPerPage}
//           count={filteredList.length}
//           onPageChange={handleChangePage}
//           rowsPerPageOptions={[5, 10, 25]}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//           nextIconButtonProps={{ "aria-label": "Next Page" }}
//           backIconButtonProps={{ "aria-label": "Previous Page" }}
//         />
//       </Box>
//     </>
//   );
// }


import { useState } from "react";
import {
  Box,
  Icon,
  Table,
  styled,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  IconButton,
  TablePagination,
  InputBase,
  alpha,
  Button,
  Tooltip,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import { Link } from "react-router-dom";

// Styled Table
const StyledTable = styled(Table)(() => ({
  whiteSpace: "pre",
  "& thead": {
    "& tr": { "& th": { paddingLeft: 0, paddingRight: 0 } },
  },
  "& tbody": {
    "& tr": { "& td": { paddingLeft: 0, textTransform: "capitalize" } },
  },
}));

// Search Bar Styling
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '8px',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const subscribarList = [
  {
    name: "john doe",
    date: "18 January, 2019",
    amount: 1000,
    status: "close",
    company: "ABC Fintech LTD.",
  },
  {
    name: "kessy bryan",
    date: "10 January, 2019",
    amount: 9000,
    status: "open",
    company: "My Fintech LTD.",
  },
  {
    name: "james cassegne",
    date: "8 January, 2019",
    amount: 5000,
    status: "close",
    company: "Collboy Tech LTD.",
  },
  {
    name: "lucy brown",
    date: "1 January, 2019",
    amount: 89000,
    status: "open",
    company: "ABC Fintech LTD.",
  },
  {
    name: "john doe",
    date: "18 January, 2019",
    amount: 1000,
    status: "close",
    company: "ABC Fintech LTD.",
  },
  {
    name: "kessy bryan",
    date: "10 January, 2019",
    amount: 9000,
    status: "open",
    company: "My Fintech LTD.",
  },
  {
    name: "james cassegne",
    date: "8 January, 2019",
    amount: 5000,
    status: "close",
    company: "Collboy Tech LTD.",
  },
  {
    name: "lucy brown",
    date: "1 January, 2019",
    amount: 89000,
    status: "open",
    company: "ABC Fintech LTD.",
  },
  
];

export default function PaginationTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (event) => {
    setSearchText(event.target.value.toLowerCase());
  };

  const filteredList = subscribarList.filter(
    (subscriber) =>
      subscriber.name.toLowerCase().includes(searchText) ||
      subscriber.company.toLowerCase().includes(searchText) ||
      subscriber.status.toLowerCase().includes(searchText) ||
      subscriber.date.toLowerCase().includes(searchText)
  );

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          value={searchText}
          onChange={handleSearchChange}
        />
      </Search>

      <Box width="100%" overflow="auto">
        <StyledTable>
          <TableHead>
            <TableRow>
              <TableCell align="left">Farmer Name</TableCell>
              <TableCell align="center">Khasra Number</TableCell>
              <TableCell align="center">Plot Number</TableCell>
              <TableCell align="center">Date of Registration</TableCell>
              <TableCell align="center">Amount</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {filteredList
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((subscriber, index) => (
                <TableRow key={index}>
                  <TableCell align="left">{subscriber.name}</TableCell>
                  <TableCell align="center">{subscriber.company}</TableCell>
                  <TableCell align="center">{subscriber.date}</TableCell>
                  <TableCell align="center">{subscriber.status}</TableCell>
                  <TableCell align="center">${subscriber.amount}</TableCell>
                  <TableCell align="right">
                    {/* Edit Button */}
                    <Link to="/material/formupdate">
                    <Tooltip title="Edit">
                      <IconButton color="primary">
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                    </Link>

                    {/* Delete Button */}
                    <Tooltip title="Delete">
                      <IconButton color="error">
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>

                    {/* Save Button */}
                    <Tooltip title="update">
                      <IconButton color="success">
                        <SaveIcon />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </StyledTable>

        <TablePagination
          sx={{ px: 2 }}
          page={page}
          component="div"
          rowsPerPage={rowsPerPage}
          count={filteredList.length}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[5, 10, 25]}
          onRowsPerPageChange={handleChangeRowsPerPage}
          nextIconButtonProps={{ "aria-label": "Next Page" }}
          backIconButtonProps={{ "aria-label": "Previous Page" }}
        />
      </Box>
    </>
  );
}
