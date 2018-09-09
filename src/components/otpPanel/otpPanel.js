import Button from "@material-ui/core/Button";
import React from "react";
import Input from "@material-ui/core/Input";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import "./otpPanel.css";
class OtpPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      verified: false
    };
  }
  handleChange() {}
  render() {
    return (
      <div>
        <h1 className="otpPanel-title">
          Please enter the OTP which has been sent your mobile
        </h1>
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
          </Grid>
        </div>
      </div>
    );
  }
}
export default OtpPanel;
