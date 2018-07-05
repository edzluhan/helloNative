import React, { Component } from 'react';
import {
  Container,
  Content,
  List,
  ListItem,
  Thumbnail,
  Body,
  Text,
  Icon
} from 'native-base';

export default class Results extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem>
              <Thumbnail
                square
                size={80}
                source={{ uri: 'https://www.placecage.com/200/200' }}
              />
              <Body>
                <Text>Imóvel 174493 - Casa Revenda</Text>
                <Text note>Chácara das Pedras, Porto Alegre</Text>
                  <Text>166,5m² 2
                  <Icon
                    type="FontAwesome"
                    name="car"
                    style={{ width: 20, height: 20 }}
                  />
                  3 
                  <Icon
                    type="FontAwesome"
                    name="bed"
                    style={{ width: 20, height: 20 }}
                  />
                </Text>
                <Text>R$ 650.000</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Thumbnail
                square
                size={80}
                source={{ uri: 'https://www.placecage.com/200/200' }}
              />
              <Body>
                <Text>Imóvel 174493 - Casa Revenda</Text>
                <Text note>Chácara das Pedras, Porto Alegre</Text>
                  <Text>166,5m² 2
                  <Icon
                    type="FontAwesome"
                    name="car"
                    style={{ width: 20, height: 20 }}
                  />
                  3 
                  <Icon
                    type="FontAwesome"
                    name="bed"
                    style={{ width: 20, height: 20 }}
                  />
                </Text>
                <Text>R$ 650.000</Text>
              </Body>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
