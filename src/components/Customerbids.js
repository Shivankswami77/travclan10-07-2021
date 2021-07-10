import React, { useEffect, useState, createContext } from "react";
import axios from "axios";
import PeopleOutlineTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoTone";
import PageHeader from "./PageHeader";
import PersonIcon from "@material-ui/icons/Person";
import { Link } from "react-router-dom";
import { createBrowserHistory as history } from "history";

import {
  Paper,
  makeStyles,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";

import { Search } from "@material-ui/icons";
import useTable from "./useTable";
const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  searchInput: {
    width: "75%",
  },
}));

const headCells = [
  { id: "firstName", label: "First Name" },
  { id: "lastName", label: "Last Name" },

  { id: "email", label: "Email Address" },
  { id: "mobile", label: "Phone Number" },
  { id: "bids", label: "Customer Bids" },

  { id: "userDetails", label: "User Image" },
];
const Customerbids = () => {
  const classes = useStyles();
  const data = [
    {
      id: "2",
      carTitle: "bentle",
      amount: 10000,
      created: "1509807708071",
    },
    {
      id: "3",
      carTitle: "Lamborgini",
      amount: 20000,
      created: "150980770071",
    },
    {
      id: "4",
      carTitle: "Ferrari",
      amount: 30000,
      created: "1509807708071",
    },
    {
      id: "5",
      carTitle: "BMW",
      amount: 40000,
      created: "1509807708071",
    },
    {
      id: "1510053106948",
      amount: 2000,
      carTitle: "Ford",
      created: "1510053106948",
    },
    {
      id: "1510053231441",
      amount: 1000,
      carTitle: "porsche",
      created: "1510053231441",
    },
    {
      id: "1510053232256",
      amount: 3000,
      carTitle: "BMW",
      created: "1510053232256",
    },
  ];

  const [cusData, setCusData] = useState([]);
  const [records, setRecords] = useState([]);
  const [bidData, setBidData] = useState([]);

  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () =>
    axios
      .get("https://intense-tor-76305.herokuapp.com/merchants")
      .then(function (response) {
        // handle success
        console.log(response, "response");

        // const products = response.data.amount[0].sort(
        //   (a, b) => b.amount - a.amount
        // );
        // console.log(products, "fdfdfdf");
        setRecords(response.data);
      });
  for (let i = 0; i < records.length; i++) {
    console.log(records[i].bids, "hmhmhm");
    for (let j = 0; j < records[i].bids.length; j++) {
      const sorted = records[i].bids[j].amount;
      console.log(records[i].bids, "sorted");
      const srt = records[i].bids.filter((bid) => bid);
      console.log(srt, "srt");
    }
  }
  // const data2 = async () => {
  //   const data = await fetch(
  //     "https://intense-tor-76305.herokuapp.com/merchants"
  //   );
  //   const items = await data.json();
  console.log(records, "items");
  // };
  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTable(records, headCells, filterFn);
  const passData = (item) => {
    setCusData(item);
    // localStorage.setItem(item.id, "bids");
    // window.sessionStorage.setItem(JSON.stringify(item.avatarUrl, "url");

    console.log(item, "passData");
  };
  return (
    <>
      <PageHeader
        title="Customers List"
        subTitle="TravClan Assignment"
        icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        <TblContainer>
          <TblHead />

          <TableBody>
            {recordsAfterPagingAndSorting().map((item) => (
              <>
                {/* {data.map((bid) => (
                  <> */}
                {console.log(item.bids[0], "amount")}
                <TableRow key={item.id}>
                  <TableCell>{item.firstname}</TableCell>
                  <TableCell>{item.lastname}</TableCell>
                  <TableCell>{item.email}</TableCell>

                  <TableCell>{item.phone}</TableCell>
                  <TableCell>{item.bids[0].amount}</TableCell>
                  {/* <TableCell>{item.bids[0].amount}</TableCell> */}

                  <TableCell>
                    {
                      <img
                        style={{ height: 50, width: 50, borderRadius: 200 }}
                        src={item.avatarUrl}
                        alt=""
                      />
                    }
                  </TableCell>
                </TableRow>
                {/* </>
                ))} */}
              </>
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination />
      </Paper>
    </>
  );
};

export default Customerbids;
