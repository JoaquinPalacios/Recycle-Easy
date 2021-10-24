import { ScrollView, StyleSheet, Text, View } from "react-native";

import { Header } from "react-native-elements";
import React from 'react';

interface CompostGuideComponentProps {
    
}
 
const CompostGuideComponent: React.FC<CompostGuideComponentProps> = () => {
    return (
        <>
            <Header
            placement="left"
                centerComponent={{ text: 'Compost Guide', style: { color: '#fff', fontSize: 19, fontWeight: "700" } }}
                rightComponent={{ icon: 'leaf', color: '#fff', size: 30, type: 'font-awesome' }}
                backgroundImage={require('../../assets/images/compost.png')}
                statusBarProps={{ translucent: true, backgroundColor: "transparent"}}
                containerStyle={{ height: 315, alignItems: 'flex-end' }} />
            <ScrollView>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.title}>1. Choose a method and location</Text>
                    </View>
                    <View>
                        <Text style={styles.text}>The size of your backyard should determine whether you should use a composting bin or have a garden compost pile.{"\n"}{"\n"}For smaller backyards, static or tumbling composting bins are good options.{"\n"}{"\n"}If you have more room you can opt for a garden compost pile or bay, or even several bays for compost at different stages.{"\n"}{"\n"}Choose an area of your yard with some shade so the material doesn’t dry out.</Text>
                    </View>
                </View>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.title}>2. Know what to compost</Text>
                    </View>
                    <View>
                        <Text style={styles.text}>There are two broad categories that you can put in your compost bin or pile – green and brown.{"\n"}{"\n"}Green materials include fruit and vegetable scraps, used tea, coffee grounds, crushed eggshells, grass clippings, green plant cuttings, old flowers and many weeds.{"\n"}{"\n"}Brown materials are things like straw, paper and cardboard, dry leaves, woody prunings and sawdust (but not from treated wood).</Text>
                    </View>
                </View>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.title}>3. Know what to avoid</Text>
                    </View>
                    <View>
                        <Text style={styles.text}>Don’t put diseased plants, pet droppings (apart from chook manure), cooking fat, glossy paper, weeds with seeds, treated timber and large branches in your compost bin.{"\n"}{"\n"}Some gardeners say you should avoid adding meat and bones unless you have a larger compost system.</Text>
                    </View>
                </View>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.title}>4. Layer the material</Text>
                    </View>
                    <View>
                        <Text style={styles.text}>Whether you’re using a composting bin, or building up a garden compost pile, it is important to know how to layer your compost.{"\n"}{"\n"}Start with a base layer of twigs, mulch or old potting mix to encourage air circulation and provide drainage.{"\n"}{"\n"}Follow with layers of green and brown material — say garden clippings and kitchen scraps, then leaves and wet paper.{"\n"}{"\n"}Add water after each layer to keep the pile moist but not too wet. Finish with a layer of soil or finished compost to help reduce odours.{"\n"}{"\n"}Remember that the smaller the items are, the faster they will decompose.{"\n"}{"\n"}When layering, try to add two parts brown material to one part green.{"\n"}{"\n"}Turn or aerate the compost with a fork every week or two. Another option is to poke garden stakes or plastic pipes through the heap to allow air in.{"\n"}{"\n"}Covering the compost at the top will keep in heat and moisture, which are essential for the process.</Text>
                    </View>
                </View>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.title}>5. Distribute your black gold</Text>
                    </View>
                    <View>
                        <Text style={styles.text}>The compost is ready for use when it’s a rich brown colour and crumbles easily. This could take a few months, depending on the size of the bin or pile.{"\n"}{"\n"}Compost is a great soil conditioner that adds nutrients and helps your garden retain moisture. It can also reduce the need to add fertiliser and make your plants more resistant to disease.{"\n"}{"\n"}You might also find that setting up a garden composting system opens your eyes to the amount of food that gets wasted, and makes you rethink your next shopping list.</Text>
                    </View>
                </View>
            </ScrollView>
        </>
    );
}
 
export default CompostGuideComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'flex-start',
        marginHorizontal: 22,
        marginVertical: 22,
        paddingHorizontal: 11,
        paddingVertical: 5.5,
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
    title: {
        fontSize: 23,
        fontWeight: '700',
        marginVertical: 11,
        textAlign: 'left',
    },
    text: {
        fontSize: 19,
        textAlign: "justify",
    }
  });