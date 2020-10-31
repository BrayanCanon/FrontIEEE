import React, {  Component  } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../styles/login.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      usuario: "",
      contraseña:""
    };
  }

  render() {

    return (
      <Router>
      <Container fluid  >
        <Row>
          <Col >
          <div align="center">
            <div className="login-form">
              <Form>
                <h4 className="title-login">Login</h4>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label className="login-label">
                    Correo Electónico
                  </Form.Label>
                  <Form.Control type="email" placeholder="Ingrese Email" onChange = {(nombreDeUsuario) =>this.setState({usuario:nombreDeUsuario.target.value}) } />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label className="login-label">Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Ingrese contraseña"
                    onChange = {(agregarContraseña) =>this.setState({contraseña:agregarContraseña.target.value}) }
                  />
                  <Form.Text className="text-muted"><a href="/"> ¿Has olvidado tu contraseña?</a></Form.Text>
                </Form.Group>
                <Button id="btn-submit" variant="primary" type="submit">
                  Ingresar
                </Button>
                <br></br>
                <Form.Group>
                  <div className="signUp">
                    <p>
                      ¿No estas registrado? <a href="/">Registrate</a>
                    </p>
                  </div>
                </Form.Group>
              </Form>
            </div>
          </div>
          </Col>
        </Row>
      </Container>
      </Router>
    );
  }
}

export default Login;
