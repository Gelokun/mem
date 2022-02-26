import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { collection,  getDocs } from "firebase/firestore";
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
  const [users, setUsers] = useState();

  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);
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
                  horizontal: "top",
                },

                transformOrigin: {
                  vertical: "bottom",
                  horizontal: "bottom",
                },
                getContentAnchorEl: null,
              }}
            >
              <MenuItem value={"1"} sx={style.menuItemText}>
                Last Name
              </MenuItem>
              <MenuItem value={"2"} sx={style.menuItemText}>
                First Name
              </MenuItem>
              <MenuItem value={"3"} sx={style.menuItemText}>
                Age
              </MenuItem>
              <MenuItem value={"4"} sx={style.menuItemText}>
                Birthday
              </MenuItem>
              <MenuItem value={"5"} sx={style.menuItemText}>
                Gender
              </MenuItem>
              <MenuItem value={"6"} sx={style.menuItemText}>
                Purok
              </MenuItem>
              <MenuItem value={"7"} sx={style.menuItemText}>
                Religion
              </MenuItem>
              <MenuItem value={"8"} sx={style.menuItemText}>
                Voter
              </MenuItem>
            </Select>
          </Box>

          {/*Table Start Here*/}

          <Box sx={{ marginTop: "10px", width: "70%" }}>
            <TableContainer sx={style.tableProperties1} component={Paper}>
              <Table sx={{ minWidth: 500 }} aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell align='right'>Lastname</TableCell>
                    <TableCell align='right'>FirstName</TableCell>
                    <TableCell align='right'>MiddleName</TableCell>
                    <TableCell align='right'>Birthday</TableCell>
                    <TableCell align='right'>Address</TableCell>
                    <TableCell align='right'>Purok</TableCell>
                    <TableCell align='right'>Email</TableCell>
                    <TableCell align='right'>ContactNum</TableCell>
                    <TableCell align='right'>Religion</TableCell>
                    <TableCell align='right'>Occupation</TableCell>
                    <TableCell align='right'>Gender</TableCell>
                    <TableCell align='right'>CivilStatus</TableCell>
                    <TableCell align='right'>Indigent</TableCell>
                    <TableCell align='right'>4Ps</TableCell>
                    <TableCell align='right'>SoloParent</TableCell>
                    <TableCell align='right'>PWD</TableCell>
                    <TableCell align='right'>Scholar</TableCell>
                    <TableCell align='right'>Voter</TableCell>
                    <TableCell align='right'>Photo</TableCell>
                  </TableRow>
                </TableHead>

                
                <TableBody>
                {users.map((user) => {
                  return (
                      <TableRow>
                        <TableCell> {user.LastName}</TableCell>
                        <TableCell> {user.FirstName}</TableCell>
                        <TableCell> {user.MiddleName}</TableCell>
                        <TableCell> {user.Birthday}</TableCell>
                        <TableCell> {user.Address}</TableCell>
                        <TableCell> {user.Purok}</TableCell>
                        <TableCell> {user.Email}</TableCell>
                        <TableCell> {user.ContactNum}</TableCell>
                        <TableCell> {user.Religion}</TableCell>
                        <TableCell> {user.Occupation}</TableCell>
                        <TableCell> {user.Gender}</TableCell>
                        <TableCell> {user.CivilStatus}</TableCell>
                        <TableCell> {user.Indigent}</TableCell>
                        <TableCell> {user.fourPs}</TableCell>
                        <TableCell> {user.SoloParent}</TableCell>
                        <TableCell> {user.PWD}</TableCell>
                        <TableCell> {user.Scholar}</TableCell>
                        <TableCell> {user.Voter}</TableCell>
                        <TableCell> {user.Photo}</TableCell>
                      </TableRow>
                     );
                    })}
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
      </Grid>
    </Box>
  );
}
