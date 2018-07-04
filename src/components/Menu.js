import React, { Component } from 'react';
import {
  Container,
  Content,
  Text,
  List,
  ListItem,
  Header,
  Body,
  Icon,
  Title
} from 'native-base';
const routes = [
  {
    route: 'Home',
    name: 'Home',
    icon: 'home'
  },
  {
    route: 'Home',
    name: 'Imóveis',
    icon: 'building'
  },
  {
    route: 'Home',
    name: 'Chat',
    icon: 'comment'
  },
  {
    route: 'Home',
    name: 'Atividades',
    icon: 'calendar'
  },
  {
    route: 'Home',
    name: 'Contatos',
    icon: 'user'
  }
];
export default class SideBar extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: '#FFFFFF' }}>
        <Header>
          <Body>
            <Title>Foxter</Title>
          </Body>
        </Header>
        <Content>
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data.route)}
                >
                  <Icon type="FontAwesome" name={data.icon} />
                  <Text> {data.name}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
