import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import './Items.css';
const Items = () =>{
    const list = useSelector(state => state.list);
    const navigate = useNavigate();
    const handleRedirect = (id) =>{
        navigate(`/item/${id}`)
    };
    return(
        <div className="items_box">
            {list.length ? list.map((item, itemIndex) =>{
            return(
                <div 
                    key={itemIndex} 
                    className="items_card" 
                    onClick={() => handleRedirect(item.id)}>
                    <img alt='image' src={item.images.fixed_height_small.url}/>
                </div>
            )
        }) : <div>No results</div>}</div>
    )
}

export default Items;