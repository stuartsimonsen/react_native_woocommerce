import React from "react";
import { StyleSheet, Text, View, ScrollView, Image, TextInput, TouchableOpacity } from "react-native";
import HTMLView from 'react-native-htmlview';

export default class SingleProductScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.product.name
    });

    state = {
        quantity: 1
    }

    decreaseQuantity = () => {
        if(this.state.quantity <= 1) {
            return;
        } else {
            this.setState({
                quantity: this.state.quantity - 1
            });
        }
    }

    increaseQuantitiy = () => {
        this.setState({
            quantity: Number(this.state.quantity) + 1
        });
    }

    render() {
        const product = this.props.navigation.state.params.product;
        return (
            <ScrollView>
                <Image style={styles.image} source={{ uri: product.images[0].src }} />
                <Text style={styles.text}>{product.name}     $ {product.price}</Text>
                <View style={{ display: 'flex', flexDirection: 'row', padding: 10, marginLeft: 20, marginBottom: 20 }}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                        <TouchableOpacity style={styles.decreaseButton} onPress={this.decreaseQuantity}>
                            <Text> - </Text>
                        </TouchableOpacity>
                        <TextInput
                            style={styles.input}
                            onChangeText={(quantity) => this.setState({ quantity })}
                            value={`${this.state.quantity}`}
                            keyboardType="numeric"
                        />
                        <TouchableOpacity style={styles.increaseButton} onPress={this.increaseQuantitiy} >
                            <Text> + </Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={{ color: '#fff' }}> ADD TO CART </Text>
                    </TouchableOpacity>
                </View>
                <HTMLView style={styles.html} value={product.description} />
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    image: {
        width: 360,
        height: 360
    },
    text: {
        fontSize: 20,
        paddingLeft: 20,
        paddingBottom: 20,
        textAlign: 'center'
    },
    input: {
        height: 40,
        width: 50,
        borderWidth: 1,
        borderColor: 'rgba(27,31,35,0.05)',
        padding: 10,
        backgroundColor: 'rgba(27,31,35,0.05)',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#05a5d1',
        padding: 10,
        width: 150,
        height: 40,
        marginLeft: 20,
        borderBottomLeftRadius: 17,
        borderBottomRightRadius: 17,
        borderTopLeftRadius: 17,
        borderTopRightRadius: 17,
    },
    decreaseButton: {
        height: 40,
        width: 30,
        padding: 10,
        backgroundColor: 'rgba(27,31,35,0.05)',
        borderBottomLeftRadius: 17,
        borderTopLeftRadius: 17,
    },
    increaseButton: {
        height: 40,
        width: 30,
        padding: 8,
        backgroundColor: 'rgba(27,31,35,0.05)',
        borderBottomRightRadius: 17,
        borderTopRightRadius: 17,
    },
    description: {
        fontSize: 14,
        padding: 15,
    },
    html: {
        paddingLeft: 20,
        paddingRight: 20
    }
});
