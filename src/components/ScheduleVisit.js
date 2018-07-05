import React, { Component } from 'react';
import {
  Container,
  Content,
  DatePicker,
  Button,
  Text,
  Form,
  Input,
  Label,
  Item,
  Textarea,
  Picker,
  Icon
} from 'native-base';

export default class ScheduleVisit extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date(), selected2: undefined };
    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }

  onValueChange2(value) {
    this.setState({ selected2: value });
  }

  render() {
    return (
      <Container>
        <Content padder>
          <Form>
            <Item stackedLabel>
              <Label>Nome</Label>
              <Input />
            </Item>
            <Item stackedLabel>
              <Label>Telefone</Label>
              <Input />
            </Item>
            <Item stackedLabel>
              <Label>E-mail</Label>
              <Input />
            </Item>
            <Item stackedLabel>
              <Label>Observações</Label>
              <Textarea bordered style={{ width: '100%' }} />
            </Item>
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

            <Button block>
              <Text>Solicitar Visita</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
