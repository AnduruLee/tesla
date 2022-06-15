import { Text, StyleSheet, Pressable } from 'react-native';

export default function StyledButton({type, content, onPress}) {

    const backgroundColor = type === 'primary' ? '#171A20' : '#FFFFFF';
    const textColor = type === 'primary' ? '#FFFFFF' : '#171A20';

    return (
        <Pressable style={[styles.button, {backgroundColor: backgroundColor}]} 
            onPress={onPress}>
            <Text style={[styles.text, {color: textColor}]}>{content}</Text>
        </Pressable>
        
    );
}

const styles = StyleSheet.create({
    button: {
        height: 40,
        borderRadius: 20,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 12,
        fontWeight: '500',
        textTransform: 'uppercase',
    }
});