import React, { Component } from 'react';
import Customer from '../components/Customer'
import '../css/Detail.css';
import { Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Navbar from '../components/Navbar'

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 650,
    textAlign: 'center',
    border: '5px solid green',
  },
  tableCon: {
    maxWidth: 1200,
    margin: '50px auto',
  },
  row: {
    fontSize: '20px',
    backgroundColor: '#D6ECD8',
    textAlign: 'center',
    textWeight: 'bold',
    minWidth: 100,
    },
  });

const customers = [
  {'id': '001',
  'image': 'https://cdn.pixabay.com/photo/2014/08/08/22/02/garbage-413757_1280.jpg' ,
  'name': '과자, 라면, 빵 봉지 등 모든 비닐',
  'explanation': '비닐류로 배출'
  },
  {'id': '002',
  'image': 'https://cdn.pixahttps://cdn.pixabay.com/photo/2016/02/06/21/56/bubble-wrap-1183728_1280.jpgbay.chttps://pixnio.com/free-images/food-and-drink/cartons-of-soy-milk.jpgom/photo/2014/09/16/14/13/booklet-448244_1280.jpg',
  'name': '뽁뽁이',
  'explanation': '비닐류로 배출',
  }
]

class PlasticBag extends Component {
  render() {
    const { classes } = this.props;
    return ( 
    <div style={{ textAlign: `center` }}>
      <Navbar/>
      <TableContainer component={Paper} className={classes.tableCon}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell colSpan={4} align='center' style={{
              fontSize: '30px',
              fontWeight: 'bold',
              padding: '30px',
              backgroundColor:'#C4E3CB'
            }}>비닐류</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className='tablebody'>
          <TableRow className='row'>
            <TableCell className={classes.row} width='100px'>번호</TableCell>
            <TableCell className={classes.row}>이미지</TableCell>
            <TableCell className={classes.row}>제품이름</TableCell>
            <TableCell className={classes.row}>분리배출 방법</TableCell>
          </TableRow>
          {customers.map(c => {
          return <Customer key={c.id} id={c.id} image={c.image} name={c.name} explanation={c.explanation}/>
          })}
        </TableBody>
      </Table>
      </TableContainer>
    </div>
    )
  }
}

export default withStyles(styles)(PlasticBag);
