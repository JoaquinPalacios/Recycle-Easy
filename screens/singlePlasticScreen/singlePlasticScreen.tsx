import { ScrollView, StyleSheet, Text, View } from "react-native";

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
                    rightComponent={{ icon: 'recycle', color: '#fff', size: 30, type: 'font-awesome' }}
                    backgroundImage={require('../../assets/images/plasticRecycle.jpg')}
                    statusBarProps={{ translucent: true, backgroundColor: "transparent"}}
                    containerStyle={{ height: 315, alignItems: 'flex-end' }} />
            </View>
            <ScrollView>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.text}>{plastic?.description}</Text>
                    </View>
                </View>
            </ScrollView>            
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 0,
        alignSelf: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginHorizontal: 22,
        marginVertical: 22,
        height: 'auto',       
        backgroundColor: '#E1F3E5',
        borderColor: '#000',
        borderRadius: 8,
        borderWidth: 1,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        elevation: 5,
    },
    text: {
        fontSize: 20,
        fontWeight: '500',
        paddingHorizontal: 11,
        paddingVertical: 5.5,
        textAlign: "justify",
    },
}); 
export default SingleItemScreenComponent;