import React, { Component, Fragment } from 'react';
import {
  Button,
  Left,
  Right,
  Body,
  Form,
  Item,
  Input,
  Icon,
  List,
  ListItem,
  Container,
  Text,
  Card
} from 'native-base';

import Layout from './Layout';

export default class Home extends Component {
  render() {
    return (
      <Layout navigation={this.props.navigation}>
        <Card>
          <Form>
            <Item>
              <Input placeholder="Busca por endereço" />
              <Icon
                active
                name="search"
                onPress={() => console.warn('search')}
              />
            </Item>
            <Item>
              <Left>
                <Button transparent>
                  <Icon type="FontAwesome" name="map-marker" />
                </Button>
              </Left>
              <Right>
                <Button
                  transparent
                  onPress={() =>
                    this.props.navigation.navigate('AdvancedSearch')
                  }
                >
                  <Icon type="FontAwesome" name="filter" />
                </Button>
              </Right>
            </Item>
          </Form>
        </Card>
        <Container>
          <List>
            <ListItem iconLeft>
              <Icon
                name="warning"
                type="FontAwesome"
                style={{ fontSize: 24, color: 'red' }}
              />
              <Body>
                <Text>Sankhadeep</Text>
                <Text note>Its time to build a difference . .</Text>
              </Body>
            </ListItem>
            <ListItem iconLeft>
              <Icon
                name="exclamation"
                type="FontAwesome"
                style={{ fontSize: 24, color: '#F57F17' }}
              />
              <Body>
                <Text>Contato</Text>
                <Text note>Início - 09:00 - 05/07/2018</Text>
                <Text note>Fim - 09:00 - 05/07/2018</Text>
              </Body>
            </ListItem>
            <ListItem iconLeft>
              <Icon
                name="inbox"
                type="FontAwesome"
                style={{ fontSize: 24, color: 'green' }}
              />
              <Body>
                <Text>Sankhadeep</Text>
                <Text note>Its time to build a difference . .</Text>
              </Body>
            </ListItem>
            <ListItem
              iconLeft
              onPress={() => this.props.navigation.navigate('Task')}
            >
              <Icon
                name="calendar"
                type="FontAwesome"
                style={{ fontSize: 24, color: 'green' }}
              />
              <Body>
                <Text>Solicitação de Visita</Text>
                <Text note>16:00 - 29/08/2018</Text>
              </Body>
            </ListItem>
          </List>
        </Container>
      </Layout>
    );
  }
}
