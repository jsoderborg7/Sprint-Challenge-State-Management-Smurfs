import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getSmurfs} from '../actions';
import SmurfCard from './SmurfCard';

const Smurfs = ({getSmurfs, name, isFetching, error}) =>{
  useEffect(() =>{
    getSmurfs();
  },[getSmurfs]);

  if (isFetching){
    return <h3>Getting Smurfs!</h3>
  }

  return(
    <div>
      {name && name.map(item => (
        <SmurfCard name={item.name} age={item.age} height={item.height} id={item.id} />
      ))}
    </div>
  );
};

const mapStateToProps = state =>{
  console.log('mSTP', state);
  return{
    name: state.name,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, {getSmurfs})(Smurfs);