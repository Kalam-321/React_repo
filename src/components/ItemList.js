import { CDN_URL } from "../utils/constants";

const ItemList = ({items})=>{
    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className="m-2 p-2 border-gray-200 border-b-2 text-left flex justify-between">
                    <div className="w-9/12">
                        <div className="py-2">
                            <span>{item.card.info.name}</span>
                            <span> - ₹{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                        </div>
                        <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 p-4 h-36">
                        <div className="absolute">
                            <button className="px-2 py-1 rounded-lg bg-black text-white">Add +</button>
                        </div>
                        { item.card.info.imageId ? <img src={CDN_URL+item.card.info.imageId} className="w-full h-full rounded-lg"/> : <img/>}
                    </div>
                </div>

            ))} 
        </div>
    )
}

export default ItemList;