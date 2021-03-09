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
  textWeight: 'bold'
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
  'image': 'https://cdn.pixabay.com/photo/2011/04/03/13/31/iron-6046_1280.jpg' ,
  'name': '소형폐가전 (컴퓨터, 전기밥솥, 선풍기, 다리미 등 1m 미만 가전제품)',
  'explanation': '재활용품과 함께 배출. 동주민센터 및 아파트 내 비치된 전용수거함으로 배출'
  },
  {'id': '002',
  'image': 'https://cdn.pixabay.com/photo/2015/08/23/01/57/washing-machine-902359_1280.jpg',
  'name': '대형폐가전 (세탁기, 에어컨, 냉장고, TV 등 1m 이상 가전제품)',
  'explanation': '대형폐가전 무상방문수거 서비스 이용',
  }
]

class Electronics extends Component {
render() {
const { classes } = this.props;
return ( 
<div style={{ textAlign: `center` }}>
  <Navbar/>
  <Subject title='전자제품'></Subject>
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

export default withStyles(styles)(Electronics);
