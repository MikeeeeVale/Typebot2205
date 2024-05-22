import {StyleSheet, View, Text } from 'react-native';
import { Bubble } from "@typebot.io/react";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Olha que letgal oq fpoi feitop</Text>
    <Bubble
      typebot="my-typebot-1xe7twq"
      previewMessage={{
        message: "Oi! Posso te ajudar?",
        avatarUrl:
          "https://s3.typebot.io/public/workspaces/clve2h4uj001wryc51rpuvb92/typebots/clvf48mov000mf7sp51xe7twq/hostAvatar?v=1715189392986",
      }}
      theme={{ button: { backgroundColor: "#275D8C" } }}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
   flex:1,
   alignItems:'center',
   padding: 30,
  },
  title:{
   fontSize: 20,
   fontWeight: 'bold',
   color:'#333',
   marginBottom:20,
  }
});
