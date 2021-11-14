import "./App.css";
import { PriceCard1 } from "./PriceCard1";
import { PriceCard2 } from "./PriceCard2";
import { PriceCard3 } from "./PriceCard3";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

function App() {
  const mystyle = {
    backgroundColor: "#007bff",
    background: "linear-gradient(to right, #0062E6, #33AEFF)",
    width:'auto',
    minHeight: '104vh',
    display: "flex",
    borderRadius: 0,
    textAlign: "center",
  };

  return (
    <Paper elevation={1} style={mystyle}>
      <Grid container spacing={{ xs: 1, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}>
        
        <Grid item xs={2} sm={4} md={4}>
          <PriceCard1 />
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <PriceCard2 />
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <PriceCard3 />
        </Grid>
       
      </Grid>
      </Paper>
  );
}

export default App;
