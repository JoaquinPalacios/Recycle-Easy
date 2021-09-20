import { StyleSheet, Text, View } from "react-native";

import { Header } from "react-native-elements";
import React from 'react';
import { useSelector } from "react-redux";

interface SingleItemScreenComponentProps {
    route: any
}
 
const SingleItemScreenComponent: React.FC<SingleItemScreenComponentProps> = () => {
    const plasticID = useSelector((state: any) => state.recycle.selectedID);
    const plastics = useSelector((state?: any) => state.recycle.list); 

    const plastic = plastics.find((item: { id: string; }) => item.id === plasticID);
    return (
        <>
            <View>
                <Header
                placement="left"
                    centerComponent={{ text: plastic.title, style: { color: '#fff', fontSize: 19, fontWeight: "700" } }}
                    rightComponent={{ icon: 'home', color: '#fff', size: 30 }}
                    backgroundImage={require('../../assets/images/plasticRecycle.jpg')}
                    statusBarProps={{ translucent: true, backgroundColor: "transparent"}}
                    containerStyle={{ height: 315 }} />
            </View>
            <View style={styles.container}>
                <View>
                    <Text style={styles.textTitle}>{plastic?.id} {plastic?.title}</Text>
                </View>
                <View>
                    <Text style={styles.text}>{plastic?.description}</Text>
                </View>
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
        overflow: "scroll",
    },
    textTitle: {
        fontSize: 20,
        fontWeight: '700',
        paddingVertical: 10,
    },
    text: {
        fontSize: 19,
        fontWeight: '500',
        paddingVertical: 5,
        textAlign: "justify",
    },
}); 
export default SingleItemScreenComponent;