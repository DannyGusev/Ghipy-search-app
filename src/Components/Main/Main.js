import { useState, useEffect , useCallback} from 'react';
import Items from './../Items/Items';
import { useDispatch } from "react-redux";
import { init } from './../../Actions';
import SkeletonCard from './../Skeletons/SkeletonCard';
import './Main.css';
const Main = () =>{
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const [limit, setLimit] = useState(9);

    const debounce = (func) => {
        let timer;
        return function (...args) {
            const context = this;
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
                timer = null;
                func.apply(context, args);
            }, 500);
        };
    };
    const handleChange = (q) =>{
        if(!q.length) return;
        fetch(`http://api.giphy.com/v1/gifs/search?q=${q}&api_key=${process.env.REACT_APP_API_KEY}&limit=${limit}`)
            .then((response) => response.json())
            .then((data) => {
                dispatch(init(data.data))
                setIsLoading(false)
            });
    };
    const optimizedFn = useCallback(debounce(handleChange), []);
    useEffect(()=>{
        window.onpopstate = e => {
            setIsLoading(false)
         }
    });
    return(
        <div className='main_page'>
            <input 
                type="text" 
                placeholder='Search Here' 
                onChange={(e) => optimizedFn(e.target.value)} />
            {isLoading ? <SkeletonCard count={limit}/> : <Items/>}
        </div>
    )
}

export default Main;