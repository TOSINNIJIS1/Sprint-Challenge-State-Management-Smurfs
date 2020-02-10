import React, { useContext } from 'react'
import  {smurfsContext}  from '../contexts/context'


const Map = () => {
    const {smurf} = useContext(smurfsContext)

    return (
        <div>
            {smurf.map(e => {
                return (
                    <div className="App-header" key={e.id}>
                        Name: {e.name}
                        Age: {e.age}
                        ID: {e.id}
                        Height: {e.height}
                    </div>
                )
            })}
        </div>
    )

}



export default Map;