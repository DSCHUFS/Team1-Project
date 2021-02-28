import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@material-ui/core";
import Navbar from './Navbar'

function Etc() {
    const useStyles = makeStyles({
        table: {
            minWidth: 650,
            textAlign: 'center',
            border: '5px solid green',

        },
        tableCon: {
            maxWidth: 1000,
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

    function createData(item, img, isPossible, explain) {
        return { item, img, isPossible, explain};
    }

    const datas = [
        createData('종이 핸드타월', 'img', 'x', '이물질이 묻어있을 경우 재활용이 안되므로 일반 종량제 봉투에 버려야함'),
    ];

    const classes = useStyles();

    return (
    <div style={{ textAlign: `center` }}>
    <Navbar/>
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
                <TableCell className={classes.tableCell1} style={{backgroundColor:'#D3D3D3'}}>이미지</TableCell>
                <TableCell className={classes.tableCell2} style={{backgroundColor:'#D3D3D3'}}>{datas[0].img}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell className={classes.tableCell1} style={{backgroundColor:'#8AAE92'}}>제품명</TableCell>
                <TableCell className={classes.tableCell2} style={{backgroundColor:'#8AAE92'}}>{datas[0].item}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell className={classes.tableCell1} style={{backgroundColor:'#D3D3D3'}}>분리수거가능여부</TableCell>
                <TableCell className={classes.tableCell2} style={{backgroundColor:'#D3D3D3'}}>{datas[0].isPossible}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell className={classes.tableCell1} style={{backgroundColor:'#8AAE92'}}>비고</TableCell>
                <TableCell className={classes.tableCell2} style={{backgroundColor:'#8AAE92'}}>{datas[0].explain}</TableCell>
            </TableRow>
        </TableBody>
        </Table>
    </TableContainer>
    </div>
    );
}


export default Etc;