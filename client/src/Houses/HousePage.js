import "./HousePage.css";
import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../Themes/theme.js";
import NavBar from "../NavBar/NavBar";
import AdminNavBar from "../NavBar/AdminNavBar";
import Stack from "@mui/material/Stack";
import HouseCard from "./HouseCard";
import {houses} from '../Objects/Houses'; //change to database in Phase 2
import NewHouseFormDialog from "./NewHouseForm";
import JoinHouseFormDialog from "./JoinHouseForm";
import { users } from "../Objects/Users";
import { GlobalContext } from "../context/GlobalState";

function displayUserHouses(user) {
  const houseCardList = [];
  for (let i = 0; i < users[user].houses.length; i++) {
    const houseInd = users[user].houses[i];
    houseCardList.push(
      <HouseCard
        address={houses[houseInd].address}
        imagelink={houses[houseInd].imagelink}
        id={houseInd}
      />
    );
  }
  return houseCardList;
}

function HousePage({ user }) {
  const [houseMember, addMemberToHouse] = React.useState();
  const [houseCreate, createHouse] = React.useState();
  const { currUser } = React.useContext(GlobalContext);
  const { currHouse } = React.useContext(GlobalContext);

  if (currHouse == null && currUser != "admin") {
    return (
      <div className="house-page house-page--dark">
        <ThemeProvider theme={theme}>
          <div className="house-list">
            <Stack className="house-stack" spacing={2}>
              <JoinHouseFormDialog setHouseMember={addMemberToHouse} />
              <NewHouseFormDialog setHouseMember={createHouse}/>
              <h2 className="house-title">Your Houses</h2>
              {displayUserHouses(currUser)}
            </Stack>
          </div>
        </ThemeProvider>
      </div>
    );
  }

  return (
    <div className="house-page house-page--dark">
      <ThemeProvider theme={theme}>
        {currUser === "admin" ? <AdminNavBar /> : <NavBar />}

        <div className="house-list">
          <Stack className="house-stack" spacing={2}>
            <JoinHouseFormDialog setHouseMember={addMemberToHouse} />
            <NewHouseFormDialog setHouseMember={createHouse}/>
            <h2 className="house-title">Your Houses</h2>
            {displayUserHouses(currUser)}
          </Stack>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default HousePage;