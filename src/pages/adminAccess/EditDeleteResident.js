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

export default function EditDeleteResident() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

  return (
    <Box sx={{ marginTop: "10px", width: "70%" }}>
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
            {isLoading ? (<> </>) : (<>
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
                )
              })}
            </>)}

          </TableBody>

        </Table>
      </TableContainer>
    </Box>
  );
}
