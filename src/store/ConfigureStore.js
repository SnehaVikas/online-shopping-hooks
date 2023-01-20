//Store file where State lives 
import{createStore,applyMiddleware} from 'redux';
import rootReducer from './reducer/RootReducer';
import thunk from 'redux-thunk'
//firstClass Function of js..mean function can return another function
//predefind function from redux file
function ConfigureStore()
{
    return createStore(
        rootReducer,
        applyMiddleware(thunk)
        );
}
export default ConfigureStore