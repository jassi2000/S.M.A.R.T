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

function createData(date,type, title, timecall,timehit, sl, target,status,result) {
  return { date, type,title, timecall,timehit,sl,target, status,result };
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

// const useStyles2 = makeStyles({
//   table: {
//     minWidth: 500,
//   },
// });

const rows = [
  createData('12 Apr 2021','BUY','Buy Tata Steel @879','11:02 A.M.','11:24 A.M.',874.95,884,'Call Closed','Stop Loss'),
  createData('9 Apr 2021','SELL','Sell Grasim @1443'  ,'02:30 P.M.','02:40 P.M.',1450.50,1435,'Call Closed','Target Achieved'),
  createData('9 Apr 2021','SELL','Sell Cipla @877.40','01:18 P.M.','01:25 P.M.',880.05,874,'Call Closed','Target Achieved'),
  createData('9 Apr 2021','SELL','Sell Tech Mahindra @1024 ','10:43 A.M.','11:15 A.M.',1029.50,1018,'Call Closed','Stop Loss'),
  createData('8 Apr 2021','SELL','Sell Tech Mahindra ...exit @1026.50  ','02:31 P.M.','03:15 P.M.',1034.50,1020,'Call Closed','Closed With Profit'),
  createData('1 Apr 2021','SELL','Sell Larsen and Turbo @1443 ...exit @1443','01:42 P.M.','03:05 P.M.',1450.50,1435,'Call Closed','Break Even'),
    createData('1 Apr 2021','SELL','Sell HCL Tech @1004.50 ...exit @1001.60','12:20 P.M.','1:21 P.M.',1010.05,997,'Call Closed','Closed With Profit'),
    createData('1 Apr 2021','SELL','Sell Grasim @1452.70','10:27 A.M.','10:57 A.M.',1458.05,1446,'Call Closed','Target Achieved'),
    createData('31 Mar 2021','SELL','Sell INFY @1371.50','2:24 P.M.','2:32 P.M.',1377.05,1365,'Call Closed','Target Achieved'),
    createData('31 Mar 2021','BUY','Buy Larsen & Toubro @1423','12:02 P.M.','12:31 P.M.',1419.95,1428,'Call Closed','Target Achieved'),
    createData('31 Mar 2021','BUY','Buy Bandhan Bank @339.45 ...exit @340.40','11:40 A.M.','2:59 P.M.',335.95,343.50,'Call Closed','Closed With Profit'),
    createData('30 Mar 2021','SELL','Sell Sun Pharma @590 ...exit @592','12:42 P.M.','2:16 P.M.',594.05,585,'Call Closed','Closed With Loss'),
    createData('30 Mar 2021','BUY','Buy IndusInd Bank @964.80 ...exit @966','11:27 A.M.','12:02 P.M.',959.95,970,'Call Closed','Closed With Profit'),
    createData('26 Mar 2021','SELL','Sell Axis Bank @698.45','1:15 P.M.','1:32 P.M.',702.05,694,'Call Closed','Stop Loss'),
    createData('26 Mar 2021','BUY','Buy  Tech Mahindra @982.55 ...exit @983.25','10:25 A.M.','11:15 A.M.',976.95,989,'Call Closed','Closed With Profit'),
    createData('25 Mar 2021','BUY','Buy Wipro @399.80','1:16 P.M.','1:42 P.M.',397.45,403,'Call Closed','Target Achieved'),
    createData('25 Mar 2021','SELL','Sell Havells @1023.45','12:15 P.M.','1:38 P.M.',1030.05,1016,'Call Closed','Stop Loss'),
    createData('24 Mar 2021','BUY','Buy Tata Steel @710.50','11:37 A.M.','12:27 P.M.',705.95,716,'Call Closed','Target Achieved'),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function Intraday() {
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
      <h1>Intraday Calls</h1>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Date </StyledTableCell>
            <StyledTableCell align="center"> Type </StyledTableCell>
            <StyledTableCell align="center">Title</StyledTableCell>
            <StyledTableCell align="center"> Call Posted Time</StyledTableCell>
            <StyledTableCell align="center"> Call Hit Time</StyledTableCell>
            <StyledTableCell align="center">Stop Loss</StyledTableCell>
            <StyledTableCell align="center">Target</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
            <StyledTableCell align="center">Result</StyledTableCell>
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
              <StyledTableCell align="center">{row.type}</StyledTableCell>
              <StyledTableCell align="center">{row.title}</StyledTableCell>
              <StyledTableCell align="center">{row.timecall}</StyledTableCell>
              <StyledTableCell align="center">{row.timehit}</StyledTableCell>
              <StyledTableCell align="center">{row.sl}</StyledTableCell>
              <StyledTableCell align="center">{row.target}</StyledTableCell>
              <StyledTableCell align="center">{row.status}</StyledTableCell>
              <StyledTableCell align="center">{row.result}</StyledTableCell>
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
