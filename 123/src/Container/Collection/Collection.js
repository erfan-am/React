import React, { Component } from 'react'
import {withRouter,Route} from 'react-router-dom';
import {collections} from './Data/Data';
import Collection_Item from '../../components/Collectin-Item/Collection-Item'
import './Collection.scss';
import {motion} from 'framer-motion'

 class Collection extends Component {
     
    state={
        collections:collections
    }
      

    render() {
        const data=Object.keys(this.state.collections).map((igk)=>{
          return [...Array(this.state.collections[igk])].map((igk,id)=>(
                <Collection_Item key={id} igk={igk} />
          ))
        })

        
       const pageTransition={
           in:{
               opacity:1,
               y:0,
           },
           out:{
               opacity:0,
               y:"-100%",
           }
       }

        return (
            <motion.div   
            initial="out"
            animate="in"
            exit="out"
            variants={pageTransition}
            className="collections">
                <div className="row">
                    {data}
                </div>
            </motion.div>
        )
    }
}

export default  withRouter(Collection) 