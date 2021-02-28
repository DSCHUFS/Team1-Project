import React, { Component } from 'react';
import Customer from './components/Customer'
import './Detail.css';
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
  row: {
  //fontFamily: 'Noto Sans KR',
  fontSize: '20px',
  backgroundColor: '#D7FBE8',
  //height: '1rem',
  textAlign: 'left'
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
{'id': '001',
'image': 'https://cdn.pixabay.com/photo/2014/09/26/19/51/drink-462776_1280.jpg' ,
'name': '철캔, 알루미늄캔',
'explanation': '캔류로 배출. 겉 또는 속의 플라스틱 뚜껑 등 제거 후 내용물을 비우고 배출(담배꽁초 등 이물질을 넣지 말아야함)'
},
{'id': '002',
'image': 'https://cdn.pixabay.com/photo/2018/04/25/13/52/spray-3349588_1280.jpg',
'name': '기타 캔류(부탄가스 용기, 살충제 용기 등)',
'explanation': '캔류로 배출. 구멍을 뚫어 남은 가스를 비운 후 배출',
},
{'id': '003',
'image': 'https://cdn.pixabay.com/photo/2016/07/08/11/55/iron-1504139_1280.jpg',
'name': '고철(공구류, 철사, 못, 전선, 알루미늄, 스텐 등)',
'explanation': '투명 비닐봉투에 넣어 고철류로 배출.',
},
{'id': '004',
'image': 'https://cdn.pixabay.com/photo/2014/01/21/19/33/umbrella-249346_1280.png',
'name': '우산',
'explanation': '가급적 재질별로 분리해서 철은 고철로 나머지는 일반 종량제 봉투에 넣어 배출. 재질별로 분리가 어려운 경우는 고철류로 배출',
}
]

class Can extends Component {
render() {
const { classes } = this.props;
return ( 
<div>
  <Logo></Logo>
  <Subject title='캔류'></Subject>
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

export default withStyles(styles)(Can);
