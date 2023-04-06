import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import SendIcon from "@mui/icons-material/Send";
import CancelScheduleSendIcon from "@mui/icons-material/CancelScheduleSend";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from '@mui/material/TextField';

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true);

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          inputProps={{
            "aria-label": "secondary checkbox",
          }}
          checkedIcon={<SendIcon />}
          icon={<CancelScheduleSendIcon />}
        />
      }
      label='happy label'
    />
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TextField 
        variant="filled"
        color="secondary"
        type="email"
        label="The Time"
        placeholder="time"
        />
        <CheckboxExample />
        <ButtonGroup variant="contained" color="primary">
          <Button size="large" color="primary" startIcon={<SendIcon />}>
            Send
          </Button>
          <Button
            size="large"
            color="secondary"
            startIcon={<CancelScheduleSendIcon />}
          >
            Unsend
          </Button>
        </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
