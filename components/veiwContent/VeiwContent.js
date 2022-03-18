import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import VeiwContent from '../VeiwContent/VeiwContent';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: 'red',
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    {
        tableData: ['Saturday, 12th 2021', 'Saturday, 12th 2021', 'Saturday, 12th 2021', 'Saturday, 12th 2021'],
        title: 'Time',
    },
    {
        tableData: ['11:00 Am to 11:45Am', '11:00 Am to 11:45Am', '11:00 Am to 11:45Am', '11:00 Am to 11:45Am'],
        title: 'Time'
    },
    {
        tableData: ['Bangla', 'English', 'Mathematics', 'Social Science'],
        title: 'Subject Title',
    },
    {
        tableData: ['c34', 'c34', 'c34', 'c34'],
        title: 'Subject Code',
    },

    {
        tableData: ['BELAL', 'BELAL', 'BELAL', 'BELAL'],
        title: 'Writer Name',
    },

    {
        tableData: ['KARIM', 'KARIM', 'KARIM', 'KARIM'],
        title: 'Teacher Name',
    },

    {
        tableData: ['Main', 'Main', 'Main', 'Main'],
        title: 'Campus Name',
    },

    {
        tableData: ['Academic Vcbon', 'Academic Vcbon', 'Academic Vcbon', 'Academic Vcbon'],
        title: 'Buidng Name',
    },

    {
        tableData: ['101', '101', '101', '101'],
        title: 'Room Number',
    },
];

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function VeiwContent() {
    const classes = useStyles();

    return (
        <>
            <TableContainer component={Paper} style={{margin: '5px'}}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead style={{ background: 'red'}}>
                        <TableRow>
                            <StyledTableCell style={{color: 'white'}}>SI NO 1 Topic Name</StyledTableCell>
                            <StyledTableCell style={{color: 'white'}} align="right">1st Test</StyledTableCell>
                            <StyledTableCell style={{color: 'white'}} align="right">2nd Test</StyledTableCell>
                            <StyledTableCell style={{color: 'white'}} align="right">3rd Test</StyledTableCell>
                            <StyledTableCell style={{color: 'white'}} align="right">3th Test</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <StyledTableRow key={index}>
                                <StyledTableCell component="th" scope="row">
                                    {row.title}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.tableData[0]}</StyledTableCell>
                                <StyledTableCell align="right">{row.tableData[1]}</StyledTableCell>
                                <StyledTableCell align="right">{row.tableData[2]}</StyledTableCell>
                                <StyledTableCell align="right">{row.tableData[3]}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}