import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  collection,
  doc,
  getDocs,
  getDoc,
  deleteDoc,
  updateDoc,
  increment
} from "firebase/firestore";
import { db } from "../../utils/firebase";
import style from "../../styles/DashboardStyles";
import { Box } from "@mui/system";
import {
  Button,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";

import SearchIcon from "@material-ui/icons/Search";

export default function EditDeleteResident() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);
  const [userToDelete, setUserToDelete] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = (id) => {
    const userRef = doc(db, "users", id);
    getDoc(userRef).then((docSnap) => {
      setSelectedUser(docSnap.data());
    });
  };
  useEffect(() => {
    async function fetchData() {
      let dataUser = [];
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        dataUser.push({ id: doc.id, ...doc.data() })
      })
      setTimeout(() => {
        setUsers(dataUser)
        setIsLoading(false)
        console.log('done');
      }, 5000)
    }
    fetchData();
  }, []);

  const deleteUser = (id) => {
    const userDoc = doc(db, "users", id);
    getDoc(userDoc).then((docSnap) => {
      setUserToDelete(docSnap.data())
    })
    if (userToDelete.Gender === 'Male') {
      updateDoc(doc(db, 'fixedData', 'totalData'), {
        totalMale: increment(-1)
      })
    }
    if (userToDelete.Gender === 'Female') {
      updateDoc(doc(db, 'fixedData', 'totalData'), {
        totalFemale: increment(-1)
      })
    }
    if (userToDelete.fourPs === 'Eligible') {
      updateDoc(doc(db, 'fixedData', 'totalData'), {
        totalFourPs: increment(-1)
      })
    }
    if (userToDelete.Voter === 'Yes') {
      updateDoc(doc(db, 'fixedData', 'totalData'), {
        totalVoter: increment(-1)
      })
    }
    if (userToDelete.PWD === 'Yes') {
      updateDoc(doc(db, 'fixedData', 'totalData'), {
        totalPWD: increment(-1)
      })
    }
    if (userToDelete.Senior === 'Yes') {
      updateDoc(doc(db, 'fixedData', 'totalData'), {
        totalSenior: increment(-1)
      })
    }
    if (userToDelete.Indigent === 'Yes') {
      updateDoc(doc(db, 'fixedData', 'totalData'), {
        totalIndigent: increment(-1)
      })

    }
    if (userToDelete.SoloParent === 'Yes') {
      updateDoc(doc(db, 'fixedData', 'totalData'), {
        totalSoloParent: increment(-1)
      })

    }
    console.log(userToDelete);
    deleteDoc(userDoc);
  };

  return (
    <Box sx={{ marginTop: "40vh", width: "90%", height: '40%' }}>
      {/*Table and Information*/}
      <Grid container>
        {/*Table Details*/}
        <Grid item sx={style.tableBox}>
          {/*Search*/}
          <Box sx={style.searchContainer}>
            <Typography sx={{ fontFamily: "Poppins" }}>Search</Typography>
            <Box sx={style.textAndButton}>
              <TextField sx={style.searchBar} />
              <Button variant='contained' sx={style.searchButton}>
                <SearchIcon />
              </Button>
            </Box>

            <Typography>Sort By: </Typography>
            <Select
              sx={style.sortChoice}
              MenuProps={{
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "left",
                },

                transformOrigin: {
                  vertical: "top",
                  horizontal: "left",
                },
                getContentAnchorEl: null,
              }}
            >
              <MenuItem value={"Last Name"} sx={style.menuItemText}>
                Last Name
              </MenuItem>
              <MenuItem value={"First Name"} sx={style.menuItemText}>
                First Name
              </MenuItem>
              <MenuItem value={"Age"} sx={style.menuItemText}>
                Age
              </MenuItem>
              <MenuItem value={"Birthday"} sx={style.menuItemText}>
                Birthday
              </MenuItem>
              <MenuItem value={"Gender"} sx={style.menuItemText}>
                Gender
              </MenuItem>
              <MenuItem value={"Purok"} sx={style.menuItemText}>
                Purok
              </MenuItem>
              <MenuItem value={"Religion"} sx={style.menuItemText}>
                Religion
              </MenuItem>
              <MenuItem value={"Voter"} sx={style.menuItemText}>
                Voter
              </MenuItem>
            </Select>
          </Box>

          {/*Table Start Here*/}

          <Box sx={{ marginTop: "10px", width: "100%" }}>
            <TableContainer sx={style.tableProperties1} component={Paper}>
              <Table sx={{ minWidth: 500 }} aria-label='simple table'>
                <TableHead sx={{ backgroundColor: "#16304d" }}>
                  <TableRow>
                    <TableCell align='right' sx={{ color: "#fff" }}>
                      Lastname
                    </TableCell>
                    <TableCell align='right' sx={{ color: "#fff" }}>
                      FirstName
                    </TableCell>
                    <TableCell align='right' sx={{ color: "#fff" }}>
                      MiddleName
                    </TableCell>
                    <TableCell align='right' sx={{ color: "#fff" }}>
                      Birthday
                    </TableCell>
                    <TableCell align='right' sx={{ color: "#fff" }}>
                      Address
                    </TableCell>
                    <TableCell align='right' sx={{ color: "#fff" }}>
                      Purok
                    </TableCell>
                    <TableCell align='right' sx={{ color: "#fff" }}>
                      Email
                    </TableCell>
                    <TableCell align='right' sx={{ color: "#fff" }}>
                      ContactNum
                    </TableCell>
                    <TableCell align='right' sx={{ color: "#fff" }}>
                      Religion
                    </TableCell>
                    <TableCell align='right' sx={{ color: "#fff" }}>
                      Occupation
                    </TableCell>
                    <TableCell align='right' sx={{ color: "#fff" }}>
                      Gender
                    </TableCell>
                    <TableCell align='right' sx={{ color: "#fff" }}>
                      CivilStatus
                    </TableCell>
                    <TableCell align='right' sx={{ color: "#fff" }}>
                      Indigent
                    </TableCell>
                    <TableCell align='right' sx={{ color: "#fff" }}>
                      4Ps
                    </TableCell>
                    <TableCell align='right' sx={{ color: "#fff" }}>
                      SoloParent
                    </TableCell>
                    <TableCell align='right' sx={{ color: "#fff" }}>
                      Senior
                    </TableCell>
                    <TableCell align='right' sx={{ color: "#fff" }}>
                      PWD
                    </TableCell>
                    <TableCell align='right' sx={{ color: "#fff" }}>
                      Scholar
                    </TableCell>
                    <TableCell align='right' sx={{ color: "#fff" }}>
                      Voter
                    </TableCell>
                    <TableCell align='right' sx={{ color: "#fff" }}>
                      Photo
                    </TableCell>
                    <TableCell align='right' sx={{ color: "#fff" }}>
                      Status
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {isLoading ? (
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        minHeight: "100vh",
                        backgroundColor: (theme) =>
                          theme.palette.background.default,
                      }}
                    >
                      <CircularProgress size='30vw' thickness={3} />
                    </Box>
                  ) : (
                    <>
                      {users.map((user) => {
                        return (
                          <TableRow
                            key={user.id}

                            sx={{
                              cursor: "pointer",
                              "&:hover": { background: "#e3e3e3" },
                            }}
                          >
                            <TableCell align='center'>
                              {" "}
                              {user.LastName}
                            </TableCell>
                            <TableCell align='center'>
                              {" "}
                              {user.FirstName}
                            </TableCell>
                            <TableCell align='center'>
                              {" "}
                              {user.MiddleName}
                            </TableCell>
                            <TableCell align='center'>
                              {" "}
                              {user.Birthday}
                            </TableCell>
                            <TableCell align='center'>
                              {" "}
                              {user.Address}
                            </TableCell>
                            <TableCell align='center'> {user.Purok}</TableCell>
                            <TableCell align='center'> {user.Email}</TableCell>
                            <TableCell align='center'>
                              {" "}
                              {user.ContactNum}
                            </TableCell>
                            <TableCell align='center'>
                              {" "}
                              {user.Religion}
                            </TableCell>
                            <TableCell align='center'>
                              {" "}
                              {user.Occupation}
                            </TableCell>
                            <TableCell align='center'> {user.Gender}</TableCell>
                            <TableCell align='center'>
                              {" "}
                              {user.CivilStatus}
                            </TableCell>
                            <TableCell align='center'>
                              {" "}
                              {user.Indigent}
                            </TableCell>
                            <TableCell align='center'> {user.fourPs}</TableCell>
                            <TableCell align='center'>
                              {" "}
                              {user.SoloParent}
                            </TableCell>
                            <TableCell align='center'> {user.Senior}</TableCell>
                            <TableCell align='center'> {user.PWD}</TableCell>
                            <TableCell align='center'>
                              {" "}
                              {user.Scholar}
                            </TableCell>
                            <TableCell align='center'> {user.Voter}</TableCell>
                            <TableCell align='center'> {user.Photo}</TableCell>
                            <TableCell sx={{ display: 'flex', flexDirection: 'row' }}>

                              <Button
                                variant='contained'
                                color='info'
                                sx={{ marginRight: 2, flexDirection: 'column' }}
                                onClick={() => handleClick(user.id)}
                              >
                                EDIT
                              </Button>

                              <Button
                                onClick={() => {
                                  deleteUser(user.id);
                                }}
                                variant='contained'
                                color='error'
                                sx={{ flexDirection: 'column' }}
                              > DELETE</Button>


                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Grid>

        <Grid item xs={2} sx={{ ...style.residentInfoBox }}>
          <Box sx={{ ...style.infoContainer, paddingRight: 2, paddingLeft: 2 }}>
            <Box sx={style.personalInfoTitle}>
              <Typography sx={style.personalInfoText}>
                Resident's Personal Information
              </Typography>
            </Box>

            {/*First Name*/}
            <Box sx={style.residentInfoContainer}>
              <Box sx={style.infoFixed}>
                <Typography sx={style.infoTextFixed}>First Name:</Typography>
              </Box>
              <Box>
                <TextField
                  sx={style.mainInfo}
                  value={selectedUser.FirstName}
                  size='small'
                />
              </Box>
            </Box>

            {/*Last Name*/}
            <Box sx={style.residentInfoContainer}>
              <Box sx={style.infoFixed}>
                <Typography sx={style.infoTextFixed}>Last Name:</Typography>
              </Box>
              <Box>
                <TextField
                  sx={style.mainInfo}
                  value={selectedUser.LastName}
                  size='small'
                />
              </Box>
            </Box>

            {/*Address*/}
            <Box sx={style.residentInfoContainer}>
              <Box sx={style.infoFixed}>
                <Typography sx={style.infoTextFixed}>Address:</Typography>
              </Box>
              <Box>
                <TextField
                  sx={style.mainInfo}
                  value={selectedUser.Address}
                  size='small'
                />
              </Box>
            </Box>

            {/*Age*/}
            <Box sx={style.residentInfoContainer}>
              <Box sx={style.infoFixed}>
                <Typography sx={style.infoTextFixed}>Age:</Typography>
              </Box>
              <Box>
                <Typography
                  sx={style.mainInfo}
                  value='16 Years Old'
                  size='small'
                />
              </Box>
            </Box>

            {/*Birthday*/}
            <Box sx={style.residentInfoContainer}>
              <Box sx={style.infoFixed}>
                <Typography sx={style.infoTextFixed}>Birthday:</Typography>
              </Box>
              <Box>
                <TextField
                  sx={style.mainInfo}
                  value={selectedUser.Birthday}
                  size='small'
                />
              </Box>
            </Box>

            {/*Civil Status*/}
            <Box sx={style.residentInfoContainer}>
              <Box sx={style.infoFixed}>
                <Typography sx={style.infoTextFixed}>Civil Status:</Typography>
              </Box>
              <Box>
                <TextField
                  sx={style.mainInfo}
                  value={selectedUser.CivilStatus}
                  size='small'
                />
              </Box>
            </Box>

            {/*Contact*/}
            <Box sx={style.residentInfoContainer}>
              <Box sx={style.infoFixed}>
                <Typography sx={style.infoTextFixed}>Contact No.:</Typography>
              </Box>
              <Box>
                <TextField
                  sx={style.mainInfo}
                  value={selectedUser.ContactNum}
                  size='small'
                />
              </Box>
            </Box>

            {/*Email Address*/}
            <Box sx={style.residentInfoContainer}>
              <Box sx={style.infoFixed}>
                <Typography sx={style.infoTextFixed}>Email Adress:</Typography>
              </Box>
              <Box>
                <TextField
                  sx={style.mainInfo}
                  value={selectedUser.Email}
                  size='small'
                />
              </Box>
            </Box>

            {/*Gender*/}
            <Box sx={style.residentInfoContainer}>
              <Box sx={style.infoFixed}>
                <Typography sx={style.infoTextFixed}>Gender:</Typography>
              </Box>
              <Box>
                <TextField
                  sx={style.mainInfo}
                  value={selectedUser.Gender}
                  size='small'
                />
              </Box>
            </Box>

            {/*Occupation*/}
            <Box sx={style.residentInfoContainer}>
              <Box sx={style.infoFixed}>
                <Typography sx={style.infoTextFixed}>Occupation:</Typography>
              </Box>
              <Box>
                <TextField
                  sx={style.mainInfo}
                  value={selectedUser.Occupation}
                  size='small'
                />
              </Box>
            </Box>

            {/*Purok*/}
            <Box sx={style.residentInfoContainer}>
              <Box sx={style.infoFixed}>
                <Typography sx={style.infoTextFixed}>Purok:</Typography>
              </Box>
              <Box>
                <TextField
                  sx={style.mainInfo}
                  value={selectedUser.Purok}
                  size='small'
                />
              </Box>
            </Box>

            {/*Religion*/}
            <Box sx={style.residentInfoContainer}>
              <Box sx={style.infoFixed}>
                <Typography sx={style.infoTextFixed}>Religion:</Typography>
              </Box>
              <Box>
                <TextField
                  sx={style.mainInfo}
                  value={selectedUser.Religion}
                  size='small'
                />
              </Box>
            </Box>

            {/*4P's*/}
            <Box sx={style.residentInfoContainer}>
              <Box sx={style.infoFixed}>
                <Typography sx={style.infoTextFixed}>4P's:</Typography>
              </Box>
              <Box>
                <TextField
                  sx={style.mainInfo}
                  value={selectedUser.fourPs}
                  size='small'
                />
              </Box>
            </Box>

            {/*Indigent*/}
            <Box sx={style.residentInfoContainer}>
              <Box sx={style.infoFixed}>
                <Typography sx={style.infoTextFixed}>Indigent:</Typography>
              </Box>
              <Box>
                <TextField
                  sx={style.mainInfo}
                  value={selectedUser.Indigent}
                  size='small'
                />
              </Box>
            </Box>

            {/*PWD*/}
            <Box sx={style.residentInfoContainer}>
              <Box sx={style.infoFixed}>
                <Typography sx={style.infoTextFixed}>PWD:</Typography>
              </Box>
              <Box>
                <TextField
                  sx={style.mainInfo}
                  value={selectedUser.PWD}
                  size='small'
                />
              </Box>
            </Box>

            {/*Scholar*/}
            <Box sx={style.residentInfoContainer}>
              <Box sx={style.infoFixed}>
                <Typography sx={style.infoTextFixed}>Scholar:</Typography>
              </Box>
              <Box>
                <TextField
                  sx={style.mainInfo}
                  value={selectedUser.Scholar}
                  size='small'
                />
              </Box>
            </Box>

            {/*Senior*/}
            <Box sx={style.residentInfoContainer}>
              <Box sx={style.infoFixed}>
                <Typography sx={style.infoTextFixed}>
                  Senior Citizen:
                </Typography>
              </Box>
              <Box>
                <TextField
                  sx={style.mainInfo}
                  value={selectedUser.Senior}
                  size='small'
                />
              </Box>
            </Box>

            {/*Solo Parent*/}
            <Box sx={style.residentInfoContainer}>
              <Box sx={style.infoFixed}>
                <Typography sx={style.infoTextFixed}>Solo Parent:</Typography>
              </Box>
              <Box>
                <TextField
                  sx={style.mainInfo}
                  value={selectedUser.SoloParent}
                  size='small'
                />
              </Box>
            </Box>

            {/*Voter*/}
            <Box sx={style.residentInfoContainer}>
              <Box sx={style.infoFixed}>
                <Typography sx={style.infoTextFixed}>Voter:</Typography>
              </Box>
              <Box>
                <TextField
                  sx={style.mainInfo}
                  value={selectedUser.Voter}
                  size='small'
                />
              </Box>
            </Box>
            <Box sx={{ marginBottom: "10px" }} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
