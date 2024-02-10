// const MySidebar = () => {
//   const [state, setState] = useState({
//     left: false, // Set initial state for the drawer
//   });

//   const toggleDrawer = (anchor, open) => (event) => {
//     if (
//       event &&
//       event.type === "keydown" &&
//       (event.key === "Tab" || event.key === "Shift")
//     ) {
//       return;
//     }
//     setState({ ...state, [anchor]: open });
//   };

//   const list = (anchor) => (
//     <List>
//       {/* Your sidebar content */}
//       <ListItem button>
//         <ListItemText primary="Home" />
//       </ListItem>
//       {/* Add more menu items as needed */}
//     </List>
//   );

//   return (
//     <>
//       {(["left"] as const).map((anchor) => (
//         <>
//
//         </>
//       ))}
//     </>
//   );
// };
