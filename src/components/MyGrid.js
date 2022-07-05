import { Grid, Box, CssBaseline, TableContainer, Table, TableRow, TableCell, TableBody, TableHead, Paper } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useEffect, useState } from "react";
import { getData } from "../services/data"; 

const columns = [
  {field:"Business_code", headerName:"Business_code"}, 
  {field:"Cust_number", headerName:"Cust_number"}, 
  {field:"Clear_date", headerName:"Clear_date"}, 
  {field:"Buisness_year", headerName:"Buisness_year"}, 
  {field:"Doc_id", headerName:"Doc_id"}, 
  {field:"Posting_date", headerName:"Posting_date"},
  {field:"Document_create_date", headerName:"Document_create_date"}, 
  {field:"Document_create_date1", headerName:"Document_create_date1"}, 
  {field:"Due_in_date", headerName:"Due_in_date"}, 
  {field:"Invoice_currency",headerName:"Invoice_currency"}, 
  {field:"Document_type", headerName:"Document_type"},
  {field:"Posting_id", headerName:"Posting_date"}, 
  {field:"Area_business", headerName:"Area_business"}, 
  {field:"Total_open_amount", headerName:"Total_open_amount"}, 
  {field:"Baseline_create_date", headerName:"Baseline_create_date"}, 
  {field:"Cust_payment_terms", headerName:"Cust_payment_terms"},
  {field:"Invoice_id", headerName:"Invoice_id"}, 
  {filed:"IsOpen", headerName:"IsOpen"}, 
  {field:"Aging_bucket", headerName:"Aging_bucket"}, 
  {filed:"Is_deleted", headerName:"Is_deleted"}
]

export function MyGrid() {
    const [data, setData] = useState([]);
    // const [columns, setColumns] = useState([
    //                                         {field:"Business_code", label:"Business_code"}, 
    //                                         {field:"Cust_number", label:"Cust_number"}, 
    //                                         {field:"Clear_date", label:"Clear_date"}, 
    //                                         {field:"Business_year", label:"Business_year"}, 
    //                                         {field:"Doc_id", label:"Doc_id"}, 
    //                                         {field:"Posting_date", label:"Posting_date"},
    //                                         {field:"Document_create_date", label:"Document_create_date"}, 
    //                                         {field:"Document_create_date1", label:"Document_create_date1"}, 
    //                                         {field:"Due_in_date", label:"Due_in_date"}, 
    //                                         {field:"Invoice_currency",label:"Invoice_currency"}, 
    //                                         {field:"Document_type", label:"Document_type"},
    //                                         {field:"Posting_id", label:"Posting_date"}, 
    //                                         {field:"Area_business", label:"Area_business"}, 
    //                                         {field:"Total_open_amount", label:"Total_open_amount"}, 
    //                                         {field:"Baseline_create_date", label:"Baseline_create_date"}, 
    //                                         {field:"Cust_payement_terms", label:"Cust_payement_terms"},
    //                                         {field:"Invoice_id", label:"Invoice_id"}, 
    //                                         {filed:"IsOpen", label:"IsOpen"}, 
    //                                         {field:"Aging_bucket", label:"Aging_bucket"}, 
    //                                         {filed:"Is_deleted", label:"Is_deleted"}
    //                                     ])
    useEffect(async () => { 
        setData(await getData())
    }, []);

    console.log(data)

    return (
      <div style={{ height: 700, width: '100%'}}>
        <DataGrid
          rows={data}
          columns={columns}
          getRowId={(row) => row.Doc_id}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
        />
      </div>
    );

    const styles = StyleSheet.create({
      container: {
        // backgroundColor: '#ccc',
        color: '#ffffff',
      },
    
      text: {
        color: "white"
      }
    });

  //   return <>
  //   <TableContainer component={Paper}>
  //       <Table sx={{ minWidth: 650 }} aria-label="simple table">
  //       <TableHead>
  //           <TableRow>
  //           <TableCell>Business_code</TableCell>
  //           {/* <TableCell align="right">Business_code</TableCell> */}
  //           <TableCell align="right">Cust_number</TableCell>
  //           <TableCell align="right">Clear_date</TableCell>
  //           <TableCell align="right">Buisness_year</TableCell>
  //           <TableCell align="right">Doc_id</TableCell>
  //           <TableCell align="right">Posting_date</TableCell>
  //           <TableCell align="right">Document_create_date</TableCell>
  //           <TableCell align="right">Document_create_date1</TableCell>
  //           <TableCell align="right">Due_in_date</TableCell>
  //           <TableCell align="right">Invoice_currency</TableCell>
  //           <TableCell align="right">Document_type</TableCell>
  //           <TableCell align="right">Posting_id</TableCell>
  //           <TableCell align="right">Area_business</TableCell>
  //           <TableCell align="right">Total_open_amount</TableCell>
  //           <TableCell align="right">Baseline_create_date</TableCell>
  //           <TableCell align="right">Cust_payment_terms</TableCell>
  //           <TableCell align="right">Invoice_id</TableCell>
  //           <TableCell align="right">IsOpen</TableCell>
  //           <TableCell align="right">Aging_bucket</TableCell>
  //           <TableCell align="right">Is_deleted</TableCell>
  //           </TableRow>
  //       </TableHead>
  //       <TableBody>
  //           {data.map(invoice => (
  //           <TableRow
  //               key={invoice.Business_code}
  //               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
  //           >
  //               <TableCell component="th" scope="invoice">{invoice.Business_code}</TableCell>
  //               <TableCell align="right">{invoice.Cust_number}</TableCell>
  //               <TableCell align="right">{invoice.Clear_date}</TableCell>
  //               <TableCell align="right">{invoice.Buisness_year}</TableCell>
  //               <TableCell align="right">{invoice.Doc_id}</TableCell>
  //               <TableCell align="right">{invoice.Posting_date}</TableCell>
  //               <TableCell align="right">{invoice.Document_create_date}</TableCell>
  //               <TableCell align="right">{invoice.Document_create_date1}</TableCell>
  //               <TableCell align="right">{invoice.Due_in_date}</TableCell>
  //               <TableCell align="right">{invoice.Invoice_currency}</TableCell>
  //               <TableCell align="right">{invoice.Document_type}</TableCell>
  //               <TableCell align="right">{invoice.Posting_id}</TableCell>
  //               <TableCell align="right">{invoice.Area_business}</TableCell>
  //               <TableCell align="right">{invoice.Total_open_amount}</TableCell>
  //               <TableCell align="right">{invoice.Baseline_create_date}</TableCell>
  //               <TableCell align="right">{invoice.Cust_payment_terms}</TableCell>
  //               <TableCell align="right">{invoice.Invoice_id}</TableCell>
  //               <TableCell align="right">{invoice.IsOpen}</TableCell>
  //               <TableCell align="right">{invoice.Aging_bucket}</TableCell>
  //               <TableCell align="right">{invoice.Is_deleted}</TableCell>
  //         </TableRow>
  //       ))}
  //     </TableBody>
  //   </Table>
  // </TableContainer>
  // </>;
}