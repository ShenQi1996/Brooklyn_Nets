import React, { useState } from "react";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import "./Row.css";
import { CardMedia, Table, TableBody, TableHead } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Row = props => {
  const { ele } = props;
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="ele" align="center">
          <Avatar src={ele.Picture} align="center" />
        </TableCell>
        <TableCell component="th" scope="ele" align="center">
          {ele.FirstName} {ele.LastName}
        </TableCell>
        <TableCell component="th" scope="ele" align="center">
          {ele.Pos}
        </TableCell>
        <TableCell component="th" scope="ele" align="center">
          {ele.Num}
        </TableCell>
        <TableCell component="th" scope="ele" align="center">
          {ele.Weight}
        </TableCell>
        <TableCell component="th" scope="ele" align="center">
          {ele.Height}
        </TableCell>
        <TableCell component="th" scope="ele" align="center">
          {ele.Years_Pro}
        </TableCell>
        <TableCell component="th" scope="ele" align="center">
          {ele.Prior_to_NBA}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={9}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <div className="row_Collaps">
              <Card sx={{ maxWidth: 400, maxHeight: 400 }}>
                <CardMedia
                  component="img"
                  image={ele.Picture}
                  alt={ele.FirstName}
                />
                <div className="row_Collapse_h">
                  <h2>
                    {ele.FirstName},{ele.LastName}
                  </h2>
                  <h1>{ele.Num}</h1>
                </div>
              </Card>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{ fontWeight: "bolder" }}
                      align="center"
                    ></TableCell>
                    <TableCell sx={{ fontWeight: "bolder" }} align="center">
                      GP
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bolder" }} align="center">
                      MIN
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bolder" }} align="center">
                      FG%/ FTA
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bolder" }} align="center">
                      3P%/ TPA
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bolder" }} align="center">
                      FT%/ FTA
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bolder" }} align="center">
                      REB
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bolder" }} align="center">
                      AST
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bolder" }} align="center">
                      BLK
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bolder" }} align="center">
                      STL
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bolder" }} align="center">
                      PF
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bolder" }} align="center">
                      TO
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bolder" }} align="center">
                      PTS
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell
                      sx={{ fontWeight: "bolder" }}
                      component="th"
                      scope="row"
                    >
                      Avg
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {ele.Avg.gp}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {ele.Avg.min}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {ele.Avg.fgp}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {ele.Avg.tpp}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {ele.Avg.ftp}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {ele.Avg.reb}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {ele.Avg.ast}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {ele.Avg.blk}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {ele.Avg.stl}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {ele.Avg.pf}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {ele.Avg.tov}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {ele.Avg.pts}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      sx={{ fontWeight: "bolder" }}
                      component="th"
                      scope="row"
                    >
                      Tot
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {ele.Tot.gp}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {ele.Tot.min}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {ele.Tot.fga}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {ele.Tot.tpa}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {ele.Tot.fta}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {ele.Tot.reb}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {ele.Tot.ast}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {ele.Tot.blk}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {ele.Tot.stl}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {ele.Tot.pf}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {ele.Tot.tov}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {ele.Tot.pts}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

export default Row;
