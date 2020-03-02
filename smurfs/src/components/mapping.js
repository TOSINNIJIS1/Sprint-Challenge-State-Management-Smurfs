
import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import { fetchSmurfs, newSmurf } from '../contexts/context';
import Form from './form'

const Smurf = props => {
    console.log(props)

    const onClick = props.fetchSmurfs
    useEffect(() => {
        onClick()
    }, [onClick])

    console.log(fetchSmurfs)

    return(
        <div>
            {props.smurf.map(e => {
                console.log(e)
                return(
                <div key={e.id}>
                    Name: {e.name}
                    Age: {e.age}
                    Height: {e.height}
                    <button onClick={onClick}> Click </button>
                    <Form newSmurf={props.newSmurf}/>
                </div>)
            })}
        </div>
    )

}
const mapStateToProps = state => ({
    smurf: state.smurf,
    error: state.error
})

export default connect(mapStateToProps, {fetchSmurfs, newSmurf} )(Smurf)