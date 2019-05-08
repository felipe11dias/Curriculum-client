import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import $ from 'jquery';

class Signin extends Component {

    handleLogin = (e) => {
        e.preventDefault();
        $.ajax({
          type: 'POST',
          url: 'http://localhost:3001/auth/sign_in',
          data: {
            email: this.email.value,
            password: this.password.value
          }
        })
        .done((response, status, jqXHR) => {
          sessionStorage.setItem('user',
            JSON.stringify({
              'access-token': jqXHR.getResponseHeader('access-token'),
              client: jqXHR.getResponseHeader('client'),
              uid: response.data.uid
            }));
          this.props.history.push('/');
        })
      }

    render(){
        return(
            <Container>
                <Row>
                    <Col>
                        <h2>Sign in</h2>
                        <form onSubmit={this.handleLogin} >
                            <input name="email" ref={(input) => this.email = input } />
                            <input name="password" type="password" ref={(input) => this.password = input } />
                            <input type="submit" value="Login"/>
                        </form>
                    </Col>
                </Row>
            </Container>
        )
    }
} export default Signin;