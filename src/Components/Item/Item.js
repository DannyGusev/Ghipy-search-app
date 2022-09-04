import { useEffect, useState } from 'react';
import './Item.css'
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Item = () =>{
    const list =  useSelector(state => state.list);
    const [item, setItem] = useState({});
    const [isLoading, setLoading] = useState(true);
    let  {id}  = useParams();
    useEffect(()=>{
        let tempItem = list.find((element) => {return element.id === id} );
        setItem(tempItem);
        setLoading(false);
    });
    
    return(
        isLoading ? 
        <div className='item_main'>
            <div className='item_title'> Details</div>
            <div className='item_content'>
                
                <div className='item_image'>
                    <Skeleton duration={1} height={320} highlightColor={"#FFFFFF"}/>
                </div>
                <div className='item_data'>
                    <Skeleton duration={1} height={20} highlightColor={"#FFFFFF"}/>
                    <Skeleton duration={1} height={20} highlightColor={"#FFFFFF"}/>
                    <Skeleton duration={1} height={20} highlightColor={"#FFFFFF"}/>
                </div>
            </div>
        </div>
        :
        <div className='item_main'>
            <div className='item_title'> Details</div>
            <div className='item_content'>
                
                <div className='item_image'>
                    <img alt='image' src={item.images.original.url}/>
                </div>
                <div className='item_data'>
                    <div>Title : {item.title !== '' ? item.title : 'No Title'}</div>
                    <div>Image Size - width : {item.images.original.width}, height : {item.images.original.height}</div>
                    <div>Frames : {item.images.original.frames}</div>
                </div>
            </div>
        </div>
    )
}

export default Item