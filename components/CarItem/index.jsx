import { ImageBackground, Text, View, Pressable } from "react-native";
import styles from './styles';
import StyledButton from "../StyledButton";

export default function CarItem() {
    const {name, tagline, taglineCTA, image } = car;
    return (
        <ImageBackground 
            resizeMode={'cover'}
            style={styles.image}
            source={image}>
            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subTitle}>{tagline}</Text>
                <Text>{taglineCTA}</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <StyledButton 
                    type={'primary'} 
                    content={'Customer Order'} 
                    onPress={ () => console.log('click order')}/>
                <StyledButton 
                    type={'secondary'} 
                    content={'Existing Inventory'}
                    onPress={ () => console.log('click order')}/>
            </View>
        </ImageBackground>
    );

}
