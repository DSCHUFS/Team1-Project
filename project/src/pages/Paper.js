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
  'image': 'https://cdn.pixabay.com/photo/2016/11/23/15/49/bundle-1853667_1280.jpg' ,
  'name': '신문지',
  'explanation': '물기에 젖지 않도록 하고 끈으로 묶거나 박스류에 담아서 배출'
  },
  {'id': '002',
  'image': 'https://cdn.pixabay.com/photo/2014/09/16/14/13/booklet-448244_1280.jpg',
  'name': '책자, 노트, 전단지, 쇼핑백, 달력, 포장지 등',
  'explanation': '비닐코팅된 표지, 스프링 제본된 책자류의 스프링은 가급적 제거 후 종이류로 배출',
  },
  {'id': '003',
  'image': 'https://cdn.pixabay.com/photo/2017/07/08/13/27/box-2484376_1280.png',
  'name': '상자류(종이 박스, 기타 골판지 상자 등)',
  'explanation': '상자에 붙어있는 테이프나 철핀을 제거 후 종이류로 배출',
  },
  {'id': '004',
  'image': 'https://cdn.pixabay.com/photo/2016/05/04/23/02/receipts-1372960_1280.jpg',
  'name': '종이 조각, 각종 영수증, 고지서',
  'explanation': '종이류에 분리수거. 단, 개인정보가 포함되어 있는 영수증과 고지서는 개인정보 식별이 불가능하도록 유의해서 배출',
  },
  {'id': '005',
  'image': 'https://cdn.pixabay.com/photo/2016/08/22/09/26/spring-1611531_1280.jpg',
  'name': '스프링 등(철, 플라스틱) 제본된 책자류',
  'explanation': '스프링 및 비닐 표지는 가급적 제거 후 종이류로 배출',
  }
]

class Papers extends Component {
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
            }}>종이류</TableCell>
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

export default withStyles(styles)(Papers);