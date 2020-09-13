import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import * as firebase from 'firebase'

const useStyles = makeStyles({
  table: {
    minWidth: 500,
    width: 200
  },
});

export default function ListAppointment() {
  const classes = useStyles(); 

  const [appointments, setAppointments] = useState([]);
  
  
  useEffect(() => {
      getAllAppoints();
    }, [])

  function getAllAppoints(){
    const appointmentsRef = firebase.database().ref().child('appointments')
    appointmentsRef.on('value', snap => {
      let allAppoints = [];
      let allKeys = [];
      let jointAppoint = {};
      snap.forEach(snap => {
        jointAppoint = {
          id: snap.key,
          value: snap.val()
        }
        allKeys.push(snap.key)
        allAppoints.push(jointAppoint);
      });
      setAppointments(allAppoints);

      // console.log(allKeys)
      console.log(allAppoints)
    })

  }

  function deleteAppointment(appointmentId){
    
    const appointmentsRef = firebase.database().ref('appointments')
    const dataRef = appointmentsRef.child(appointmentId); 
    dataRef.remove()
      // dataRef.set(pushData);
      // console.log(dataRef.push().key);
  }

  return (
    <TableContainer align="center" component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map((appointment) => (
            <TableRow key={appointment["id"]}>
              <TableCell align="right">{appointment["value"]["Name"]}</TableCell>
              <TableCell align="right">{appointment["value"]["date"]}</TableCell>
              <TableCell align="right">{appointment["value"]["time"]}</TableCell>
              <TableCell align="right">
                <IconButton aria-label="delete" onClick={deleteAppointment.bind(this, appointment["id"])} >
                  <DeleteIcon />
                </IconButton>
              </TableCell>

            </TableRow>
           
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

