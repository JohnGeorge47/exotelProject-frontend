import Button from "@material-ui/core/Button";
import React from "react";
import Input from "@material-ui/core/Input";
import Typography from "@material-ui/core/Typography";
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
        <div className="otpPanel-title">
          <Typography variant="display1" gutterBottom>
            Please enter the OTP
          </Typography>
        </div>
        <div className="otp-form">
          <div className="verify-input">
            <Input
              id="otp"
              placeholder="4 digit OTP"
              onChange={e => {
                this.handleChange(e);
              }}
            />
          </div>
          <div className="otp-submit">
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                this.apiCaller();
              }}
            >
              Verify
            </Button>
          </div>
        </div>
        <div className="verify-input">
          <Typography variant="display1" gutterBottom>
            {this.state.postVerificationMessage}
          </Typography>
        </div>
      </div>
    );
  }
}
export default OtpPanel;
