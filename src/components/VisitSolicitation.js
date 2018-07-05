import React, { Component } from 'react';
import {
  Text,
  Form,
  Item,
  Label,
  Input,
  Content,
  Card,
  CardItem,
  H3,
  Body,
  Button,
  View
} from 'native-base';

import Layout from './Layout';

export default class VisitSolicitation extends Component {
  render() {
    return (
      <Layout>
        <Content>
          <Card>
            <CardItem header>
              <H3>Dados da Solicitação</H3>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Data: 29/08/2018</Text>
                <Text>Hora: 16:00</Text>
              </Body>
            </CardItem>
          </Card>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Button success style={{ flexGrow: 1, justifyContent: 'center', margin: 4 }}>
            <Text>Agendar</Text>
          </Button>
          <Button danger style={{ flexGrow: 1, justifyContent: 'center', margin: 4 }}>
            <Text>Cancelar</Text>
          </Button>
          <Button primary style={{ flexGrow: 1, justifyContent: 'center', margin: 4 }}>
            <Text> Propor </Text>
          </Button>
          </View>
          <Form>
            <Item />
          </Form>
        </Content>
      </Layout>
    );
  }
}
