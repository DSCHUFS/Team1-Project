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
'image': 'https://cdn.pixabay.com/photo/2019/06/04/13/51/bottles-4251473_1280.jpg' ,
'name': '페트병, 플라스틱용기류',
'explanation': '플라스틱류로 배출'
},
{'id': '002',
'image': 'https://cdn.pixabay.com/photo/2018/12/05/13/44/balls-3857761_1280.jpg',
'name': '폐스티로폼',
'explanation': '플라스틱류로 배출'
},
{'id': '003',
'image': 'https://cdn.pixabay.com/photo/2016/04/21/23/27/discs-1344774_1280.jpg',
'name': 'CD',
'explanation': '플라스틱류로 배출',
},
{'id': '004',
'image': 'https://cdn.pixabay.com/photo/2018/04/03/21/21/balls-3288122_1280.jpg',
'name': '유아용 볼풀공',
'explanation': '플라스틱류로 배출',
},
{'id': '005',
'image': 'https://cdn.pixabay.com/photo/2013/11/11/11/18/toys-208711_1280.jpg',
'name': '완구류',
'explanation': '재질별로 분리 후 재활용품으로 배출',
},
{'id': '006',
'image': 'https://cdn.pixabay.com/photo/2015/04/06/21/34/awl-710096_1280.jpg',
'name': '송곳',
'explanation': '재질별로 분리할 수 없기 때문에 고철류로 배출',
},
{'id': '007',
'image': 'https://c.pxhere.com/photos/4a/39/cords_packthread_strings_colors_rope_fiber_twine-1247056.jpg!d',
'name': '노끈',
'explanation': '딱딱한 노끈은 플라스틱, 부드러운 노끈은 비닐류로 배출',
},
{'id': '008',
'image': 'https://cdn.pixabay.com/photo/2018/04/05/20/18/styrofoam-3294019_1280.png',
'name': '부서진 스티로폼 조각',
'explanation': '플라스틱류로 배출',
},
{'id': '009',
'image': 'https://cdn.pixabay.com/photo/2018/04/18/18/20/packing-3331165_1280.png',
'name': '1회용 그릇',
'explanation': '재질별로 분리 후 재활용품으로 배출',
}
]

class Plastic extends Component {
render() {
const { classes } = this.props;
return ( 
<div>
  <Logo></Logo>
  <Subject title='플라스틱'></Subject>
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

export default withStyles(styles)(Plastic);
