import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@material-ui/core";
import Navbar from '../components/Navbar'
import axios from 'axios';

function Data({item}){
    console.log(item)
    const useStyles = makeStyles({
        table: {
            minWidth: 650,
            textAlign: 'center',
            border: '5px solid green',
        },
        tableCon: {
            maxWidth: 1200,
            margin: '50px auto',
        },
        tableCell1: {
            fontSize: '20px',
            fontWeight: 'bold',
            padding: '20px',
        },
        tableCell2: {
            fontSize: '20px',
            padding: '20px'
        }
    });
    const classes = useStyles();

    return (
    <>
    {
        <TableContainer component={Paper} className={classes.tableCon}>
        <Table className={classes.table} aria-label="simple table">
        <TableHead>
            <TableRow>
                <TableCell colSpan={2} align='center' style={{
                    fontSize: '30px',
                    fontWeight: 'bold',
                    padding: '30px',
                    backgroundColor:'#C4E3CB'
                }}>기타류</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell className={classes.tableCell1} >이미지</TableCell>
                <TableCell className={classes.tableCell2} >미정</TableCell>
            </TableRow>
            <TableRow>
                <TableCell className={classes.tableCell1} >제품명</TableCell>
                <TableCell className={classes.tableCell2} >{item.item}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell className={classes.tableCell1} >분리수거가능여부</TableCell>
                <TableCell className={classes.tableCell2} >{item.isPossible}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell className={classes.tableCell1} >비고</TableCell>
                <TableCell className={classes.tableCell2} >{item.explain}</TableCell>
            </TableRow>
        </TableBody>
        </Table>
    </TableContainer>
    }
    </>
    );
}


const Etc = ({match}) => {
    var param = match.params.item
    var [item, setItem] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/etc?item=' + param).then((Response)=>{
            setItem(item = Response.data);
            console.log(item)
            }).catch((Error)=>{
            console.log(Error);
          })
      },[]);

    return (
    <div style={{ textAlign: `center` }}>
    <Navbar/>
    {item && <Data item = {item}/>}
    </div>
    );
}


export default Etc;