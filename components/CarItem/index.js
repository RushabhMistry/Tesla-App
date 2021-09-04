import React from 'react';
import { View, Text, ImageBackground, KeyboardAvoidingViewComponent } from 'react-native';
import StyledButton from "../StyledButton";
import styles from './styles';

const CarItem = (props) =>{
    const {name, tagline, taglineCTA, image} = props.car;
    return(
        <View style={styles.carContainer}>
            <ImageBackground
                source={image}
                style={styles.image}
            />
            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subTitle}>
                    {tagline}
                    {' '}
                    <Text style={styles.subTitleCTA}>
                        {taglineCTA}
                    </Text>
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <StyledButton
                    type="primary"
                    content={"Custom Order"}
                    onPress={() =>{
                        console.warn("Custom Order was placed");
                    }}
                />
                <StyledButton
                    type="secondary"
                    content={"Existing Inventory"}
                    onPress={() =>{
                        console.warn("Existing Inventory Order was placed");
                    }}
                />
            </View>
        </View>
    );  
};  
export default CarItem;