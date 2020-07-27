import React, { Component, lazy,Suspense } from 'react'
import Spinner from './components/Spinner/Spinner'
import Error from './components/Error_boundary/Errorboundary'
import { connect } from 'react-redux';
import Page from './page'

import Aos from 'aos';
import 'aos/dist/aos.css'
import Layout from './components/Layout/Layout';
import Hanburger from './components/Layout/hanburger';
const Describe= lazy(()=>import('./components/Describ/Describe'))

 class Main extends Component {

    render() {
        Aos.init({duration:1000})

  const {describe}=this.props;
        return (
            <div>
           {describe ? '': <Layout />}
              {describe ? '': <Hanburger/>}
                <Error>
                    <Suspense  fallback={<Spinner/>}>
                            {describe ? <Describe/>:  
                                    <Page/>
                            }

                    </Suspense>
                </Error>
            </div>
        )
    }
}


const mapStateToProps=(state)=>({
    describe:state.add.describe
   })

   export default connect(mapStateToProps)(Main)