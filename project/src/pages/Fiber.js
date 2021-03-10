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
  'image': 'https://cdn.pixabay.com/photo/2018/10/28/18/25/used-clothing-3779497_1280.jpg' ,
  'name': '헌옷',
  'explanation': '의류수거함에 배출'
  },
  {'id': '002',
  'image': 'https://cdn.pixabay.com/photo/2016/02/18/14/30/football-1207235_1280.jpg',
  'name': '신발',
  'explanation': '의류수거함에 배출',
  },
  {'id': '003',
  'image': 'https://cdn.pixabay.com/photo/2017/09/08/07/59/bag-2728000_1280.png',
  'name': '가방',
  'explanation': '의류수거함에 배출',
  },
  {'id': '004',
  'image': 'https://cdn.pixabay.com/photo/2016/10/10/19/21/modern-blanket-1729633_1280.jpg',
  'name': '담요',
  'explanation': '의류수거함에 배출',
  },
  {'id': '005',
  'image': 'https://cdn.pixabay.com/photo/2012/12/24/08/39/sheets-72155_1280.jpg',
  'name': '누비이불',
  'explanation': '의류수거함에 배출',
  },
  {'id': '006',
  'image': 'https://cdn.pixabay.com/photo/2017/06/19/10/24/indoor-2418846_1280.jpg',
  'name': '커튼',
  'explanation': '의류수거함에 배출',
  },
  {'id': '007',
  'image': 'https://cdn.pixabay.com/photo/2017/11/10/09/01/carpet-2935773_1280.jpg',
  'name': '카페트',
  'explanation': '의류수거함에 배출',
  },
  {'id': '008',
  'image': 'https://cdn.pixabay.com/photo/2017/02/16/10/51/pillow-2071096_1280.jpg',
  'name': '베개',
  'explanation': '투명 봉투에 담아 재활용품으로 배출',
  },
  {'id': '009',
  'image': 'https://cdn.pixabay.com/photo/2011/06/17/15/55/pillow-8008_1280.jpg',
  'name': '방석',
  'explanation': '투명 봉투에 담아 재활용품으로 배출',
  },
  {'id': '010',
  'image': 'https://cdn.pixabay.com/photo/2020/03/02/11/52/adjustable-inline-skates-4895496_1280.jpg',
  'name': '롤러스케이트',
  'explanation': '투명 봉투에 담아 재활용품으로 배출',
  }
]

class Fiber extends Component {
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
            }}>섬유류</TableCell>
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


export default withStyles(styles)(Fiber);
