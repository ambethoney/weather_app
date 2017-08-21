import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

const mapStateToProps = state => {
  return{
    card: state.locations,
    searchBar : state.searchLocation
  }
}

const mapDispatchToProps = dispatch =>{
  return bindActionCreators(actionCreators, dispatch)
}

var App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
