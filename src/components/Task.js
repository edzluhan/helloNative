import React, { Component } from 'react';
import {
  Container,
  Content,
  List,
  Item,
  Text,
  Label,
  Input,
  Left,
  Form
} from 'native-base';

import Layout from './Layout';

export default class Task extends Component {
  items = this.props.navigation.state.params;

  renderItens = itens => {
    const mapped = itens.map((item, key) => (
      <Item fixedLabel key={key}>
        <Label>{item.label}:</Label>
        <Input disabled placeholder={item.placeholder} />
      </Item>
    ));
    return mapped;
  };

  render() {
    return (
      <Layout navigation={this.props.navigation}>
        <Container>
          <Content>
            <Form>{this.renderItens(this.items)}</Form>
          </Content>
        </Container>
      </Layout>
    );
  }
}
