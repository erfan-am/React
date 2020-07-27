import {combineReducers} from 'redux';
import ADD from './Add/Add-reducer';
import News from './news/news.reducer'
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage' ;

const persistConfig={
    key:'root',
    storage,
    whitelist:['add']
}
 const rootReducer=combineReducers({
     add:ADD,
     news:News
})



export default persistReducer(persistConfig,rootReducer)