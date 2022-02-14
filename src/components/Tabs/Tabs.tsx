import React from 'react';
import {Container, TabsContainer, Icon, Notification} from './styles';
import {ScrollView, Text, StyleSheet, Alert} from 'react-native';
import Caretdown from 'react-native-vector-icons/Feather';

const Tabs = () => {
  return (
    <Container>
      <ScrollView horizontal={true}>
        <TabsContainer>
          <Icon>
            <Caretdown
              onPress={() =>
                Alert.alert('Perdão torcedor! Botão em manutenção...')
              }
              name="calendar"
              size={43}
              color="#ffffffdf"
            />
          </Icon>
          <Text style={styles.text}>Calendário</Text>
        </TabsContainer>
        <TabsContainer>
          <Icon>
            <Caretdown
              onPress={() =>
                Alert.alert('Perdão torcedor! Botão em manutenção...')
              }
              name="users"
              size={38}
              color="#ffffffdf"
            />
          </Icon>
          <Text style={styles.text}>Elenco</Text>
        </TabsContainer>
        <TabsContainer>
          <Notification>
            <Text style={styles.text}>3</Text>
          </Notification>
          <Icon>
            <Caretdown
              onPress={() =>
                Alert.alert(
                  'Temos novas contratações! Volte no fim da manutenção. ;)',
                )
              }
              name="refresh-ccw"
              size={40}
              color="#ffffffdf"
            />
          </Icon>
          <Text style={styles.text2}>Novas Contratações</Text>
        </TabsContainer>
        <TabsContainer>
          <Icon>
            <Caretdown
              onPress={() =>
                Alert.alert('Perdão torcedor! Botão em manutenção...')
              }
              name="trending-up"
              size={40}
              color="#ffffffdf"
            />
          </Icon>
          <Text style={styles.text}>Classificação</Text>
        </TabsContainer>
        <TabsContainer>
          <Icon>
            <Caretdown
              onPress={() =>
                Alert.alert('Perdão torcedor! Botão em manutenção...')
              }
              name="percent"
              size={40}
              color="#ffffffdf"
            />
          </Icon>
          <Text style={styles.text}>Meus Cupons</Text>
        </TabsContainer>
        <TabsContainer>
          <Icon>
            <Caretdown
              onPress={() =>
                Alert.alert('Perdão torcedor! Botão em manutenção...')
              }
              name="shopping-cart"
              size={40}
              color="#ffffffdf"
            />
          </Icon>
          <Text style={styles.text}>Minhas Compras</Text>
        </TabsContainer>
        <TabsContainer>
          <Icon>
            <Caretdown
              onPress={() =>
                Alert.alert('Perdão torcedor! Botão em manutenção...')
              }
              name="dollar-sign"
              size={38}
              color="#ffffffdf"
            />
          </Icon>
          <Text style={styles.text}>PIX</Text>
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
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text2: {
    fontSize: 17,
    color: '#000000bc',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 6,
  },
});
