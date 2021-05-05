import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles,useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 18,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}))

function createData(date, title, time, sl, target,status) {
  return { date, title, time,sl,target, status };
}

function TablePaginationActions(props) {
  const classes1 = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes1.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

  TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
  };

const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
  },
});

const rows = [
    createData('1 Apr 2021','Buy GNFC @304','01-02 Weeks',287,330,'Pending'),
    createData('1 Apr 2021','Buy Alkem Laboratories @2740','01-02 Weeks',2660,2850,'Pending'),
    createData('1 Apr 2021','Buy CEAT @1555','01-02 Weeks',1439,1720,'Pending'),
    createData('26 Mar 2021','Buy   BSE @542 ','01 Week',514,580,'Target Achieved'),
    createData('22 Mar 2021','Buy Petronet Lng @225.50 ...exit @228.50	','01 Week',219.75,234,'Closed With Profit'),
    createData('19 Mar 2021','Buy Kellton Tech @68','01-02 Weeks',61,78,'Pending'),
    createData('19 Mar 2021','Buy Astrazeneca Pharma @3160','01 Week',3004,3400,'Target Achieved'),
    createData('19 Mar 2021','Buy Caplin Point @417','01-02 Weeks',399,445,'Target Achieved'),   
    createData('16 Mar 2021','Buy Gokaldas Exports ltd @82.25','01-02 Week',77.75,89,'Target Achieved'),
   createData('16 Mar 2021','Buy Oracle Financial @3190','01-02 Week',3090,3370,'Target Achieved'),
   createData('16 Mar 2021','Buy Malu Paper Mills @28.75','01-02 Week',26.95,31.50,'Stop Loss'),
    createData('09 Mar 2021','Buy Airtel @515, tgt @...exit @52','01 Week' ,494,545,'Closed With Profit'),
    createData('09 Mar 2021','Buy Hindustan Unilever @2170 ','01 Week',2129,2245,'Target Achieved'),
    createData('05 Mar 2021', 'Buy Prime Securities @47.50 ...exit @41','01 Week', 39,59.50,'Closed With Loss'),
    createData('05 Mar 2021','Buy srf @5565','01 Week',5200,6000,'Stop Loss'),
   createData('01 Mar 2021', 'Buy Bharat Dynamics @357' , '01-02 Weeks' , 337, 389,'Target Achieved'),
  createData('01 Mar 2021', 'Buy Indigo @ 1625', '01-02 Week',1564, 1740,'Target Achieved'),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function Short() {
  const classes = useStyles();
  // const classes2 = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      <h1>Short-term Positional Calls</h1>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Date </StyledTableCell>
            <StyledTableCell align="center">Title</StyledTableCell>
            <StyledTableCell align="center">Time</StyledTableCell>
            <StyledTableCell align="center">Stop Loss</StyledTableCell>
            <StyledTableCell align="center">Target</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <StyledTableRow key={row.title}>
              <StyledTableCell align ="center" component="th" scope="row">
                {row.date}
              </StyledTableCell>
              <StyledTableCell align="center">{row.title}</StyledTableCell>
              <StyledTableCell align="center">{row.time}</StyledTableCell>
              <StyledTableCell align="center">{row.sl}</StyledTableCell>
              <StyledTableCell align="center">{row.target}</StyledTableCell>
              <StyledTableCell align="center">{row.status}</StyledTableCell>
            </StyledTableRow>
          ))}
          {emptyRows > 0 && (
            <StyledTableRow style={{ height: 53 * emptyRows }}>
              <StyledTableCell colSpan={6} />
            </StyledTableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 15, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
    </div>
  );
}
