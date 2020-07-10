import React,{useState, useEffect} from 'react'
import {View,Text,StyleSheet,FlatList, Image} from 'react-native'
import yelp from "../api/yelp"

const ResutsShowScreen = (props) => {
    const id = props.route.params.id
    const [result,setResult] = useState(null)

    useEffect(()=>{
        getResult(id)
    },[])

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data)
    }

    if(!result){
        return null
    }

    console.log(result.photos)
    return (
        <View>
        <Image style ={styles.image} source={{uri:result.photos[0]}}/>
        <Image style ={styles.image} source={{uri:result.photos[1]}}/>
        <Image style ={styles.image} source={{uri:result.photos[2]}}/>
        
        </View>
    )
}

const styles = StyleSheet.create({
    image:{
        height:200,
        width:300
    }
})

export default ResutsShowScreen