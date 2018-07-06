import React, { Component } from 'react';
import {
  Root,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Container,
  Drawer,
  Toast
} from 'native-base';

import Menu from './Menu';

export default class Layout extends Component {
  closeDrawer = () => {
    this.drawer._root.close();
  };
  openDrawer = () => {
    this.drawer._root.open();
  };

  componentDidMount(){
    Toast.show({
      text: 'Toast',
      type: 'success',
      buttonText: 'Sai!',
      duration: 0
    });
  };

  render() {
    return (
      <Root>
        <Drawer
          ref={ref => {
            this.drawer = ref;
          }}
          content={<Menu navigation={this.props.navigation} />}
          onClose={() => this.closeDrawer()}
        >
          <Container>
            <Header>
              <Left>
                <Button
                  transparent
                  onPress={() => this.props.navigation.goBack()}
                >
                  <Icon name="arrow-back" />
                </Button>
              </Left>
              <Body>
                <Title>Foxter</Title>
              </Body>
              <Right>
                <Button transparent onPress={() => this.openDrawer()}>
                  <Icon name="menu" />
                </Button>
              </Right>
            </Header>
            <Content>{this.props.children}</Content>
          </Container>
        </Drawer>
      </Root>
    );
  }
}
