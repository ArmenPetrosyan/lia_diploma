import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import "./Login.scss";

class Login extends Component {
  render() {
    const style = {
      padding: "25px"
    };

    return (
      <section className="Login">
        <h1>Lia's master work</h1>
        <Tabs>
          <Tab label="Log In">
            <Card style={style}>
              <CardText>
                <form action="#">
                  <TextField
                    id="login"
                    type="text"
                    placeholder="Login"
                  />
                  <br/>
                  <TextField
                    id="password"
                    type="password"
                    placeholder="Password"
                  />
                </form>
              </CardText>
              <CardActions>
                <RaisedButton label="Login" secondary={true} />
              </CardActions>
            </Card>
          </Tab>
          <Tab label="Register" >
            <Card style={style}>
              <CardText>
                <form action="#">
                  <TextField
                    id="register-login"
                    type="text"
                    placeholder="Login"
                  />
                  <br/>
                  <TextField
                    id="register-password"
                    type="password"
                    placeholder="Password"
                  />
                </form>
              </CardText>
              <CardActions>
                <RaisedButton label="Save" primary={true}/>
              </CardActions>
            </Card>
          </Tab>
        </Tabs>

      </section>
    )
  }
}

export default Login;