import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import FormHelperText from "@material-ui/core/FormHelperText";
import Button from "@material-ui/core/Button";
import homeApis from "./home.api.js";
import OtpPanel from "../otpPanel";
import "./home.css";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      showPassword: false,
      password: "",
      mobileNumber: "",
      otpSent: false
    };
  }
  handleChange(e) {
    this.setState({
      name: e.target.value
    });
  }
  handleChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }
  handleMobileChange(e) {
    this.setState({
      mobileNumber: e.target.value
    });
  }
  handleClickShowPassword() {
    this.setState({ showPassword: !this.state.showPassword });
  }
  handleMouseDownPassword(event) {
    event.preventDefault();
  }
  apiCaller() {
    let data = homeApis
      .SignUpCaller({
        username: this.state.name,
        mobilenumber: this.state.mobileNumber,
        password: this.state.password
      })
      .then(res => {
        if (res.status == 200) {
          this.setState({
            otpSent: true
          });
        }
      });
  }
  render() {
    return (
      <div>
        {this.state.otpSent ? (
          <OtpPanel mobileNumber={this.state.mobileNumber} />
        ) : (
          <div>
            <h1 className="home-title">Sign Up Here</h1>
            <Grid container justify="center" alignItems="center">
              <div className="form-panel">
                <Grid item xs={12}>
                  <Input
                    id="name-simple"
                    placeholder="Name"
                    onChange={e => {
                      this.handleChange(e);
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
                  {" "}
                  <Input
                    id="mobile-number"
                    placeholder="Mobile Number"
                    onChange={e => {
                      this.handleMobileChange(e);
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Input
                    id="adornment-password"
                    placeholder="Password"
                    type={this.state.showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="Toggle password visibility"
                          onClick={() => {
                            this.handleClickShowPassword();
                          }}
                          onMouseDown={() => {
                            this.handleMouseDownPassword(event);
                          }}
                          onChange={() => {
                            this.handleChangePassword(event);
                          }}
                        >
                          {this.state.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <div className="submit-dimensions">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        this.apiCaller();
                      }}
                    >
                      Sign Up
                    </Button>
                  </div>
                </Grid>
              </div>
            </Grid>
          </div>
        )}
      </div>
    );
  }
}

export default Home;
