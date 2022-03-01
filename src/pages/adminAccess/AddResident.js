import React, { useState } from "react";
import { db, storage } from "../../utils/firebase";
import {
  addDoc,
  collection,
  doc,
  increment,
  updateDoc,
} from "firebase/firestore";
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
import admin from "../../images/noone.jpg";
import moment from "moment";

import {
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

export default function AddResident() {


  ///
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
    senior: "",
    civilStatus: "",
    indigent: "",
    fourPs: "",
    soloParent: "",
    pwd: "",
    scholar: "",
    voter: "",
    photo: "",
  });

  const usersCollectionRef = collection(db, "users");

  //Firebase
  const createUser = async () => {
    if (datas.gender === "Male") {
      updateDoc(doc(db, "fixedData", "totalData"), {
        totalMale: increment(1),
      });
    } else {
      updateDoc(doc(db, "fixedData", "totalData"), {
        totalFemale: increment(1),
      });
    }
    if (datas.fourPs === "Eligible") {
      updateDoc(doc(db, "fixedData", "totalData"), {
        totalFourPs: increment(1),
      });
    }
    if (datas.voter === "Yes") {
      updateDoc(doc(db, "fixedData", "totalData"), {
        totalVoter: increment(1),
      });
    }
    if (datas.pwd === "Yes") {
      updateDoc(doc(db, "fixedData", "totalData"), {
        totalPWD: increment(1),
      });
    }
    if (datas.senior === "Yes") {
      updateDoc(doc(db, "fixedData", "totalData"), {
        totalSenior: increment(1),
      });
    }
    if (datas.indigent === "Yes") {
      updateDoc(doc(db, "fixedData", "totalData"), {
        totalIndigent: increment(1),
      });
    }
    if (datas.soloParent === "Yes") {
      updateDoc(doc(db, "fixedData", "totalData"), {
        totalSoloParent: increment(1),
      });
    }

    await addDoc(usersCollectionRef, {
      FirstName: datas.firstName,
      MiddleName: datas.middleName,
      LastName: datas.lastName,
      Birthday: moment(new Date(birthDate)).format("LL").toString(),
      Address: datas.address,
      Purok: datas.purok,
      Email: datas.email,
      ContactNum: datas.contactNum,
      Religion: datas.religion,
      Occupation: datas.occupation,
      Gender: datas.gender,
      Senior: datas.senior,
      CivilStatus: datas.civilStatus,
      Indigent: datas.indigent,
      fourPs: datas.fourPs,
      SoloParent: datas.soloParent,
      PWD: datas.pwd,
      Scholar: datas.scholar,
      Voter: datas.voter,
      Photo: datas.photo,
    });
  };
  const handleChanged = (e) => {
    setDatas({ ...datas, [e.target.name]: e.target.value });
  };

  const [progress, setProgress] = useState(0);
  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles(file);
  };

  const uploadFiles = (file) => {
    //
    if (!file) return;
    const sotrageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(sotrageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
        });
      }
    );
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
                  size='small'
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
                  size='small'
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
                  size='small'
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
                  size='small'
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
                  size='small'
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
                  size='small'
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
                  size='small'
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
                  size='small'
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
                  size='small'
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
                  <MenuItem value={"Male"}>Male</MenuItem>
                  <MenuItem value={"Female"}>Female</MenuItem>
                </Select>
              </Box>

              {/*Senior*/}
              <Box sx={style.infoItemContainer}>
                <Typography sx={style.infoItemText}>Senior:</Typography>
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
                  value={datas.senior}
                  name='senior'
                >
                  <MenuItem value={"Yes"}>Yes</MenuItem>
                  <MenuItem value={"No"}>No</MenuItem>
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
                  <MenuItem value={"Single"}>Single</MenuItem>
                  <MenuItem value={"Married"}>Married</MenuItem>
                  <MenuItem value={"Widowed"}>Widowed</MenuItem>
                  <MenuItem value={"Separated"}>Separated</MenuItem>
                  <MenuItem value={"Divorce"}>Divorce</MenuItem>
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
                  <MenuItem value={"Yes"}>Yes</MenuItem>
                  <MenuItem value={"No"}>No</MenuItem>
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
                  <MenuItem value={"Eligible"}>Eligible</MenuItem>
                  <MenuItem value={"Not Qualified"}>Not Qualified</MenuItem>
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
                  <MenuItem value={"Yes"}>Yes</MenuItem>
                  <MenuItem value={"No"}>No</MenuItem>
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
                  <MenuItem value={"Yes"}>Yes</MenuItem>
                  <MenuItem value={"No"}>No</MenuItem>
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
                  <MenuItem value={"Yes"}>Yes</MenuItem>
                  <MenuItem value={"No"}>No</MenuItem>
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
                  <MenuItem value={"Yes"}>Yes</MenuItem>
                  <MenuItem value={"No"}>No</MenuItem>
                </Select>
              </Box>

              <Box sx={{ marginBottom: "-5px" }} />

              {/*Picture*/}

        {/*Picture*/}
        <form onSubmit={formHandler}>
        <Box sx={style.pictureContainerMain} >
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
                              <input type='file' className='input' value={datas.photo} name='photo' onChange={handleChanged} />
                                <Typography sx={style.instructionUpload}>
                                  <hr />
                                <h2>Uploading done {progress}%</h2>
                                </Typography>
                                <Typography sx={style.subInstruction}>
                                  Must be in .jpg or .png format. 2mb Maximum
                                  File Size.
                                </Typography>
                              </Box>

                              <Button
                                variant='contained'
                                sx={style.uploadButton}
                                type="submit"
                              >
                                Upload
                              </Button>
                            </Box>
                          </Box>
                        </Box>
                        </form>
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
