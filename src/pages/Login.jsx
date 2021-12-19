import {
  Alert,
  Button,
  CircularProgress,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AppButton from "../components/AppButton";
import AppTextbox from "../components/AppTextbox";
import loginAsync from "../functions/loginAsync";
import authEnums from "../enums/authEnums";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [formError, setFormError] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth);

  const redirectUserWhenLogin = () => {
    if (authStatus.accessToken) {
      navigate("/products");
    }
  };

  useEffect(redirectUserWhenLogin, [redirectUserWhenLogin]);

  const handleChange = (event) => {
    const target = event.target;
    setFormData((preState) => ({ ...preState, [target.name]: target.value }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const { data, error } = await loginAsync(formData);
    if(error){
      setFormError(error);
    }else{
      dispatch({type: authEnums.LOGIN_SUCCESS, payload: data});
    }
    setLoading(false);
  };

  return (
    <Grid container justifyContent="center" sx={{ marginTop: "3rem" }}>
      <Grid item md={8}>
        <Paper
          component="form"
          onSubmit={handleSubmit}
          sx={{ padding: "2rem 3rem" }}
        >
          <Typography variant="h5" color="primary">
            Login
          </Typography>
          <br />
          {formError && (
            <Alert severity="error" sx={{ marginBottom: "1rem" }}>
              {formError}
            </Alert>
          )}
          <AppTextbox
            label="UserName"
            id="username"
            onChange={handleChange}
            fullWidth
          />
          <AppTextbox
            label="Password"
            id="password"
            type="password"
            onChange={handleChange}
            fullWidth
          />
          <hr />
          <div
            style={{ display: "flex", flex: 1, flexDirection: "row-reverse" }}
          >
            <AppButton label="Login" type="submit" loading={loading} />
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;
