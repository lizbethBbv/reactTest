import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import Tooltip from '@mui/material/Tooltip';
import { table } from "../interfaces/table";
import { Card, CardContent } from "@mui/material";

export const Tabla = (props) => (
  // const rows = [
  //   {
  //     id: 9,
  //     fullName: 'juanito',
  //     email: 'email',
  //     SuscQuanty: 4,
  //     totalPagar: 4,
  //     fechaUltimo: 'hola',
  //     periodicidad: 'hola',
  //     all_platf: 'hola',
  //     pagoEsperado: 'hola'
  //   }];
  console.log(props, "desde la tabla")

  return (
  <Paper elevation={0} >
    <Card Card sx={{ minWidth: 275, maxWidth: 1800, minHeight: 300, maxHeight: 900 }}>
      <CardContent>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650, maxWidth: 900 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Full name</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right"># suscr</TableCell>
                <TableCell align="right">Total</TableCell>
                <TableCell align="right">Ultimo pago</TableCell>
                <TableCell align="right">Periodicidad</TableCell>
                <TableCell align="right">Prox pago</TableCell>
                <TableCell align="right">Plataformas</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.rows.map((row, ind) => (
                <TableRow
                  key={ind}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.fullName}
                  </TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">{row.SuscQuanty}</TableCell>
                  <TableCell align="right">{row.totalPagar}</TableCell>
                  <TableCell align="right">{row.fechaUltimo}</TableCell>
                  <TableCell align="right">{row.periodicidad}</TableCell>
                  <TableCell align="right">{row.pagoEsperado}</TableCell>
                  <TableCell align="right">{row.all_platf}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card >
  </Paper >
);
);
export default Tabla;