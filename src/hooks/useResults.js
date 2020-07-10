import React,{useState,useEffect} from 'react'
import yelp from "../api/yelp"

export default () => {
    const [results,setResults] = useState([])
    const [errorMessage,setErrorMessage] = useState('')

    useEffect(()=>{
        searchApi('pasta')
    },[])

    const searchApi = async (searchTerm) => {
        try{
        const response = await yelp.get('/search',{
            params:{
                limit:50,
                location:'san jose',
                term:searchTerm
            }
        })
        setResults(response.data.businesses)
        }
        catch(e){
            setErrorMessage('Something went wrong. Please try again.')
        }
    }

    return [searchApi, results, errorMessage]
}