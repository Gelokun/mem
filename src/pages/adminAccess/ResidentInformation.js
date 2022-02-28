import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { collection, doc, getDocs, getDoc } from "firebase/firestore";
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
  CircularProgress
} from "@mui/material";

import SearchIcon from "@material-ui/icons/Search";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import PaidIcon from "@mui/icons-material/Paid";
import PollIcon from "@mui/icons-material/Poll";
import AccessibleIcon from "@mui/icons-material/Accessible";
import ElderlyIcon from "@mui/icons-material/Elderly";
import FaceIcon from "@mui/icons-material/Face";

export default function ResidentInformation() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = (id) => {
    const userRef = doc(db, 'users', id)
    getDoc(userRef).then((docSnap) => {
      setSelectedUser(docSnap.data())
    })
  }
  useEffect(async () => {
    let dataUser = [];
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      dataUser.push({ id: doc.id, ...doc.data() })
    })
    setTimeout(() => {
      setUsers(dataUser)
      setIsLoading(false)
    }, 500)
  });

  return (
    <Box>
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
                <TableHead sx={{ backgroundColor: '#16304d' }}>
                  <TableRow >
                    <TableCell align='right' sx={{ color: '#fff' }}>Lastname</TableCell>
                    <TableCell align='right' sx={{ color: '#fff' }}>FirstName</TableCell>
                    <TableCell align='right' sx={{ color: '#fff' }}>MiddleName</TableCell>
                    <TableCell align='right' sx={{ color: '#fff' }}>Birthday</TableCell>
                    <TableCell align='right' sx={{ color: '#fff' }}>Address</TableCell>
                    <TableCell align='right' sx={{ color: '#fff' }}>Purok</TableCell>
                    <TableCell align='right' sx={{ color: '#fff' }}>Email</TableCell>
                    <TableCell align='right' sx={{ color: '#fff' }}>ContactNum</TableCell>
                    <TableCell align='right' sx={{ color: '#fff' }}>Religion</TableCell>
                    <TableCell align='right' sx={{ color: '#fff' }}>Occupation</TableCell>
                    <TableCell align='right' sx={{ color: '#fff' }}>Gender</TableCell>
                    <TableCell align='right' sx={{ color: '#fff' }}>CivilStatus</TableCell>
                    <TableCell align='right' sx={{ color: '#fff' }}>Indigent</TableCell>
                    <TableCell align='right' sx={{ color: '#fff' }}>4Ps</TableCell>
                    <TableCell align='right' sx={{ color: '#fff' }}>SoloParent</TableCell>
                    <TableCell align='right' sx={{ color: '#fff' }}>PWD</TableCell>
                    <TableCell align='right' sx={{ color: '#fff' }}>Scholar</TableCell>
                    <TableCell align='right' sx={{ color: '#fff' }}>Voter</TableCell>
                    <TableCell align='right' sx={{ color: '#fff' }}>Photo</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {isLoading ? (
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: (theme) => theme.palette.background.default, }}>
                      <CircularProgress size='30vw' thickness={3} />
                    </Box>) : (<>
                      {users.map((user) => {
                        return (
                          <TableRow key={user.id} onClick={() => handleClick(user.id)} sx={{ cursor: 'pointer', '&:hover': { background: '#e3e3e3' } }}>
                            <TableCell align='center'> {user.LastName}</TableCell>
                            <TableCell align='center'> {user.FirstName}</TableCell>
                            <TableCell align='center'> {user.MiddleName}</TableCell>
                            <TableCell align='center'> {user.Birthday}</TableCell>
                            <TableCell align='center'> {user.Address}</TableCell>
                            <TableCell align='center'> {user.Purok}</TableCell>
                            <TableCell align='center'> {user.Email}</TableCell>
                            <TableCell align='center'> {user.ContactNum}</TableCell>
                            <TableCell align='center'> {user.Religion}</TableCell>
                            <TableCell align='center'> {user.Occupation}</TableCell>
                            <TableCell align='center'> {user.Gender}</TableCell>
                            <TableCell align='center'> {user.CivilStatus}</TableCell>
                            <TableCell align='center'> {user.Indigent}</TableCell>
                            <TableCell align='center'> {user.fourPs}</TableCell>
                            <TableCell align='center'> {user.SoloParent}</TableCell>
                            <TableCell align='center'> {user.PWD}</TableCell>
                            <TableCell align='center'> {user.Scholar}</TableCell>
                            <TableCell align='center'> {user.Voter}</TableCell>
                            <TableCell align='center'> {user.Photo}</TableCell>
                          </TableRow>
                        )
                      })}
                    </>)}

                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          {/*Table End Here*/}

          {/*Summary*/}

          <Box sx={style.summaryCountContainer}>
            <Grid container>
              {/*Population Count*/}
              <Grid item sx={style.perItem}>
                <Box sx={style.detailContainer}>
                  <Box sx={style.coloredIcon1}>
                    <PeopleAltIcon sx={style.infoIconColor} />
                  </Box>
                  <Box sx={style.infoTextContainer}>
                    <Typography sx={style.infoDescription}>
                      Population Count:{" "}
                    </Typography>
                    <Typography sx={style.infoDescriptionValue}>
                      100{" "}
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              {/*Male Count*/}
              <Grid item sx={style.perItem}>
                <Box sx={style.detailContainer}>
                  <Box sx={style.coloredIcon2}>
                    <MaleIcon sx={style.infoIconColor} />
                  </Box>
                  <Box sx={style.infoTextContainer}>
                    <Typography sx={style.infoDescription}>
                      Male Count:{" "}
                    </Typography>
                    <Typography sx={style.infoDescriptionValue}>
                      100{" "}
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              {/*Female Count*/}
              <Grid item sx={style.perItem}>
                <Box sx={style.detailContainer}>
                  <Box sx={style.coloredIcon3}>
                    <FemaleIcon sx={style.infoIconColor} />
                  </Box>
                  <Box sx={style.infoTextContainer}>
                    <Typography sx={style.infoDescription}>
                      Female Count:{" "}
                    </Typography>
                    <Typography sx={style.infoDescriptionValue}>
                      100{" "}
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              {/*4P's Beneficiary*/}
              <Grid item sx={style.perItem}>
                <Box sx={style.detailContainer}>
                  <Box sx={style.coloredIcon4}>
                    <PaidIcon sx={style.infoIconColor} />
                  </Box>
                  <Box sx={style.infoTextContainer}>
                    <Typography sx={style.infoDescription}>
                      4P's Benefeciary:{" "}
                    </Typography>
                    <Typography sx={style.infoDescriptionValue}>
                      100{" "}
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              {/*Voter*/}
              <Grid item sx={style.perItem}>
                <Box sx={style.detailContainer}>
                  <Box sx={style.coloredIcon5}>
                    <PollIcon sx={style.infoIconColor} />
                  </Box>
                  <Box sx={style.infoTextContainer}>
                    <Typography sx={style.infoDescription}>Voter: </Typography>
                    <Typography sx={style.infoDescriptionValue}>
                      100{" "}
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              {/*PWD*/}
              <Grid item sx={style.perItem}>
                <Box sx={style.detailContainer}>
                  <Box sx={style.coloredIcon6}>
                    <AccessibleIcon sx={style.infoIconColor} />
                  </Box>
                  <Box sx={style.infoTextContainer}>
                    <Typography sx={style.infoDescription}>PWD </Typography>
                    <Typography sx={style.infoDescriptionValue}>
                      100{" "}
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              {/*Senior*/}
              <Grid item sx={style.perItem}>
                <Box sx={style.detailContainer}>
                  <Box sx={style.coloredIcon7}>
                    <ElderlyIcon sx={style.infoIconColor} />
                  </Box>
                  <Box sx={style.infoTextContainer}>
                    <Typography sx={style.infoDescription}>
                      Senior Citizen{" "}
                    </Typography>
                    <Typography sx={style.infoDescriptionValue}>
                      100{" "}
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              {/*Indigent*/}
              <Grid item sx={style.perItem}>
                <Box sx={style.detailContainer}>
                  <Box sx={style.coloredIcon8}>
                    <FaceIcon sx={style.infoIconColor} />
                  </Box>
                  <Box sx={style.infoTextContainer}>
                    <Typography sx={style.infoDescription}>
                      Indigent{" "}
                    </Typography>
                    <Typography sx={style.infoDescriptionValue}>
                      100{" "}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs sx={style.residentInfoContainer}>
          <Box sx={style.infoContainer}>
            <Box sx={style.personalInfoTitle}>
              <Typography sx={style.personalInfoText}>Resident's Personal Information</Typography>
            </Box>

            {/*First Name*/}
            <Box sx={style.residentInfoContainer}>
              <Box sx={style.infoFixed}>
                <Typography sx={style.infoTextFixed}>First Name:</Typography>
              </Box>
              <Box>
                <Typography sx={style.mainInfo}>{selectedUser.FirstName}</Typography>
              </Box>
            </Box>

            {/*Last Name*/}
            <Box sx={style.residentInfoContainer}>
              <Box sx={style.infoFixed}>
                <Typography sx={style.infoTextFixed}>Last Name:</Typography>
              </Box>
              <Box>
                <Typography sx={style.mainInfo}>{selectedUser.LastName}</Typography>
              </Box>
            </Box>

            {/*Address*/}
            <Box sx={style.residentInfoContainer}>
              <Box sx={style.infoFixed}>
                <Typography sx={style.infoTextFixed}>Address:</Typography>
              </Box>
              <Box>
                <Typography sx={style.mainInfo}>{selectedUser.Address}</Typography>
              </Box>
            </Box>

            {/*Age*/}
            <Box sx={style.residentInfoContainer}>
              <Box sx={style.infoFixed}>
                <Typography sx={style.infoTextFixed}>Age:</Typography>
              </Box>
              <Box>
                <Typography sx={style.mainInfo}>16 Years Old</Typography>
              </Box>
            </Box>

            {/*Birthday*/}
            <Box sx={style.residentInfoContainer}>
              <Box sx={style.infoFixed}>
                <Typography sx={style.infoTextFixed}>Birthday:</Typography>
              </Box>
              <Box>
                <Typography sx={style.mainInfo}>{selectedUser.Birthday}</Typography>
              </Box>
            </Box>

            {/*Civil Status*/}
            <Box sx={style.residentInfoContainer}>
              <Box sx={style.infoFixed}>
                <Typography sx={style.infoTextFixed}>Civil Status:</Typography>
              </Box>
              <Box>
                <Typography sx={style.mainInfo}>{selectedUser.CivilStatus}</Typography>
              </Box>
            </Box>

            {/*Contact*/}
            <Box sx={style.residentInfoContainer}>
              <Box sx={style.infoFixed}>
                <Typography sx={style.infoTextFixed}>Contact No.:</Typography>
              </Box>
              <Box>
                <Typography sx={style.mainInfo}>{selectedUser.ContactNum}</Typography>
              </Box>
            </Box>

            {/*Email Address*/}
            <Box sx={style.residentInfoContainer}>
              <Box sx={style.infoFixed}>
                <Typography sx={style.infoTextFixed}>Email Adress:</Typography>
              </Box>
              <Box>
                <Typography sx={style.mainInfo}>{selectedUser.Email}</Typography>
              </Box>
            </Box>

            {/*Gender*/}
            <Box sx={style.residentInfoContainer}>
              <Box sx={style.infoFixed}>
                <Typography sx={style.infoTextFixed}>Gender:</Typography>
              </Box>
              <Box>
                <Typography sx={style.mainInfo}>{selectedUser.Gender}</Typography>
              </Box>
            </Box>

            {/*Occupation*/}
            <Box sx={style.residentInfoContainer}>
              <Box sx={style.infoFixed}>
                <Typography sx={style.infoTextFixed}>Occupation:</Typography>
              </Box>
              <Box>
                <Typography sx={style.mainInfo}>{selectedUser.Occupation}</Typography>
              </Box>
            </Box>

            {/*Purok*/}
            <Box sx={style.residentInfoContainer}>
              <Box sx={style.infoFixed}>
                <Typography sx={style.infoTextFixed}>Purok:</Typography>
              </Box>
              <Box>
                <Typography sx={style.mainInfo}>{selectedUser.Purok}</Typography>
              </Box>
            </Box>

            {/*Religion*/}
            <Box sx={style.residentInfoContainer}>
              <Box sx={style.infoFixed}>
                <Typography sx={style.infoTextFixed}>Religion:</Typography>
              </Box>
              <Box>
                <Typography sx={style.mainInfo}>{selectedUser.Religion}</Typography>
              </Box>
            </Box>

            {/*Salary*/}
            <Box sx={style.residentInfoContainer}>
              <Box sx={style.infoFixed}>
                <Typography sx={style.infoTextFixed}>Salary:</Typography>
              </Box>
              <Box>
                <Typography sx={style.mainInfo}>Php. 50,000.25</Typography>
              </Box>
            </Box>

            {/*4P's*/}
            <Box sx={style.residentInfoContainer}>
              <Box sx={style.infoFixed}>
                <Typography sx={style.infoTextFixed}>4P's:</Typography>
              </Box>
              <Box>
                <Typography sx={style.mainInfo}>{selectedUser.fourPs}</Typography>
              </Box>
            </Box>

            {/*Indigent*/}
            <Box sx={style.residentInfoContainer}>
              <Box sx={style.infoFixed}>
                <Typography sx={style.infoTextFixed}>Indigent:</Typography>
              </Box>
              <Box>
                <Typography sx={style.mainInfo}>{selectedUser.Indigent}</Typography>
              </Box>
            </Box>

            {/*PWD*/}
            <Box sx={style.residentInfoContainer}>
              <Box sx={style.infoFixed}>
                <Typography sx={style.infoTextFixed}>PWD:</Typography>
              </Box>
              <Box>
                <Typography sx={style.mainInfo}>{selectedUser.PWD}</Typography>
              </Box>
            </Box>

            {/*Scholar*/}
            <Box sx={style.residentInfoContainer}>
              <Box sx={style.infoFixed}>
                <Typography sx={style.infoTextFixed}>Scholar:</Typography>
              </Box>
              <Box>
                <Typography sx={style.mainInfo}>{selectedUser.Scholar}</Typography>
              </Box>
            </Box>

            {/*Senior*/}
            <Box sx={style.residentInfoContainer}>
              <Box sx={style.infoFixed}>
                <Typography sx={style.infoTextFixed}>Senior Citizen:</Typography>
              </Box>
              <Box>
                <Typography sx={style.mainInfo}>False</Typography>
              </Box>
            </Box>

            {/*Solo Parent*/}
            <Box sx={style.residentInfoContainer}>
              <Box sx={style.infoFixed}>
                <Typography sx={style.infoTextFixed}>Solo Parent:</Typography>
              </Box>
              <Box>
                <Typography sx={style.mainInfo}>{selectedUser.SoloParent}</Typography>
              </Box>
            </Box>

            {/*Voter*/}
            <Box sx={style.residentInfoContainer}>
              <Box sx={style.infoFixed}>
                <Typography sx={style.infoTextFixed}>Voter:</Typography>
              </Box>
              <Box>
                <Typography sx={style.mainInfo}>{selectedUser.Voter}</Typography>
              </Box>
            </Box>

            <Box sx={{ marginBottom: '10px', }} />
          </Box>
        </Grid>
      </Grid>
    </Box>

  );
}
