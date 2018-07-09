import React, { Component } from 'react';
import {
  Container,
  Form,
  Item,
  Label,
  Input,
  Icon,
  Picker,
  Switch,
  List,
  ListItem,
  Body,
  Text,
  Left,
  Right,
  Button,
  Content
} from 'native-base';

import Layout from './Layout';

export default class AdvancedSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined,
      switchValue: false
    };
  }

  onValueChange2(value) {
    this.setState({
      selected2: value
    });
  }

  render() {
    return (
      <Layout navigation={this.props.navigation}>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Código ou Empreendimento</Label>
              <Input />
              <Icon
                active
                name="search"
                onPress={() => this.props.navigation.navigate('Results')}
              />
            </Item>
            <List>
              <ListItem icon>
                <Body>
                  <Text>Apartamento</Text>
                </Body>
                <Switch value={this.state.switchValue} />
              </ListItem>
              <ListItem icon>
                <Body>
                  <Text>Casa</Text>
                </Body>
                <Switch value={this.state.switchValue} />
              </ListItem>
              <ListItem icon>
                <Body>
                  <Text>Sala</Text>
                </Body>
                <Switch value={this.state.switchValue} />
              </ListItem>
              <ListItem icon>
                <Left>
                  <Icon name="add" />
                </Left>
                <Body>
                  <Text>Ver mais</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
            </List>
            <Item>
              <Label>Dormitórios</Label>
            </Item>
            <Item>
              <Button medium light>
                <Text>0</Text>
              </Button>
              <Button medium light>
                <Text>1</Text>
              </Button>
              <Button medium light>
                <Text>2</Text>
              </Button>
              <Button medium primary>
                <Text>3</Text>
              </Button>
              <Button medium light>
                <Text>4 +</Text>
              </Button>
            </Item>
            <Item>
              <Label>Vagas</Label>
            </Item>
            <Item>
              <Button medium primary>
                <Text>0</Text>
              </Button>
              <Button medium light>
                <Text>1</Text>
              </Button>
              <Button medium light>
                <Text>2</Text>
              </Button>
              <Button medium light>
                <Text>3</Text>
              </Button>
              <Button medium light>
                <Text>4 +</Text>
              </Button>
            </Item>
            <Item>
              <Label>Preço</Label>
            </Item>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                style={{ width: undefined }}
                placeholder="Preço"
                placeholderStyle={{ color: '#bfc6ea' }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="R$ 0" value="---" />
                <Picker.Item label="R$ 200.000" value="200000.0" />
                <Picker.Item label="R$ 300.000" value="300000.0" />
                <Picker.Item label="R$ 400.000" value="400000.0" />
                <Picker.Item label="R$ 500.000" value="500000.0" />
                <Picker.Item label="R$ 600.000" value="600000.0" />
                <Picker.Item label="R$ 700.000" value="700000.0" />
                <Picker.Item label="R$ 800.000" value="800000.0" />
                <Picker.Item label="R$ 900.000" value="900000.0" />
                <Picker.Item label="R$ 1000.000" value="1000000.0" />
                <Picker.Item label="R$ 1500.000" value="1500000.0" />
                <Picker.Item label="R$ 2000.000" value="2000000.0" />
                <Picker.Item label="R$ 2500.000" value="2500000.0" />
                <Picker.Item label="R$ 3000.000" value="3000000.0" />
              </Picker>
            </Item>
            <Item>
              <Label>ao máximo</Label>
            </Item>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                style={{ width: undefined }}
                placeholder="Select your SIM"
                placeholderStyle={{ color: '#bfc6ea' }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="R$ 0" value="---" />
                <Picker.Item label="R$ 200.000" value="200000.0" />
                <Picker.Item label="R$ 300.000" value="300000.0" />
                <Picker.Item label="R$ 400.000" value="400000.0" />
                <Picker.Item label="R$ 500.000" value="500000.0" />
                <Picker.Item label="R$ 600.000" value="600000.0" />
                <Picker.Item label="R$ 700.000" value="700000.0" />
                <Picker.Item label="R$ 800.000" value="800000.0" />
                <Picker.Item label="R$ 900.000" value="900000.0" />
                <Picker.Item label="R$ 1000.000" value="1000000.0" />
                <Picker.Item label="R$ 1500.000" value="1500000.0" />
                <Picker.Item label="R$ 2000.000" value="2000000.0" />
                <Picker.Item label="R$ 2500.000" value="2500000.0" />
                <Picker.Item label="R$ 3000.000" value="3000000.0" />
              </Picker>
            </Item>
            <Item>
              <Label>Área</Label>
            </Item>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                style={{ width: undefined }}
                placeholder="Preço"
                placeholderStyle={{ color: '#bfc6ea' }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="0" value="---" />
                <Picker.Item label="50m²" value="50" />
                <Picker.Item label="100m²" value="100" />
                <Picker.Item label="150m²" value="150" />
                <Picker.Item label="200m²" value="200" />
                <Picker.Item label="250m²" value="250" />
                <Picker.Item label="300m²" value="300" />
              </Picker>
            </Item>
            <Item>
              <Label>ao máximo</Label>
            </Item>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                style={{ width: undefined }}
                placeholder="Select your SIM"
                placeholderStyle={{ color: '#bfc6ea' }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="0" value="---" />
                <Picker.Item label="50m²" value="50" />
                <Picker.Item label="100m²" value="100" />
                <Picker.Item label="150m²" value="150" />
                <Picker.Item label="200m²" value="200" />
                <Picker.Item label="250m²" value="250" />
                <Picker.Item label="300m²" value="300" />
              </Picker>
            </Item>
            <Item>
              <Label>Localização</Label>
            </Item>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                style={{ width: undefined }}
                placeholder="Select your SIM"
                placeholderStyle={{ color: '#bfc6ea' }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Porto Alegre" value="Porto Alegre" />
                <Picker.Item
                  label="Grande Porto Alegre"
                  value="Grande Porto Alegre"
                />
                <Picker.Item label="Litoral" value="Litoral" />
                <Picker.Item label="Serra" value="Serra" />
              </Picker>
            </Item>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                style={{ width: undefined }}
                placeholder="Select your SIM"
                placeholderStyle={{ color: '#bfc6ea' }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Todos os bairros" value="---" />
              </Picker>
            </Item>
            <Item>
              <Label>Em condomínio</Label>
            </Item>
            <Item>
              <Button medium light>
                <Text>Sim</Text>
              </Button>
              <Button medium primary>
                <Text>Não</Text>
              </Button>
            </Item>
            <Item>
              <Label>Finalidade</Label>
            </Item>
            <Item>
              <Button medium light>
                <Text>Comercial</Text>
              </Button>
              <Button medium primary>
                <Text>Residencial</Text>
              </Button>
            </Item>
            <Item>
              <Label>Apresentação</Label>
            </Item>
            <Item>
              <Button medium light>
                <Text>Tour Virtual</Text>
              </Button>
              <Button medium primary>
                <Text>Video</Text>
              </Button>
            </Item>
            <Item>
              <Text> </Text>
            </Item>
            <Button
              block
              onPress={() => this.props.navigation.navigate('Results')}
            >
              <Text>Buscar</Text>
            </Button>
          </Form>
        </Content>
      </Layout>
    );
  }
}
