import React,{useState} from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import SearchBar from "../components/SearchBar"
import useResults from "../hooks/useResults"
import ResultsList from "../components/ResultsList"
const SearchScreen  = ({navigation}) => {

    const [term,setTerm] = useState('')
    const [searchApi,results,errorMessage] = useResults()

    const onTermChange = (newTerm) => {
        setTerm(newTerm.nativeEvent.text)
    }

    const onTermSubmit =  () => {
        console.log('submitted')
        
    }

    const filterResultsByPrice = (price) => {
        // price == $ / $$ / $$$
        return results.filter(result => {
            return result.price === price
        })
    }

    return (
        <>
        
        <SearchBar term={term} onTermChange={onTermChange} onTermSubmit={() => searchApi(term)}/>
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <ScrollView>
        <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" navigation={navigation}/>
        <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier" navigation={navigation}/>
        <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender" navigation={navigation}/>
        </ScrollView>
        
        </>
    )
}

const styles = StyleSheet.create({

})

export default SearchScreen