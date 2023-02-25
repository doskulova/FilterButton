import {createContext, useState} from "react";
import axios from "axios";


export const CustomContext = createContext()

const Context = (props) => {
    const [category, setCategory] = useState('Пеший тур')
    const [level, setLevel] = useState('Легкий')
    const [rate,setRate] = useState('')
    const [products, setProducts] = useState({
        data:[],
        error:''
    })
    const changeCategory = (value,event) => {
        setCategory(value)
        setRate(event.target.value)
    }
    const changeLevel = (value,event) => {
        setLevel(value)
        setRate(event.target.value)
    }
    const getProducts = () => {
        axios(`http://localhost:4444/catalog?category=${category}&level=${level}&_sort=rate&_order=desc${rate}`)
            .then(({data}) => setProducts({...products, data: data}) )
            .catch((error) => setProducts({...products, error: error}))
    }
    const value = {
        products,
        category,
        level,
        changeCategory,
        changeLevel,
        getProducts,
        rate,setRate
    }
    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>

}

export default Context