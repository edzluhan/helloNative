import React, { Component } from 'react';
import { Image, StyleSheet, WebView } from 'react-native';
import {
  Container,
  Content,
  List,
  ListItem,
  Text,
  Body,
  H3,
  DeckSwiper,
  Card,
  CardItem,
  View,
  Button,
  Icon
} from 'native-base';

const cards = [
  'https://cdn-my.konecty.com/rest/image/outer/263/263/foxter/wm/Product/174493/pictures/02-CASA-CHACARA-DAS-PEDRAS-PORTO-ALEGRE-174493.jpg',
  'https://cdn-my.konecty.com/rest/image/outer/263/263/foxter/wm/Product/174493/pictures/03-CASA-CHACARA-DAS-PEDRAS-PORTO-ALEGRE-174493.jpg',
  'https://cdn-my.konecty.com/rest/image/outer/263/263/foxter/wm/Product/174493/pictures/04-CASA-CHACARA-DAS-PEDRAS-PORTO-ALEGRE-174493.jpg',
  'https://cdn-my.konecty.com/rest/image/outer/263/263/foxter/wm/Product/174493/pictures/05-CASA-CHACARA-DAS-PEDRAS-PORTO-ALEGRE-174493.jpg',
  'https://cdn-my.konecty.com/rest/image/outer/263/263/foxter/wm/Product/174493/pictures/06-CASA-CHACARA-DAS-PEDRAS-PORTO-ALEGRE-174493.jpg',
  'https://cdn-my.konecty.com/rest/image/outer/263/263/foxter/wm/Product/174493/pictures/07-CASA-CHACARA-DAS-PEDRAS-PORTO-ALEGRE-174493.jpg',
  'https://cdn-my.konecty.com/rest/image/outer/263/263/foxter/wm/Product/174493/pictures/08-CASA-CHACARA-DAS-PEDRAS-PORTO-ALEGRE-174493.jpg',
  'https://cdn-my.konecty.com/rest/image/outer/263/263/foxter/wm/Product/174493/pictures/09-CASA-CHACARA-DAS-PEDRAS-PORTO-ALEGRE-174493.jpg',
  'https://cdn-my.konecty.com/rest/image/outer/263/263/foxter/wm/Product/174493/pictures/10-CASA-CHACARA-DAS-PEDRAS-PORTO-ALEGRE-174493.jpg',
  'https://cdn-my.konecty.com/rest/image/outer/263/263/foxter/wm/Product/174493/pictures/11-CASA-CHACARA-DAS-PEDRAS-PORTO-ALEGRE-174493.jpg',
  'https://cdn-my.konecty.com/rest/image/outer/263/263/foxter/wm/Product/174493/pictures/12-CASA-CHACARA-DAS-PEDRAS-PORTO-ALEGRE-174493.jpg',
  'https://cdn-my.konecty.com/rest/image/outer/263/263/foxter/wm/Product/174493/pictures/13-CASA-CHACARA-DAS-PEDRAS-PORTO-ALEGRE-174493.jpg',
  'https://cdn-my.konecty.com/rest/image/outer/263/263/foxter/wm/Product/174493/pictures/14-CASA-CHACARA-DAS-PEDRAS-PORTO-ALEGRE-174493.jpg',
  'https://cdn-my.konecty.com/rest/image/outer/263/263/foxter/wm/Product/174493/pictures/15-CASA-CHACARA-DAS-PEDRAS-PORTO-ALEGRE-174493.jpg',
  'https://cdn-my.konecty.com/rest/image/outer/263/263/foxter/wm/Product/174493/pictures/16-CASA-CHACARA-DAS-PEDRAS-PORTO-ALEGRE-174493.jpg',
  'https://cdn-my.konecty.com/rest/image/outer/263/263/foxter/wm/Product/174493/pictures/17-CASA-CHACARA-DAS-PEDRAS-PORTO-ALEGRE-174493.jpg',
  'https://cdn-my.konecty.com/rest/image/outer/263/263/foxter/wm/Product/174493/pictures/18-CASA-CHACARA-DAS-PEDRAS-PORTO-ALEGRE-174493.jpg',
  'https://cdn-my.konecty.com/rest/image/outer/263/263/foxter/wm/Product/174493/pictures/19-CASA-CHACARA-DAS-PEDRAS-PORTO-ALEGRE-174493.jpg',
  'https://cdn-my.konecty.com/rest/image/outer/263/263/foxter/wm/Product/174493/pictures/20-CASA-CHACARA-DAS-PEDRAS-PORTO-ALEGRE-174493.jpg',
  'https://cdn-my.konecty.com/rest/image/outer/263/263/foxter/wm/Product/174493/pictures/21-CASA-CHACARA-DAS-PEDRAS-PORTO-ALEGRE-174493.jpg',
  'https://cdn-my.konecty.com/rest/image/outer/263/263/foxter/wm/Product/174493/pictures/22-CASA-CHACARA-DAS-PEDRAS-PORTO-ALEGRE-174493.jpg',
  'https://cdn-my.konecty.com/rest/image/outer/263/263/foxter/wm/Product/174493/pictures/23-CASA-CHACARA-DAS-PEDRAS-PORTO-ALEGRE-174493.jpg',
  'https://cdn-my.konecty.com/rest/image/outer/263/263/foxter/wm/Product/174493/pictures/24-CASA-CHACARA-DAS-PEDRAS-PORTO-ALEGRE-174493.jpg',
  'https://cdn-my.konecty.com/rest/image/outer/263/263/foxter/wm/Product/174493/pictures/25-CASA-CHACARA-DAS-PEDRAS-PORTO-ALEGRE-174493.jpg',
  'https://cdn-my.konecty.com/rest/image/outer/263/263/foxter/wm/Product/174493/pictures/26-CASA-CHACARA-DAS-PEDRAS-PORTO-ALEGRE-174493.jpg',
  'https://cdn-my.konecty.com/rest/image/outer/263/263/foxter/wm/Product/174493/pictures/27-CASA-CHACARA-DAS-PEDRAS-PORTO-ALEGRE-174493.jpg',
  'https://cdn-my.konecty.com/rest/image/outer/263/263/foxter/wm/Product/174493/pictures/28-CASA-CHACARA-DAS-PEDRAS-PORTO-ALEGRE-174493.jpg'
];

export default class Product extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Image
            style={{ height: 300, width: 500 }}
            source={{
              uri:
                'https://cdn-my.konecty.com/rest/image/outer/1024/768/foxter/wm/Product/174493/pictures/02-CASA-CHACARA-DAS-PEDRAS-PORTO-ALEGRE-174493.jpg'
            }}
          />
          <Body>
            <H3>
              Casa Comercial/Residencial com 3 dormitórios e 2 vagas em
              condomínio no bairro Chácara das Pedras em Porto Alegre com
              166,5m² por R$ 650.000
            </H3>
            <Text note>Código 174493</Text>
          </Body>
          <List>
            <ListItem>
              <Text>Tipo:</Text>
              <Body>
                <Text>Casa</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Text>Bairro:</Text>
              <Body>
                <Text>Chácara das Pedras</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Text>Cidade:</Text>
              <Body>
                <Text>Porto Alegre</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Text>Segmento:</Text>
              <Body>
                <Text>Comercial, Residencial</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Text>Construção:</Text>
              <Body>
                <Text>Jan 2006</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Text>Dormitórios:</Text>
              <Body>
                <Text>3</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Text>Suítes:</Text>
              <Body>
                <Text>1</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Text>Vagas:</Text>
              <Body>
                <Text>2</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Text>Área Privativa:</Text>
              <Body>
                <Text>166,5m²</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Text>Área Total:</Text>
              <Body>
                <Text>166,5m²</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Text>Valor:</Text>
              <Body>
                <Text>R$ 650.000</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Text>IPTU Anual:</Text>
              <Body>
                <Text>R$ 1.500</Text>
              </Body>
            </ListItem>
          </List>
          <Body>
            <H3>Fotos do Imóvel</H3>
            <Image
              style={{ height: 300, width: 500 }}
              source={{ uri: cards[1] }}
            />
          </Body>
          <Body>
            <H3>Descrição do Imóvel</H3>
            <Text>
              Imobiliária Foxter vende lindo sobrado geminado no bairro Chácara
              das Pedras (Porto Alegre) no condomínio horizontal Windsor com 3
              dormitórios sendo 01 suíte com banheira de hidromassagem.Living
              com lareira, churrasqueira (ambas fechadas com vidro térmico),
              água quente, vaga para 02 carros. Imóvel com câmeras de
              monitoramento na entrada e nos fundos e sistema de
              alarme.Permanecem na residência 02 splits, 02 ar de parede e
              móveis planejados em 2 dormitórios e da cozinha. Agende sua visita
              com um corretor Foxter.
            </Text>
          </Body>
          <View>
            <H3>Característica</H3>
            <List>
              <ListItem>
                <Text>Água Quente</Text>
              </ListItem>
              <ListItem>
                <Text>Churrasqueira</Text>
              </ListItem>
              <ListItem>
                <Text>Hidro</Text>
              </ListItem>
              <ListItem>
                <Text>Living Lareira</Text>
              </ListItem>
              <ListItem>
                <Text>Medição Água Individual</Text>
              </ListItem>
              <ListItem>
                <Text>Medição Gás Individual</Text>
              </ListItem>
            </List>
          </View>
          <View style={{ height: 350 }}>
            <WebView
              source={{
                uri:
                  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.303503780502!2d-51.1717852844917!3d-30.028149481888242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9519778528b2d4cf%3A0xda6714393b7b5c0a!2sAv.+Dr.+Nilo+Pe%C3%A7anha+-+Bela+Vista%2C+Porto+Alegre+-+RS%2C+90470-000!5e0!3m2!1sen!2sbr!4v1530737212751'
              }}
            />
          </View>
          <View>
            <Button block primary><Text>Agendar</Text></Button>
            <Text> </Text>
            <Button block primary><Text>Compartilhar</Text></Button>
          </View>
        </Content>
      </Container>
    );
  }

  // style = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     alignItems: 'stretch',
  //     justifyContent: 'center'
  //   },
  //   image: {
  //     flexGrow: 1,
  //     height: null,
  //     width: null,
  //     alignItems: 'center',
  //     justifyContent: 'center'
  //   },
  //   paragraph: {
  //     textAlign: 'center'
  //   }
  // });
}
