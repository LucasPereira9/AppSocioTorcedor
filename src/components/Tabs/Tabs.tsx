import React from 'react';
import {Container, TabsContainer, Icon} from './styles';
import {ScrollView, Text, StyleSheet} from 'react-native';
import Caretdown from 'react-native-vector-icons/Feather';

const Tabs = () => {
  return (
    <Container>
      <ScrollView horizontal={true}>
        <TabsContainer>
          <Icon>
            <Caretdown name="user-check" size={25} color="#ffffffdf" />
          </Icon>
          <Text style={styles.text}>Calendário</Text>
        </TabsContainer>
        <TabsContainer>
          <Icon>
            <Caretdown name="user-check" size={25} color="#ffffffdf" />
          </Icon>
          <Text style={styles.text}>Elenco</Text>
        </TabsContainer>
        <TabsContainer>
          <Icon>
            <Caretdown name="user-check" size={25} color="#ffffffdf" />
          </Icon>
          <Text style={styles.text}>Classificação</Text>
        </TabsContainer>
        <TabsContainer>
          <Icon>
            <Caretdown name="user-check" size={25} color="#ffffffdf" />
          </Icon>
          <Text style={styles.text}>Depósito</Text>
        </TabsContainer>
        <TabsContainer>
          <Icon>
            <Caretdown name="user-check" size={25} color="#ffffffdf" />
          </Icon>
          <Text style={styles.text}>Extrato</Text>
        </TabsContainer>
      </ScrollView>
    </Container>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    color: '#000000bc',
  },
});
