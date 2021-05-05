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
  createData('01 Apr 2021	','Buy Balkrishna Industries (1652-1657)','01-02 Weeks',1572,1814,'Open'),
  createData('01 Apr 2021	','Buy Kesoram Industries (72-74)','01-02 Weeks',66,84,'Open'),
  createData('01 Apr 2021	','Buy ICICI Bank (581-585)','01-02 Weeks',544,649,'Open'),
  createData('01 Apr 2021	','Buy SBI Life Insurance (872-877), Stop Loss @826, Target @964','01-02 Weeks',826,964,'Open'),
    createData('26 Mar 2021','Buy Muthoot Finance (1210-1215) ...exit @1212','01-02 Weeks',1139,1420,'Exit'),
    createData('26 Mar 2021','Buy Hindustan Zinc (270-272) ...exit @282','01-02 Weeks',256,302,'Closed With Profit'),
    createData('23 Mar 2021','Buy Tata Consumer (618-622) ...exit @652','01-02 Weeks',587,690,'Closed With Profit'),
    createData('19 Mar 2021','Buy Avanti Feeds (447-450)','01-02 Weeks',424,500,'Stop Loss Hit'),
    createData('19 Mar 2021','Buy Maruti (6915-6920) ...exit @6990','01-02 Weeks',6569,7700,'Closed With Profit'),
    createData('19 Mar 2021','Buy PGHL (6360-6370)','01 Week',6000,7070,'Stop Loss Hit'),   
    createData('16 Mar 2021','Buy Gland Pharma Ltd. (2530-2535)','01-02 Week',2399,2840,'Stop Loss Hit'),
   createData('16 Mar 2021','Buy Asian Paint (2400-2410) ...exit @2560','01-02 Week',2259,2750,'Closed With Profit'),
   createData('16 Mar 2021','Buy Gillette India (5570-5580) ...exit @5850','01-02 Week',5290,6200,'Closed With Profit'),
    createData('09 Mar 2021	', 'Buy L&T Technology Service Ltd. (2625-2635)...exit @2790','01 Week',2493,2925,'Closed With Profit'),
    createData('09 Mar 2021','Buy Nestle India (16650-16680)...exit @16780','01 Week' ,15817,18514,'Closed With Profit'),
    createData('09 Mar 2021','Buy Zodiac Clothing (109-111)','01-02 Weeks',103,122,'Stop Loss Hit'),
    createData('05 Mar 2021','	Buy MSTC (310-313)' ,'01-02 Weeks',289,357,'Target Hit'),
    createData('05 Mar 2021','Buy NOCIL (182-184) ...exit @180','01 Week',172,206,'Closed with Loss'),
    createData('05 Mar 2021', 'Buy IDBI Bank (35-36)','01-02 Weeks', 31,43,'Target Hit'),
    createData('05 Mar 2021','Buy Hinduja Global Solutions (1165-1170)...exit @1240','01 Week',1104,1300,'Closed With Profit'),
   createData('01 Mar 2021', 'Buy GHCL (215-217)' , '01-02 Weeks' , 204, 240,'Target Hit'),
  createData('01 Mar 2021', 'Buy Wock pharma (496-500) ...exit @489', '01 Week',469, 560,'Closed With Loss'),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function Swing() {
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
      <h1>Swing Trade Calls</h1>
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
