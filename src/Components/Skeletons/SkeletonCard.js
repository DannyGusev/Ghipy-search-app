import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonCard = (props) => {
    return (
        <div className="items_box">{
            Array(props.count)
            .fill()
            .map((item, itemIndex) =>{
                return(
                    <div key={itemIndex} className="items_card">
                        <Skeleton duration={1} height={'24vh'} width={'30vw'} />
                    </div>
                )
            })}  
        </div>
    );
  };
  export default SkeletonCard;