import React from "react";

import { Box} from "@mui/material";
import ResponseBar from "./ResponseBar";
import UserCardContainer from "./tableContainer/UserCardContainer";



const ResponseContainer = () => {
  return (
   
    <Box
    sx={{
      display: "flex",
      flexDirection: "row",
      gap: "39px",
      marginTop: "20px",
        padding: "60px",
    }}
  >
    <div>
      <ResponseBar/>
    </div>
    <div>
      <UserCardContainer />
    </div>
  </Box>
  )
}

export default ResponseContainer