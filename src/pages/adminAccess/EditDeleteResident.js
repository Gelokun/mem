import React, { useEffect, useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Box } from "@mui/system";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import style from "../../styles/DashboardStyles";
import { db } from "../../utils/firebase";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export default function EditDeleteResident(){
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect( async () =>  {
    let dataUser = [];
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      dataUser.push({id:doc.id, ...doc.data() })
      })
      setTimeout(() => {
        setUsers(dataUser)
        setIsLoading(false)
        }, 500)
        
    });
  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

  return (
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
          { isLoading ? (<> </>) : (<>
                 {users.map((users) => {
                   return (
                <TableRow>
                  <TableCell> {users.LastName}</TableCell>
                  <TableCell> {users.FirstName}</TableCell>
                  <TableCell> {users.MiddleName}</TableCell>
                  <TableCell> {users.Address}</TableCell>
                  <TableCell> {users.Purok}</TableCell>
                  <TableCell> {users.Email}</TableCell>
                  <TableCell> {users.ContactNum}</TableCell>
                  <TableCell> {users.Religion}</TableCell>
                  <TableCell> {users.Occupation}</TableCell>
                  <TableCell> {users.Gender}</TableCell>
                  <TableCell> {users.CivilStatus}</TableCell>
                  <TableCell> {users.Indigent}</TableCell>
                  <TableCell> {users.fourPs}</TableCell>
                  <TableCell> {users.SoloParent}</TableCell>
                  <TableCell> {users.PWD}</TableCell>
                  <TableCell> {users.Scholar}</TableCell>
                  <TableCell> {users.Voter}</TableCell>
                  <TableCell> {users.Photo}</TableCell>

                  {/*<button onClick={()=>{UpdateUser(user.id, user.age)}}>Increase Age</button>*/}
                  <TableCell>
                    <IconButton
                      onClick={() => {
                        deleteUser(users.id);
                      }}
                      aria-label='delete'
                      size='large'
                    >
                      <DeleteIcon fontSize='inherit' />
                    </IconButton>
                  </TableCell>
                </TableRow>
             )})}
             </>)}
                   
          </TableBody>
     
        </Table>
      </TableContainer>
    </Box>
  );
}
