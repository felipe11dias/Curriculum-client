import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import $ from 'jquery';

class Signup extends Component {

    handleSignup = (e) => {
        e.preventDefault();
        $.ajax({
            type: 'POST',
            url: 'http://localhost:3001/auth',
            data: {
              email: this.email.value,
              password: this.password.value,
              password_confirmation: this.password_confirmation
            }
          })
        }

    render(){
        return(
            <Container>
                <Row>
                    <Col>
                        <h2>Sign up</h2>
                        <form onSubmit={this.handleSignup}>
                            <label> E-mail field: </label>
                            <input type="email" ref={(input) => this.email = input } /><br/>
                            <label> Password field: </label>
                            <input name="password" type="password" ref={(input) => this.password = input } /><br/>
                            <label> Password confirmation field: </label>
                            <input name="password_confirmation" type="password" ref={(input) => this.password_confirmation = input }/><br/> 
                            <input type="submit" value="Create"/>
                        </form>
                    </Col>
                </Row>
            </Container>
        )
    }
} export default Signup;