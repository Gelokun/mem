import React, { useState } from "react";
import { db } from "../../utils/firebase";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { Box } from "@mui/system";
import style from "../../styles/DashboardStyles";
import {
  Button,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import admin from "../../images/admin.jpg";

export default function AddResident() {
  const [birthDate, setBirthDate] = useState(new Date("2014-08-18"));
  const handleDate = (newValue) => {
    setBirthDate(newValue);
  };

  //initialize
  const [datas, setDatas] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    birthDay: birthDate,
    address: "",
    purok: "",
    email: "",
    contactNum: "",
    religion: "",
    occupation: "",
    gender: "",
    civilStatus: "",
    indigent: "",
    fourPs: "",
    soloParent: "",
    pwd: "",
    scholar: "",
    voter: "",
    photoURL: "",
  });

  const usersCollectionRef = collection(db, "users");

  //Firebase
  const createUser = async () => {
    await addDoc(usersCollectionRef, {
      FirstName: datas.firstName,
      MiddleName: datas.middleName,
      LastName: datas.lastName,
      Birthday: new Date(birthDate),
      Address: datas.address,
      Purok: datas.purok,
      Email: datas.email,
      ContactNum: datas.contactNum,
      Religion: datas.religion,
      Occupation: datas.occupation,
      Gender: datas.occupation,
      CivilStatus: datas.civilStatus,
      Indigent: datas.indigent,
      fourPs: datas.fourPs,
      SoloParent: datas.soloParent,
      PWD: datas.pwd,
      Scholar: datas.scholar,
      Voter: datas.voter,
      Photo: datas.photoURL,
    });
  };
  const handleChanged = (e) => {
    setDatas({ ...datas, [e.target.name]: e.target.value });
  };


  return (
    <Box>
      <Box sx={style.formRegisterContainer}>
        <Grid container justifyContent={"space-between"}>
          {/*Form Left*/}
          <Grid item sx={style.paperMain1}>
            <Box sx={style.registerForm1}>
              {/*Sub Title*/}
              <Box sx={style.subTitle}>
                <Typography sx={style.subTitleText}>
                  Personal Information
                </Typography>
              </Box>

              {/*First Name*/}
              <Box sx={style.infoItemContainer}>
                <Typography sx={style.infoItemText}>First Name:</Typography>
                <TextField
                  sx={style.infoTextBox}
                  onChange={handleChanged}
                  value={datas.firstName}
                  name='firstName'
                />
              </Box>

              {/*Middle Name*/}
              <Box sx={style.infoItemContainer}>
                <Typography sx={style.infoItemText}>Middle Name:</Typography>
                <TextField
                  sx={style.infoTextBox}
                  onChange={handleChanged}
                  value={datas.middleName}
                  name='middleName'
                />
              </Box>

              {/*Last Name*/}
              <Box sx={style.infoItemContainer}>
                <Typography sx={style.infoItemText}>Last Name:</Typography>
                <TextField
                  sx={style.infoTextBox}
                  onChange={handleChanged}
                  value={datas.lastName}
                  name='lastName'
                />
              </Box>

              {/*Birthday*/}
              <Box sx={style.infoItemContainer}>
                <Typography sx={style.infoItemText}>Birthday:</Typography>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    inputFormat='MM/dd/yyyy'
                    maxDate={new Date()}
                    minDate={new Date("1900-01-01")}
                    value={birthDate}
                    name='birthDay'
                    onChange={handleDate}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        size='small'
                        color='secondary'
                        sx={style.pickDate}
                      />
                    )}
                  />
                </LocalizationProvider>
              </Box>

              {/*Address*/}
              <Box sx={style.infoItemContainer}>
                <Typography sx={style.infoItemText}>Address:</Typography>
                <TextField
                  sx={style.infoTextBox}
                  onChange={handleChanged}
                  value={datas.address}
                  name='address'
                />
              </Box>

              {/*Purok*/}
              <Box sx={style.infoItemContainer}>
                <Typography sx={style.infoItemText}>Purok:</Typography>
                <TextField
                  sx={style.infoTextBox}
                  onChange={handleChanged}
                  value={datas.purok}
                  name='purok'
                />
              </Box>

              {/*Email Address*/}
              <Box sx={style.infoItemContainer}>
                <Typography sx={style.infoItemText}>Email:</Typography>
                <TextField
                  sx={style.infoTextBox}
                  onChange={handleChanged}
                  value={datas.email}
                  name='email'
                />
              </Box>

              {/*Contact No.*/}
              <Box sx={style.infoItemContainer}>
                <Typography sx={style.infoItemText}>Contact No.:</Typography>
                <TextField
                  sx={style.infoTextBox}
                  onChange={handleChanged}
                  value={datas.contactNum}
                  name='contactNum'
                />
              </Box>

              {/*Religion*/}
              <Box sx={style.infoItemContainer}>
                <Typography sx={style.infoItemText}>Religion:</Typography>
                <TextField
                  sx={style.infoTextBox}
                  onChange={handleChanged}
                  value={datas.religion}
                  name='religion'
                />
              </Box>

              {/*Occupation*/}
              <Box sx={style.infoItemContainer}>
                <Typography sx={style.infoItemText}>Occupation:</Typography>
                <TextField
                  sx={style.infoTextBox}
                  onChange={handleChanged}
                  value={datas.occupation}
                  name='occupation'
                />
              </Box>
            </Box>
          </Grid>
          {/*Form Left*/}
          <Grid item sx={style.paperMain2}>
            <Box sx={style.registerForm2}>
              <Box sx={style.subTitle}>
                <Typography sx={style.subTitleText}>
                  Other Information
                </Typography>
              </Box>
              {/*Gender*/}
              <Box sx={style.infoItemContainer}>
                <Typography sx={style.infoItemText}>Gender:</Typography>
                <Select
                  sx={style.genderSelect}
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
                  onChange={handleChanged}
                  value={datas.gender}
                  name='gender'
                >
                  <MenuItem value={"1"}>Male</MenuItem>
                  <MenuItem value={"2"}>Female</MenuItem>
                  <MenuItem value={"3"}>Other</MenuItem>
                </Select>
              </Box>

              {/*Civil Status*/}
              <Box sx={style.infoItemContainer}>
                <Typography sx={style.infoItemText}>Civil Status:</Typography>
                <Select
                  sx={style.genderSelect}
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
                  onChange={handleChanged}
                  value={datas.civilStatus}
                  name='civilStatus'
                >
                  <MenuItem value={"1"}>Single</MenuItem>
                  <MenuItem value={"2"}>Married</MenuItem>
                  <MenuItem value={"3"}>Widowed</MenuItem>
                  <MenuItem value={"4"}>Separated</MenuItem>
                  <MenuItem value={"5"}>Divorce</MenuItem>
                </Select>
              </Box>

              {/*Indigent*/}
              <Box sx={style.infoItemContainer}>
                <Typography sx={style.infoItemText}>Indigent:</Typography>
                <Select
                  sx={style.genderSelect}
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
                  onChange={handleChanged}
                  value={datas.indigent}
                  name='indigent'
                >
                  <MenuItem value={"1"}>Yes</MenuItem>
                  <MenuItem value={"2"}>No</MenuItem>
                </Select>
              </Box>

              {/*4P's*/}
              <Box sx={style.infoItemContainer}>
                <Typography sx={style.infoItemText}>4P's:</Typography>
                <Select
                  sx={style.genderSelect}
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
                  onChange={handleChanged}
                  value={datas.fourPs}
                  name='fourPs'
                >
                  <MenuItem value={"1"}>Eligible</MenuItem>
                  <MenuItem value={'2'}>Not Qualified</MenuItem>
                </Select>
              </Box>

              {/*Solo Parent*/}
              <Box sx={style.infoItemContainer}>
                <Typography sx={style.infoItemText}>Solo Parent:</Typography>
                <Select
                  sx={style.genderSelect}
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
                  onChange={handleChanged}
                  value={datas.soloParent}
                  name='soloParent'
                >
                  <MenuItem value={1}>Yes</MenuItem>
                  <MenuItem value={2}>No</MenuItem>
                </Select>
              </Box>

              {/*PWD*/}
              <Box sx={style.infoItemContainer}>
                <Typography sx={style.infoItemText}>PWD:</Typography>
                <Select
                  sx={style.genderSelect}
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
                  onChange={handleChanged}
                  value={datas.pwd}
                  name='pwd'
                >
                  <MenuItem value={1}>Yes</MenuItem>
                  <MenuItem value={2}>No</MenuItem>
                </Select>
              </Box>

              {/*Scholar*/}
              <Box sx={style.infoItemContainer}>
                <Typography sx={style.infoItemText}>Scholar:</Typography>
                <Select
                  sx={style.genderSelect}
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
                  onChange={handleChanged}
                  value={datas.scholar}
                  name='scholar'
                >
                  <MenuItem value={"1"}>Yes</MenuItem>
                  <MenuItem value={"2"}>No</MenuItem>
                </Select>
              </Box>

              {/*Voter*/}
              <Box sx={style.infoItemContainer}>
                <Typography sx={style.infoItemText}>Voter:</Typography>
                <Select
                  sx={style.genderSelect}
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
                  onChange={handleChanged}
                  value={datas.voter}
                  name='voter'
                >
                  <MenuItem value={"1"}>Yes</MenuItem>
                  <MenuItem value={"2"}>No</MenuItem>
                </Select>
              </Box>

              <Box sx={{ marginBottom: "-5px" }} />

              {/*Picture*/}
              <Box sx={style.pictureContainerMain}>
                <Box sx={style.pictureContainer}>
                  <img
                    alt='upload'
                    src={admin}
                    style={{
                      width: "150px",
                      height: "150px",
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <Box sx={{ width: "100%" }}>
                  <Box sx={style.pictureDetail}>
                    <Box>
                      <Typography sx={style.instructionUpload}>
                        Upload Picture
                      </Typography>
                      <Typography sx={style.subInstruction}>
                        Must be in .jpg or .png format. 2mb Maximum File Size.
                      </Typography>
                    </Box>

                    <Button variant='contained' sx={style.uploadButton}>
                      Upload
                    </Button>
                  </Box>
                </Box>
              </Box>

              <Box sx={{ marginBottom: "25px" }} />

              {/*Button*/}
              <Box sx={style.buttonContainer}>
                <Button
                  variant='contained'
                  sx={style.saveButton}
                  onClick={createUser}
                >
                  Save
                </Button>
                <Button variant='contained' sx={style.cancelButton}>
                  Cancel
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
