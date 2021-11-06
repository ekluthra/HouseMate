import "./houses.css";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../Themes/theme.js";
import NavBar from "../NavBar/NavBar";
import Stack from '@mui/material/Stack';

function Houses() {
  return (
    <div className="house-page house-page--dark">
      <ThemeProvider theme={theme}>
        <NavBar />
        <div className="house-list">
            <h2 className="house-title">Your Houses</h2>
            <Stack spacing={2}>
                <div className="house-element">
                    <img className="house-img" src="https://www.utoronto.ca/sites/default/files/UC--by-Laura.jpg" alt="house_picture"/>
                    <h4>15 King's College Circle</h4>
                    <Button className="house-page__button">Go to house</Button>
                </div>
                <div className="house-element">
                    <img className="house-img" src="https://www.thestar.com/content/dam/thestar/news/gta/2019/09/30/safety-barriers-installed-at-bahen-centre-after-student-death-u-of-t-says/rm_suicide_01.jpg" alt="house_picture"/>
                    <h4>40 St. George Street</h4>
                    <Button className="house-page__button">Go to house</Button>
                </div>
                <div className="house-element">
                    <img className="house-img" src="https://thevarsity.ca/wp-content/uploads/2017/11/COMMENT_Comment_in_Brief-SOFIA_LUDWIGTHE_VARSITY-Trinity_College.jpg" alt="house_picture"/>
                    <h4>6 Hoskin Ave</h4>
                    <Button className="house-page__button">Go to house</Button>
                </div>
                <Button>Add House by house code</Button>
            </Stack>
        </div>
      </ThemeProvider>
    </div>
    
  );
}

export default Houses;