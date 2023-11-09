// import * as React from "react";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import Modal from "@mui/material/Modal";
// import styles from "./Categories.module.scss";
// import menuIcon from "../../../assets/images/menu/menu.svg";
// import Account from "../../Auth/Account/Account";
// import { useAppSelector } from "../../../hook";

// const style = {
//   position: "absolute" as "absolute",
//   top: "163px",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };
// const Categories = () => {
//   const { stateCategory } = useAppSelector((state) => state.mainPageSlice);
//   //   console.log(stateCategory);
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <div className={styles.categoriesBlock}>
//       <Button onClick={handleOpen}><img src={menuIcon} alt="" /></Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//             Text in a modal
//           </Typography>
//           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//           </Typography>
//         </Box>
//       </Modal>
//       {/* <Button
//         id="fade-button"
//         aria-controls={open ? "fade-menu" : undefined}
//         aria-haspopup="true"
//         aria-expanded={open ? "true" : undefined}
//         onClick={handleClick}
//       >
//         <img src={menuIcon} alt="" />
//       </Button>
//       <Menu
//         id="fade-menu"
//         MenuListProps={{
//           "aria-labelledby": "fade-button",
//         }}
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//         TransitionComponent={Fade}
//         className={styles.dropDownMenu}
//       >
//         <Account />
//         <ul>
//           {stateCategory?.map((c) => (
//             <li key={c.id}>{c.name}</li>
//           ))}
//         </ul>
//       </Menu> */}
//       {/* {look && (
//         <>
//           <div
//             className={styles.dropDownMenu__shadow}
//             onClick={() => setLook(false)}
//           ></div>
//           <div className={styles.dropDownMenu}></div>
//         </>
//       )} */}
//     </div>
//   );
// };

// export default Categories;

import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Popper from "@mui/material/Popper";
import PopupState, { bindToggle, bindPopper } from "material-ui-popup-state";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";

export default function Categories() {
  return (
    <PopupState variant="popper" popupId="demo-popup-popper">
      {(popupState) => (
        <div>
          <Button variant="contained" {...bindToggle(popupState)}>
            Toggle Popper
          </Button>
          <Popper {...bindPopper(popupState)} transition>
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={550}>
                <Paper>
                  <Typography sx={{ p: 2 }}>
                    The content of the Popper.
                  </Typography>
                </Paper>
              </Fade>
            )}
          </Popper>
        </div>
      )}
    </PopupState>
  );
}
