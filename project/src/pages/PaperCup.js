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
  'image': 'https://cdn.pixabay.com/photo/2017/05/29/16/30/coffee-2354130_1280.jpg' ,
  'name': '종이컵',
  'explanation': '내용물을 비운 뒤 일반 종이류와 혼합되지 않게 구분하여 배출. 단, 담배꽁초, 음식물 등 이물질이 있을 경우 일반 종량제 봉투로 배출하고 종이컵 분리배출함이 없는 경우 종이팩 분리배출함에 함께 배출'
  },
  {'id': '002',
  'image': 'https://cdn.pixabay.chttps://pixnio.com/free-images/food-and-drink/cartons-of-soy-milk.jpgom/photo/2014/09/16/14/13/booklet-448244_1280.jpg',
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
  <Subject title='종이컵, 종이팩'></Subject>
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

export default withStyles(styles)(PaperCup);
