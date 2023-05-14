import "./App.css";
import * as M from "@mui/material";
import * as React from "react";
import q from "./QueueServices";

function App() {
  const [msgType, setMsgType] = React.useState("Info");
  const [msgDetails, setMsgDetails] = React.useState("");

  const handleTypeChange = (event) => {
    setMsgType(event.target.value);
  };
  const handleDetailsChange = (event) => {
    setMsgDetails(event.target.value);
  };
  const send = (event) => {
    q.send(msgType, msgDetails);
  };

  return (
    <div className="App">
      <header className="App-header">
        <M.Stack className="textfield" spacing={2} direction="column">
          <M.FormControl
            sx={{ backgroundColor: "#484848" }}
            variant="filled"
            color="secondary"
            // sx={{ m: 1, minWidth: 120 }}
          >
            <M.InputLabel id="demo-simple-select-filled-label">
              Message Type
            </M.InputLabel>
            <M.Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={msgType}
              onChange={handleTypeChange}
            >
              <M.MenuItem value={"Info"}>Info</M.MenuItem>
              <M.MenuItem value={"Warning"}>Warning</M.MenuItem>
              <M.MenuItem value={"Error"}>Error</M.MenuItem>
            </M.Select>
          </M.FormControl>
          <M.TextField
            id="filled-multiline-static"
            label="Message Details"
            multiline
            rows={4}
            defaultValue={msgDetails}
            onChange={handleDetailsChange}
            variant="filled"
            color="secondary"
            style={{ background: "#484848" }}
          />
        </M.Stack>

        <M.Button onClick={send} variant="contained" color="secondary">
          {" "}
          SEND{" "}
        </M.Button>
      </header>
    </div>
  );
}

export default App;
