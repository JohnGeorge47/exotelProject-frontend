import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import "./contact.css";
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", lastName: "", email: "" };
  }
  handleChange(name) {
    this.setState({
      name
    });
  }
  handleChangeLast(lastName) {
    this.setState({
      lastName
    });
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <h1 className="contactForm">Drop a message and well get back to you</h1>
        <form>
          <Grid container spacing={8}>
            <Grid item xs={6}>
              <Input
                placeholder="Your First Name "
                onChange={e => {
                  this.handleChange(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Input
                placeholder="Your Last Name"
                onChange={e => {
                  this.handleChangeLast(e.target.value);
                }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={8}>
            <Input
              placeholder="Your Email Id"
              onChange={e => {
                this.setState({
                  email: e.target.value
                });
              }}
            />
          </Grid>
        </form>
      </div>
    );
  }
}
export default Contact;
