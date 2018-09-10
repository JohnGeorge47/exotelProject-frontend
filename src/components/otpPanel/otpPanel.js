import Button from "@material-ui/core/Button";
import React from "react";
import Input from "@material-ui/core/Input";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import "./otpPanel.css";
import otpPanelApi from "./otpPanel.api.js";
class OtpPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      verified: false,
      otpEntered: "",
      mobileNumber: this.props.mobileNumber,
      postVerificationMessage: ""
    };
  }
  handleChange(e) {
    this.setState({
      otpEntered: e.target.value
    });
  }
  apiCaller() {
    otpPanelApi
      .verifyUser({
        otp: this.state.otpEntered,
        mobilenumber: this.state.mobileNumber
      })
      .then(res => {
        console.log(res);
        if (res.message == "success") {
          this.setState({ postVerificationMessage: "Successfuly verified" });
        } else {
          this.setState({ postVerificationMessage: "OTP is incorrect" });
        }
      });
  }
  componentWillReceiveProps(nextProps) {
    if (this.props != nextProps) {
      this.setState({
        mobileNumber: nextProps.mobileNumber
      });
    }
  }
  render() {
    return (
      <div>
        <h1 className="otpPanel-title">Please enter the OTP</h1>
        <div className="otp-form">
          <Grid container justify="center" alignItems="center">
            <Grid item xs={12}>
              <Input
                id="otp"
                placeholder="4 digit OTP"
                onChange={e => {
                  this.handleChange(e);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <div className="otp-submit">
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
          </Grid>
        </div>
        <h3>{this.state.postVerificationMessage}</h3>
      </div>
    );
  }
}
export default OtpPanel;
