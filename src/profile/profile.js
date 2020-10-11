import React from 'react';
import PropTypes from 'prop-types';


const Prof = props => {
  return (
  <>
  <h1>NAME : {props.fullName}</h1>
  <h2>BIO  : {props.bio} </h2>
  <h3>PROFESSION :{props.profession}</h3>
  <img src={props.children}/>
  <button onClick={() =>props.handleName(props.fullName)}>
      ALERT
    </button>
  </>
  );

}
Prof.propTypes ={
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
}
Prof.defaultProps ={ 
  fullName:"Ali sami chaouch ",
  profession:"Python html css javascript unity",
  bio:"hello evreyone",
}
export default Prof





