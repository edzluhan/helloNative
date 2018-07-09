import React, { Component } from 'react';
import Modal from 'react-native-modal';
import { Alert } from 'react-native';
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
  View,
  Picker,
  DatePicker,
  Icon,
  Toast
} from 'native-base';

import Layout from './Layout';

export default class VisitSolicitation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenDate: new Date(),
      selected2: undefined,
      modal1Visible: false,
      modal2Visible: false
    };
    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }

  onValueChange2(value) {
    this.setState({ selected2: value });
  }

  setModal1Visible(visible) {
    this.setState({ modal1Visible: visible });
  }

  setModal2Visible(visible) {
    this.setState({ modal2Visible: visible });
  }

  render() {
    return (
      <Layout navigation={this.props.navigation}>
        <Modal isVisible={this.state.modal1Visible}>
          <View
            style={{
              backgroundColor: 'white',
              padding: 22,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 4,
              borderColor: 'rgba(0, 0, 0, 0.1)'
            }}
          >
            <H3>Propor outro horário</H3>
            <Form>
              <Item>
                <Label>
                  Data: {/*this.state.chosenDate.toString().substr(4, 12)*/}
                </Label>
                <DatePicker
                  defaultDate={new Date(2018, 4, 4)}
                  minimumDate={new Date(2018, 1, 1)}
                  maximumDate={new Date(2018, 12, 31)}
                  locale={'en'}
                  timeZoneOffsetInMinutes={undefined}
                  modalTransparent={false}
                  animationType={'fade'}
                  androidMode={'default'}
                  placeHolderText="Select date"
                  textStyle={{ color: 'green' }}
                  placeHolderTextStyle={{ color: '#000000' }}
                  onDateChange={this.setDate}
                />
              </Item>
              <Item picker>
                <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="ios-arrow-down-outline" />}
                  style={{ width: undefined }}
                  placeholder="Hora"
                  placeholderStyle={{ color: '#bfc6ea' }}
                  placeholderIconColor="#007aff"
                  selectedValue={this.state.selected2}
                  onValueChange={this.onValueChange2.bind(this)}
                >
                  <Picker.Item label="8:00" value="8:00" />
                  <Picker.Item label="8:30" value="8:30" />
                  <Picker.Item label="9:00" value="9:00" />
                  <Picker.Item label="9:30" value="9:30" />
                  <Picker.Item label="10:00" value="10:00" />
                  <Picker.Item label="10:30" value="10:30" />
                  <Picker.Item label="11:00" value="11:00" />
                  <Picker.Item label="11:30" value="11:30" />
                  <Picker.Item label="12:00" value="12:00" />
                  <Picker.Item label="12:30" value="12:30" />
                  <Picker.Item label="13:00" value="13:00" />
                  <Picker.Item label="13:30" value="13:30" />
                  <Picker.Item label="14:00" value="14:00" />
                  <Picker.Item label="14:30" value="14:30" />
                  <Picker.Item label="15:00" value="15:00" />
                  <Picker.Item label="15:30" value="15:30" />
                  <Picker.Item label="16:00" value="16:00" />
                  <Picker.Item label="16:30" value="16:30" />
                  <Picker.Item label="17:00" value="17:00" />
                  <Picker.Item label="17:30" value="17:30" />
                  <Picker.Item label="18:00" value="18:00" />
                  <Picker.Item label="18:30" value="18:30" />
                  <Picker.Item label="19:00" value="19:00" />
                  <Picker.Item label="19:30" value="19:30" />
                  <Picker.Item label="20:00" value="20:00" />
                  <Picker.Item label="20:30" value="20:30" />
                </Picker>
              </Item>
            </Form>
            <Button
              block
              onPress={() => {
                this.setModal1Visible(!this.state.modal1Visible);
                Toast.show({text: 'Proposta de visita enviada!'});
              }}
            >
              <Text>Propor</Text>
            </Button>
          </View>
        </Modal>
        <Modal isVisible={this.state.modal2Visible}>
          <View
            style={{
              backgroundColor: 'white',
              padding: 22,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 4,
              borderColor: 'rgba(0, 0, 0, 0.1)'
            }}
          >
            <H3>Cancelar Solicitação</H3>
            <Form>
              <Item stackedLabel>
                <Label>Motivo</Label>
                <Input />
              </Item>
            </Form>
            <Text> </Text>
            <Button
              block
              danger
              onPress={() => {
                this.setModal2Visible(!this.state.modal2Visible);
                Toast.show({ text: 'Visita cancelada!' });
              }}
            >
              <Text>Cancelar</Text>
            </Button>
          </View>
        </Modal>
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
            <Button
              success
              style={{ flexGrow: 1, justifyContent: 'center', margin: 4 }}
              onPress={() =>
                Alert.alert(
                  'Agendamento confirmado',
                  null,
                  [{ text: 'OK' }],
                  { cancelable: false }
                )
              }
            >
              <Text>Agendar</Text>
            </Button>
            <Button
              danger
              style={{ flexGrow: 1, justifyContent: 'center', margin: 4 }}
              onPress={() => {
                this.setModal2Visible(true);
              }}
            >
              <Text>Cancelar</Text>
            </Button>
            <Button
              primary
              style={{ flexGrow: 1, justifyContent: 'center', margin: 4 }}
              onPress={() => {
                this.setModal1Visible(true);
              }}
            >
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
