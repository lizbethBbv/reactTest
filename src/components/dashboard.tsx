import React from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default class Dashboard extends React.Component {
  // constructor() {
  //   // super(props);
  //   let dataTable = null;
  //   this.state = {
  //     error: null,
  //     isLoaded: false,
  //     data: [],
  //   };
  // }
  // createData(name, calories, fat, carbs, protein) {
  //   return { name, calories, fat, carbs, protein };
  // }

  // createTitles() {
  //   return [
  //     this.createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  //     this.createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  //     this.createData("Eclair", 262, 16.0, 24, 6.0),
  //     this.createData("Cupcake", 305, 3.7, 67, 4.3),
  //     this.createData("Gingerbread", 356, 16.0, 49, 3.9),
  //   ];
  // }
  // dataTable = this.createTitles;
  // componentDidMount() {
  //   let allData = null;
  //   axios
  //     .get("http://localhost:5000/all")
  //     .then((res) => (allData = res.data))
  //     .then(
  //       (result) => {
  //         console.log(allData);
  //         this.setState({
  //           isLoaded: true,
  //           data: allData.data,
  //         });
  //       },
  //       (error) => {
  //         this.setState({
  //           isLoaded: true,
  //           error,
  //         });
  //       }
  //     );
  // }

  // render() {
  //   const { error, isLoaded, data } = this.state;

  //   if (error) {
  //     return <div className="col">Error: {error.message}</div>;
  //   } else if (!isLoaded) {
  //     return <div className="col">Loading...</div>;
  //   } else {
  //     return (
  //       // <div className="col">
  //       //   <h1>Mi Casa</h1>
  //       //   <p>This is my house y'all!</p>
  //       //   {data.map((d, indice) => (
  //       //     <div key="{indice}">{d.fullName}</div>
  //       //   ))}
  //       // </div>
  //       <TableContainer component={Paper}>
  //         <Table sx={{ minWidth: 650 }} aria-label="simple table">
  //           <TableHead>
  //             <TableRow>
  //               <TableCell>Full name</TableCell>
  //               <TableCell align="right">Email</TableCell>
  //               <TableCell align="right"># suscr</TableCell>
  //               <TableCell align="right">Total</TableCell>
  //               <TableCell align="right">Ultimo pago</TableCell>
  //               <TableCell align="right">Periodicidad</TableCell>
  //               <TableCell align="right">Todas</TableCell>
  //               <TableCell align="right">Prox pago</TableCell>
  //             </TableRow>
  //           </TableHead>
  //           <TableBody>
  //             {dataTable.map((row) => (
  //               <TableRow
  //                 key={row.fullName}
  //                 sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
  //               >
  //                 <TableCell component="th" scope="row">
  //                   {row.fullName}
  //                 </TableCell>
  //                 <TableCell align="right">{row.email}</TableCell>
  //                 <TableCell align="right">{row.SuscQuanty}</TableCell>
  //                 <TableCell align="right">{row.totalPagar}</TableCell>
  //                 <TableCell align="right">{row.fechaUltimo}</TableCell>
  //                 <TableCell align="right">{row.periodicidad}</TableCell>
  //                 <TableCell align="right">{row.all_platf}</TableCell>
  //                 <TableCell align="right">{row.pagoEsperado}</TableCell>
  //               </TableRow>
  //             ))}
  //           </TableBody>
  //         </Table>
  //       </TableContainer>
  //     );
  //   }
  // }
}
