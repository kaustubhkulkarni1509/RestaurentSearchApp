import React from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';


const SearchBar  = ({term,onTermChange,onTermSubmit}) => {
    return (
        <View style={styles.background}>
        <Icon name='search' style={styles.iconStyle}/>
        <TextInput 
            autoCapitaliz="node"
            autoCorrect={false}
            style = {styles.inputStyle}
            placeholder="Search"
            value={term}
            onChange={newTerm => onTermChange(newTerm)}
            onEndEditing={onTermSubmit} 
        />
        
        
        </View> 
    )
}

const styles = StyleSheet.create({
    background:{
        backgroundColor:'#F0EEEE',
        marginTop:15,
        height:50,
        borderRadius:5,
        marginHorizontal:15,
        flexDirection:'row',
        marginBottom:10
    },
    inputStyle:{
        flex:1,
        fontSize:18
    },
    iconStyle:{
        fontSize:35,
        alignSelf:'center',
        marginHorizontal:15
    }
})

export default SearchBar