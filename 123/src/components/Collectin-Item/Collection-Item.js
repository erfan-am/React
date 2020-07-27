import React from 'react'
import './Collection-item.scss';
import Cart from './Cart_Collectin/Cart_Collection';
export default  class Collection_Item extends React.PureComponent {
   
    render() {
        const {name,items,id}=this.props.igk;
        return (
            <div className="collection_item">
                <h2 className="collection_name">{name} Collections <i className="fa fa-database"></i></h2>
                {items.map((item)=>(
                    <Cart  key={item.id} item={item} />
                ))}
            </div>
        )
    }
}
