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
  render() {
    return (
      <Layout navigation={this.props.navigation}>
        <Container>
          <Content>
            <Form>
              <Item fixedLabel>
                <Label>Tipo:</Label>
                <Input disabled placeholder="Contato" />
              </Item>
              <Item fixedLabel>
                <Label>Prioridade:</Label>
                <Input disabled placeholder="Média" />
              </Item>
              <Item fixedLabel>
                <Label>Situação:</Label>
                <Input disabled placeholder="Nova" />
              </Item>
              <Item fixedLabel>
                <Label>Motivo:</Label>
                <Input disabled placeholder="" />
              </Item>
              <Item fixedLabel>
                <Label>Assunto:</Label>
                <Input disabled placeholder="Compra de imóvel" />
              </Item>
              <Item fixedLabel>
                <Label>Interesse Imobiliário:</Label>
                <Input disabled placeholder="" />
              </Item>
              <Item fixedLabel>
                <Label>Descrição:</Label>
                <Input disabled placeholder="Descrição" />
              </Item>
              <Item fixedLabel>
                <Label>Localização:</Label>
                <Input disabled placeholder="Localização" />
              </Item>
              <Item fixedLabel>
                <Label>Início:</Label>
                <Input disabled placeholder="09:00 - 05/07/2018" />
              </Item>
              <Item fixedLabel>
                <Label>Fim:</Label>
                <Input disabled placeholder="19:00 - 05/07/2018" />
              </Item>
              <Item fixedLabel>
                <Label>Concluído:</Label>
                <Input disabled placeholder="22:00 - 05/07/2018" />
              </Item>
            </Form>
          </Content>
        </Container>
      </Layout>
    );
  }
}
