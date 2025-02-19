import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import giveCLassesBgImage from '../../assets/images/give-classes-background.png';

function GiveClasses() {
  const { goBack } = useNavigation();

  function handleNavigateBack() {
    goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          Quer ser um professor?
        </Text>
        <Text style={styles.description}>
          Ótimo! por favor, espere pelas próximas atualizações.
        </Text>
      </View>

      <RectButton
        style={styles.okButton}
        onPress={handleNavigateBack}
      >
        <Text style={styles.okButtonText}>Tudo bem...</Text>
      </RectButton>
    </View>
  );
}

export default GiveClasses;
