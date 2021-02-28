import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
  width: "100%",
  marginTop: theme.spacing.unit * 3,
  overflowX: "auto"
  },
  table: {
  minWidth: 1080
  },
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
  
  class Logo extends Component {
    render () {
      return(
        <header>
          <h1 className="logo">Recycling Allimi</h1>
        </header>
      );
    }
  }

const customers = [
{'id': '1',
'image': 'https://cdn.pixabay.com/photo/2016/11/23/15/49/bundle-1853667_1280.jpg' ,
'name': '신문지',
'explanation': '종이류에 분리수거'
},
{'id': '2',
'image': 'https://cdn.pixabay.com/photo/2014/09/16/14/13/booklet-448244_1280.jpg',
'name': '책자, 노트, 전단지, 쇼핑백, 달력, 포장지 등',
'explanation': '종이류에 분리수거',
},
{'id': '3',
'image': 'https://cdn.pixabay.com/photo/2017/07/08/13/27/box-2484376_1280.png',
'name': '상자류(종이 박스, 기타 골판지 상자 등)',
'explanation': '종이류에 분리수거',
},
{'id': '4',
'image': 'https://cdn.pixabay.com/photo/2016/05/04/23/02/receipts-1372960_1280.jpg',
'name': '종이 조각, 각종 영수증, 고지서',
'explanation': '종이류에 분리수거. 단, 개인정보가 포함되어 있는 영수증과 고지서는 개인정보 식별이 불가능하도록 유의해서 배출',
},
{'id': '',
'image': 'https://cdn.pixabay.com/photo/2016/08/22/09/26/spring-1611531_1280.jpg',
'name': '스프링 등(철, 플라스틱) 제본된 책자류',
'explanation': '스프링 및 비닐 표지는 가급적 제거 후 종이류로 배출',
}
]

class App extends Component {
render() {
const { classes } = this.props;
return ( 
<div>
  <Logo></Logo>
  <Subject title='종이류'></Subject>
    <Table>
        <TableHead>
            <TableRow>
                <TableCell>번호</TableCell>
                <TableCell>이미지</TableCell>
                <TableCell>제품이름</TableCell>
                <TableCell>설명</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
        {customers.map(c => {
        return <Customer key={c.id} id={c.id} image={c.image} name={c.name} explanation={c.explanation} />
        })}
        </TableBody>
    </Table>
</div>
        );
    }
}

export default withStyles(styles)(App);
