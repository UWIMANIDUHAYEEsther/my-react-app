
 import PropTypes from 'prop-types'


function Student(props){
    return(
       <div className="stud">
         <p>Name:{props.name}</p>
        <p>Age: {props.age}</p>
        <p>Students:{props.isstudent ?'Yes':'No'}</p>
       </div>
        
    )
}
Student.propTypes={
    name:PropTypes.string,
    age:PropTypes.number,
    isstudent:PropTypes.bool
}
Student.defaultProps={
    name:'Guest',
    age:0,
    isstudent:false,
}
export default Student