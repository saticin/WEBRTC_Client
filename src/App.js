import React from "react";
import { Typography, AppBar } from "@mui/material";
import Option from "./components/Option";
import Notifications from "./components/Notifications";
import VideoPlayer from "./components/VideoPlayer";
 
const App = () => {
  return (
    <div>
      <AppBar position="static" color="inherit"   >
        <Typography variant="h4" align="center">
          Video Chat
        </Typography>
      </AppBar>
      
      <VideoPlayer />
      <Option>
        <Notifications />
      </Option>
    </div>
  );
};

export default App;
