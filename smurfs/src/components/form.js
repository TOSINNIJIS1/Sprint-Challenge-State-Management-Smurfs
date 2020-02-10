
import React, {useState} from 'react';
import {newSmurf} from "../contexts/context"
import { connect } from 'react-redux';

const Form = props => {


    const [formSmurf, setFormSmurf] = useState({
        name: '',
        age: '',
        height: ''
    })
    const onSubmit = e => {
        e.preventDefault();
        props.newSmurf(formSmurf)
    }
    const onChange = e => {
        setFormSmurf({
            ...formSmurf, [e.target.name]: e.target.value
            
        })
        
    }

    return(
        <div className="App">

            <form onSubmit={onSubmit}>
                <label> Name: </label>
                <input type="text" 
                name="name"
                onChange={onChange}
                value={formSmurf.name}
                />

                <label> Age: </label>
                <input type="number" 
                name="age"
                onChange={onChange}
                value={formSmurf.age}
                />

                <label> height: </label>
                <input type="text" 
                name="height"
                onChange={onChange}
                value={formSmurf.height}
                />

                <input type='submit'/>
                
            </form>

        </div>
    )
}
const mapStateToprops = state => {
    return {state};
};

export default connect(mapStateToprops, {newSmurf})(Form)