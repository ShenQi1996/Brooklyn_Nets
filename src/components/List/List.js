import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Row from "./Row/Row";
import "./List.css";
import { Container, Paper } from "@mui/material";

function createData(
  Picture,
  FirstName,
  LastName,
  Prior_to_NBA,
  Pos,
  Weight,
  Years_Pro,
  Num,
  Height,
  Avg,
  Tot
) {
  return {
    Picture: `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${Picture}.png`,
    FirstName,
    LastName,
    Prior_to_NBA,
    Pos,
    Weight,
    Years_Pro,
    Num,
    Height,
    Avg,
    Tot,
  };
}

const List = () => {
  const [Team, setTeam] = useState([]);
  const [Stats, setStats] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://data.nba.com/data/5s/v2015/json/mobile_teams/nba/2021/teams/nets_roster.json"
      )
      .then(res => {
        setTeam(res.data.t.pl);
      })
      .catch(err => {
        console.log("API went wrong" + err);
      });
    axios
      .get(
        "https://data.nba.com/data/v2015/json/mobile_teams/nba/2021/teams/nets/player_averages_02.json"
      )
      .then(res => {
        setStats(res.data.tpsts.pl);
      })
      .catch(err => {
        console.log("API for stats went wrong" + err);
      });
  }, []);

  let info = [];
  if (Team.length !== 0 && Stats.length !== 0) {
    for (let i = 0; i < Team.length; i++) {
      info.push(
        createData(
          Team[i].pid,
          Team[i].fn,
          Team[i].ln,
          Team[i].hcc,
          Team[i].pos,
          Team[i].wt,
          Team[i].y,
          Team[i].num,
          Team[i].ht,
          Stats[i].avg,
          Stats[i].tot
        )
      );
    }
  } else {
    <div>
      <h1>loading.....</h1>
    </div>;
  }

  return (
    <Container className="list_container">
      {Team && Stats ? (
        <div className="list_container_div">
          <TableContainer
            component={Paper}
            p="20%"
            className="list_Table_container"
          >
            <Table aria-label="collapsible table">
              <TableHead>
                <TableRow>
                  <TableCell />
                  <TableCell sx={{ fontWeight: "bolder" }} align="left">
                    Picture
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bolder" }} align="center">
                    Name
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bolder" }} align="center">
                    Pos
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bolder" }} align="center">
                    Num
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bolder" }} align="center">
                    Weight
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bolder" }} align="center">
                    Height
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bolder" }} align="center">
                    Years Pro
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bolder" }} align="center">
                    Prior to NBA
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {info.map(ele => (
                  <Row className="list_Row" key={ele.LastName} ele={ele} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div className="footer">
            <p>Copyright © 2021 by Sam Qi</p>
          </div>
        </div>
      ) : (
        "loading..."
      )}
    </Container>
  );
};

export default List;
