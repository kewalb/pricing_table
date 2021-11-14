import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import CardContent from "@mui/material/CardContent";
import ListItemText from "@mui/material/ListItemText";
import CheckIcon from "@mui/icons-material/Check";
import ListItemIcon from "@mui/material/ListItemIcon";
import Button from "@mui/material/Button";
import CloseIcon from '@mui/icons-material/Close';

export function PriceCard1() {
  const divider = {
    margin: "0.5rem",
  };

  const btn = {
    marginTop: 8,
    width: "100%",
    fontSize: "90%",
    borderRadius: "5rem",
    letterSpacing: ".1rem",
    fontWeight: "bold",
    padding: "1rem",
    opacity: 0.7,
    transition: "all 0.2s",
  };

  return (
    <Card style={{ margin: 20, borderRadius: 30, width: "auto", display: "grid" }} className="card"
      sx={{
        ":hover": {
          marginTop: "-.25rem",
          marginBottom: ".25rem",
          boxShadow: 20, // theme.shadows[20]
        },
      }}
    >
      <CardHeader
        title={<Typography style={{ color: "grey" }}>Free</Typography>}
        subheader={
          <Typography variant="h2">
            $0<sub style={{ fontSize: 25 }}>/Month</sub>
          </Typography>
        }
        style={{ textAlign: "center" }}
      />
      <Divider style={divider} />
      <CardContent>
        <List style={{ margin: 0, padding: 1 }}>
          <ListItem>
            <ListItemIcon style={{ minWidth: 0 }}>
              <CheckIcon sx={{ color: "black", fontSize: 25 }} />
            </ListItemIcon>
            <ListItemText
              style={{ margin: 0 }}
              primary={<Typography>Single User</Typography>}
            />
          </ListItem>

          <ListItem>
            <ListItemIcon style={{ minWidth: 0 }}>
              <CheckIcon sx={{ color: "black", fontSize: 25 }} />
            </ListItemIcon>
            <ListItemText style={{ margin: 0 }} primary="5GB Storage" />
          </ListItem>

          <ListItem>
            <ListItemIcon style={{ minWidth: 0 }}>
              <CheckIcon sx={{ color: "black", fontSize: 25 }} />
            </ListItemIcon>
            <ListItemText
              style={{ margin: 0 }}
              primary="Unlimited Public Projects"
            />
          </ListItem>

          <ListItem>
            <ListItemIcon style={{ minWidth: 0 }}>
              <CheckIcon sx={{ color: "black", fontSize: 25 }} />
            </ListItemIcon>
            <ListItemText style={{ margin: 0 }} primary="Community Access" />
          </ListItem>

          <ListItem disabled>
            <ListItemIcon style={{ minWidth: 0 }}>
              <CloseIcon sx={{ color: "black", fontSize: 25 }} />
            </ListItemIcon>
            <ListItemText
              style={{ margin: 0 }}
              primary="Unlimited Private Projects"
            />
          </ListItem>

          <ListItem disabled> 
            <ListItemIcon style={{ minWidth: 0 }}>
              <CloseIcon sx={{ color: "black", fontSize: 25 }} />
            </ListItemIcon>
            <ListItemText
              style={{ margin: 0 }}
              primary="Dedicated Phone Support"
            />
          </ListItem>

          <ListItem disabled>
            <ListItemIcon style={{ minWidth: 0 }}>
              <CloseIcon sx={{ color: "black", fontSize: 25 }} />
            </ListItemIcon>
            <ListItemText style={{ margin: 0 }} primary="Free Subdomain" />
          </ListItem>

          <ListItem disabled>
            <ListItemIcon style={{ minWidth: 0 }}>
              <CloseIcon sx={{ color: "black", fontSize: 25 }} />
            </ListItemIcon>
            <ListItemText
              style={{ margin: 0 }}
              primary="Monthly Status Reports"
            />
          </ListItem>
        </List>

        <Button variant="contained" style={btn}>
          Button
        </Button>
      </CardContent>
    </Card>
  );
}
