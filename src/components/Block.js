import React from "react";
import { View, Text } from "react-native";
export const Block = ({id, attributes, key=id}) => {
  return (
    <View style={{
        backgroundColor:"#E2E8F0",
        paddingLeft:8,
        marginTop:5,
        borderRadius:4,
    }}>
        <Text style={{
            fontSize:12,
            color:"blue",
            paddingVertical:5
        }}>{id}</Text>
        <Text style={{
            paddingBottom:5
        }}>{attributes.data}</Text>
    </View>
  );
};
