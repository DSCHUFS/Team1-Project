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
'image': 'https://cdn.pixabay.com/photo/2018/01/05/00/43/bottle-3061889_1280.jpg' ,
'name': '음료수 병, 기타 병류',
'explanation': '플라스틱이나 알루미늄 뚜껑 제거 후 내용물을 깨끗이 비운 후 유리병류에 배출. 맥주병, 소주병, 청량음료병은 할인점, 소매점 등에 되돌려주고 빈 용기 보증금을 환불받을 수 있음'
}
]

class Glass extends Component {
render() {
const { classes } = this.props;
return ( 
<div style={{ textAlign: `center` }}>
  <Navbar/>
  <Subject title='유리병'></Subject>
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

export default withStyles(styles)(Glass);
