import React, { Component } from 'react';
import {
  Header,
  Title,
  Content,
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
  Card,
  Drawer
} from 'native-base';

import Menu from './Menu';

class Home extends Component {
  render() {
    closeDrawer = () => {
      this.drawer._root.close();
    };
    openDrawer = () => {
      this.drawer._root.open();
    };

    return (
      <Drawer
        ref={ref => {
          this.drawer = ref;
        }}
        content={<Menu navigator={this.navigator} />}
        onClose={() => closeDrawer()}
      >
        <Container>
          <Header>
            <Left>
              <Button transparent onPress={() => openDrawer()}>
                <Icon name="menu" />
              </Button>
            </Left>
            <Body>
              <Title>Foxter</Title>
            </Body>
            <Right />
          </Header>
          <Content>
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
                    <Button transparent>
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
                    <Text>Sankhadeep</Text>
                    <Text note>Its time to build a difference . .</Text>
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
              </List>
            </Container>
          </Content>
        </Container>
      </Drawer>
    );
  }
}

export default Home;
