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
import FontAwesome, { Icons } from 'react-native-fontawesome';

import Layout from './Layout';

// const thumb = require('../../assets/foxter.jpg');
const thumb = {
  uri:
    'https://cdn-my.konecty.com/rest/image/outer/263/263/foxter/wm/Product/174493/pictures/02-CASA-CHACARA-DAS-PEDRAS-PORTO-ALEGRE-174493.jpg'
};

export default class Results extends Component {
  render() {
    return <Layout navigation={this.props.navigation}>
        <Container>
          <Content>
            <List>
              <ListItem onPress={() => this.props.navigation.navigate('Product')}>
                <Thumbnail square size={80} source={thumb} />
                <Body>
                  <Text>Imóvel 174493 - Casa Revenda</Text>
                  <Text note>Chácara das Pedras, Porto Alegre</Text>
                  <Text>
                    166,5m² 2 <FontAwesome>{Icons.car}</FontAwesome> 
                    {' '}3 <FontAwesome>{Icons.bed}</FontAwesome>
                  </Text>
                  <Text>R$ 650.000</Text>
                </Body>
              </ListItem>
            </List>
          </Content>
        </Container>
      </Layout>;
  }
}
