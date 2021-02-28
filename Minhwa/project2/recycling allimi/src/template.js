import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';
import Paper from '@material-ui/core/Paper';
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
}
});

const customers = [
{
'id': 1,
'image': 'https://placeimg.com/48/48/1',
'name': '신문지',
'ox': 'O',
'explanation': '종이류에 분리수거'
},
{
'id': 2,
'image': 'https://placeimg.com/48/48/2',
'name': '책자, 노트, 전단지, 쇼핑백, 달력, 포장지 등',
'ox': 'O',
'explanation': '종이류에 분리수거',
},
{
'id': 3,
'image': 'https://placeimg.com/48/48/3',
'name': '상자류(종이 박스, 기타 골판지 상자 등)',
'ox': 'O',
'explanation': '종이류에 분리수거',
}
]

class App extends Component {
render() {
const { classes } = this.props;
return (
<Paper className={classes.root}>
<Table className={classes.table}>
<TableHead>
<TableRow>
<TableCell>번호</TableCell>
<TableCell>이미지</TableCell>
<TableCell>제품이름</TableCell>
<TableCell>분리수거 가능여부</TableCell>
<TableCell>비고</TableCell>
</TableRow>
</TableHead>
<TableBody>
{customers.map(c => {
return <Customer key={c.id} id={c.id} image={c.image} name={c.name} ox={c.ox} explanation={c.explanation} />
})}
</TableBody>
</Table>
</Paper>
);
}
}

export default withStyles(styles)(App);
