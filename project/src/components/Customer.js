import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    tableCell1: {
        fontSize: '15px',
        textAlign: 'center',
    },
    tableCell2: {
        fontSize: '15px',
        textAlign: 'left',
    }
})

class Customer extends React.Component {
    render() {
        const { classes } = this.props;
        return (
        <TableRow>
            <TableCell className={classes.tableCell1}>{this.props.id}</TableCell>
            <TableCell className={classes.tableCell1}><img src={this.props.image} alt="profile" width='250px' height='160px'/></TableCell>
            <TableCell className={classes.tableCell1}>{this.props.name}</TableCell>
            <TableCell className={classes.tableCell2}>{this.props.explanation}</TableCell>
        </TableRow>
        )
    }
}

export default withStyles(styles)(Customer);