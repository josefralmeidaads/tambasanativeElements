import React from 'react';
import { View } from 'react-native';
import Lottie from 'lottie-react-native';

import { styles } from './styles';
import loading2 from '../../assets/loading2.json'

interface LoadingProps {
  isLoading: boolean;
}

const Loading: React.FC<LoadingProps> = ({ isLoading }: LoadingProps) => {
  return (
  <>  
    {isLoading && <View style={styles.container}>
      <Lottie 
        source={loading2} 
        autoSize={true}
        autoPlay={true}
        loop
        resizeMode="cover"
        style={styles.loading}
      />
    </View>}
  </>  
  );
}

export default Loading;