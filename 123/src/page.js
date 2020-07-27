import React from 'react'
import {AnimatePresence} from 'framer-motion'
import {Switch,Route,useLocation} from 'react-router-dom';
import Home from './Container/HomePage/Homepage'
import Contact from './Container/Contact/Contact'
import Collection from './Container/Collection/Collection'
import Check from './components/CheckList/Check'
import News from './components/News/News';
import Articles from './components/Articles/Articles';


function Page(){
    const location=useLocation()
    return (
        <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                    <Route path="/" exact component={Home} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/collections" component={Collection} />
                    <Route exact path="/checklist" component={Check} />
                    <Route  path="/news" component={News} />
                    <Route  path="/articles" component={Articles} />
                </Switch>
      </AnimatePresence>
     
    )
}

export default Page
