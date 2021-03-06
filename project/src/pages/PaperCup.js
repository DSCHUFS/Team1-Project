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
  'image': 'https://cdn.pixabay.com/photo/2017/05/29/16/30/coffee-2354130_1280.jpg' ,
  'name': '종이컵',
  'explanation': '내용물을 비운 뒤 일반 종이류와 혼합되지 않게 구분하여 배출. 단, 담배꽁초, 음식물 등 이물질이 있을 경우 일반 종량제 봉투로 배출하고 종이컵 분리배출함이 없는 경우 종이팩 분리배출함에 함께 배출'
  },
  {'id': '002',
  'image': 'https://cdn.pixabay.com/photo/2014/12/21/23/37/egg-carton-575692_1280.png',
  'name': '종이팩',
  'explanation': '내용물을 비운 뒤 가급적 물로 헹군 후 압착하여 배출. 단, 종이팩 분리배출함이 없는 경우 다른 재활용품과 함께 배출',
  }
]

class PaperCup extends Component {
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
            }}>종이컵/종이팩</TableCell>
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

export default withStyles(styles)(PaperCup);
