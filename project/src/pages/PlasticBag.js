import React, { Component } from 'react';
import Customer from '../components/Customer'
import '../css/Detail.css';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import Navbar from '../components/Navbar'

const styles = theme => ({
  root: {
  width: "100%",
  marginTop: theme.spacing.unit * 3,
  overflowX: "auto"
  },
  table: {
  minWidth: 1080
  },
  row: {
  //fontFamily: 'Noto Sans KR',
  fontSize: '20px',
  backgroundColor: '#D7FBE8',
  //height: '1rem',
  textAlign: 'left',
  fontWeight: 'bold'
  },
  tablebody: {
  fontSize: '1rem',
  textAlign: 'center',
  }
  });

class Subject extends Component {
    render () {
      return(
        <header>
          <h1 className="titletext">{this.props.title}</h1>
        </header>
      );
    }
  }

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
  <Subject title='비닐류'></Subject>
    <Table className='table'>
        <TableHead>
            <TableRow className='row'>
                <TableCell className={classes.row} width='100px'>번호</TableCell>
                <TableCell className={classes.row}>이미지</TableCell>
                <TableCell className={classes.row}>제품이름</TableCell>
                <TableCell className={classes.row}>설명</TableCell>
            </TableRow>
        </TableHead>
        <TableBody className='tablebody'>
        {customers.map(c => {
        return <Customer key={c.id} id={c.id} image={c.image} name={c.name} explanation={c.explanation} className={classes.tablebody}/>
        })}
        </TableBody>
    </Table>
</div>
        );
    }
}

export default withStyles(styles)(PlasticBag);
