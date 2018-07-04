import React, { Component } from 'react';
import {
  Button,
  Container,
  Header,
  Left,
  Body,
  Title,
  Right,
  Content,
  Form,
  Item,
  Input,
  Label,
  Text
} from 'native-base';
export default class Login extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Foxter App</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
            <Button block>
              <Text>Primary</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
