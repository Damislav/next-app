import { List, ListItem, TextField, Typography } from "@material-ui/core";
import Layout from "../components/Layout";

const Login = () => {
  return (
    <Layout title="Login">
      <form>
        <Typography variant="h1" component="h1">
          Login
        </Typography>
        <List>
          <ListItem>
            <TextField
              variant="outlined"
              fullWidth
              id="email"
              label="email"
              inputProps={{ type: "email" }}
            ></TextField>
          </ListItem>{" "}
          <ListItem>
            <TextField
              variant="outlined"
              fullWidth
              id="password"
              label="password"
              inputProps={{ type: "password" }}
            ></TextField>
          </ListItem>
        </List>
      </form>
    </Layout>
  );
};

export default Login;
