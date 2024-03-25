import * as React from "react";
import { Container } from "@mui/material";

import { getUserComponent } from '../../components/Navbar/GetUserComponent';


const regularProfile = ({ userType }) => {
  const UserLoggedComponent = getUserComponent(userType);
  return (
    <Container maxWidth="xl">
      <UserLoggedComponent />
    </Container>
  );
};
export default regularProfile;
