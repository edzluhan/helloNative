import React, { Component } from 'react';
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
  Text,
  Card
} from 'native-base';

import Layout from './Layout';

const task0 = [
  {
    label: 'Nome',
    placeholder: 'Atrasada'
  },
  {
    label: 'Tipo',
    placeholder: 'Contato'
  },
  {
    label: 'Prioridade',
    placeholder: 'Média'
  },
  {
    label: 'Situação',
    placeholder: 'Nova'
  },
  {
    label: 'Motivo',
    placeholder: ''
  },
  {
    label: 'Assunto',
    placeholder: 'Compra de imóvel'
  },
  {
    label: 'Interesse Imobiliário',
    placeholder: ''
  },
  {
    label: 'Descrição',
    placeholder: 'Descrição'
  },
  {
    label: 'Localização',
    placeholder: 'Localização'
  },
  {
    label: 'Início',
    placeholder: '09:00 - 05/07/2018'
  },
  {
    label: 'Fim',
    placeholder: '19:00 - 05/07/2018'
  },
  {
    label: 'Concluído',
    placeholder: '22:00 - 05/07/2018'
  }
];
const task1 = [
  {
    label: 'Nome',
    placeholder: 'Atual'
  },
  {
    label: 'Tipo',
    placeholder: 'Contato'
  },
  {
    label: 'Prioridade',
    placeholder: 'Média'
  },
  {
    label: 'Situação',
    placeholder: 'Nova'
  },
  {
    label: 'Motivo',
    placeholder: ''
  },
  {
    label: 'Assunto',
    placeholder: 'Compra de imóvel'
  },
  {
    label: 'Interesse Imobiliário',
    placeholder: ''
  },
  {
    label: 'Descrição',
    placeholder: 'Descrição'
  },
  {
    label: 'Localização',
    placeholder: 'Localização'
  },
  {
    label: 'Início',
    placeholder: '09:00 - 05/07/2018'
  },
  {
    label: 'Fim',
    placeholder: '19:00 - 05/07/2018'
  },
  {
    label: 'Concluído',
    placeholder: '22:00 - 05/07/2018'
  }
];
const task2 = [
  {
    label: 'Nome',
    placeholder: 'Futura'
  },
  {
    label: 'Tipo',
    placeholder: 'Contato'
  },
  {
    label: 'Prioridade',
    placeholder: 'Média'
  },
  {
    label: 'Situação',
    placeholder: 'Nova'
  },
  {
    label: 'Motivo',
    placeholder: ''
  },
  {
    label: 'Assunto',
    placeholder: 'Compra de imóvel'
  },
  {
    label: 'Interesse Imobiliário',
    placeholder: ''
  },
  {
    label: 'Descrição',
    placeholder: 'Descrição'
  },
  {
    label: 'Localização',
    placeholder: 'Localização'
  },
  {
    label: 'Início',
    placeholder: '09:00 - 05/07/2018'
  },
  {
    label: 'Fim',
    placeholder: '19:00 - 05/07/2018'
  },
  {
    label: 'Concluído',
    placeholder: '22:00 - 05/07/2018'
  }
];

export default class Home extends Component {
  data = new Date();

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
                onPress={() => this.props.navigation.navigate('Results')}
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
        <List>
          <ListItem
            iconLeft
            onPress={() => this.props.navigation.navigate('Task', task0)}
          >
            <Icon
              name="warning"
              type="FontAwesome"
              style={{ fontSize: 24, color: 'red' }}
            />
            <Body>
              <Text>Atividade atrasada</Text>
              <Text note>Início - 09:00 - 05/07/2018</Text>
              <Text note>Fim - 09:00 - 06/07/2018</Text>
            </Body>
          </ListItem>
          <ListItem
            iconLeft
            onPress={() => this.props.navigation.navigate('Task', task1)}
          >
            <Icon
              name="exclamation"
              type="FontAwesome"
              style={{ fontSize: 24, color: '#F57F17' }}
            />
            <Body>
              <Text>Atividade atual</Text>
              <Text note>
                Início - 09:00 -{`${this.data.getDate()}/${this.data.getMonth() +
                  1}/${this.data.getFullYear()}`}
              </Text>
              <Text note>
                Fim - 09:00 -{' '}
                {`${this.data.getDate() + 1}/${this.data.getMonth() +
                  1}/${this.data.getFullYear()}`}
              </Text>
            </Body>
          </ListItem>
          <ListItem
            iconLeft
            onPress={() => this.props.navigation.navigate('Task', task2)}
          >
            <Icon
              name="inbox"
              type="FontAwesome"
              style={{ fontSize: 24, color: 'green' }}
            />
            <Body>
              <Text>Atividade futura</Text>
              <Text note>
                Início - 09:00 -
                {`${this.data.getDate() + 2}/${this.data.getMonth() +
                  1}/${this.data.getFullYear()}`}
              </Text>
              <Text note>
                Fim - 09:00 -
                {`${this.data.getDate() + 3}/${this.data.getMonth() +
                  1}/${this.data.getFullYear()}`}
              </Text>
            </Body>
          </ListItem>
          <ListItem
            iconLeft
            onPress={() => this.props.navigation.navigate('VisitSolicitation')}
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
      </Layout>
    );
  }
}
