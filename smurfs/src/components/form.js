import React, {useState, useContext} from 'react';
import { smurfsContext } from '../contexts/context'


export default function Form () {

    const { Smurfs } = useContext(smurfsContext)


    const [addSmurf, setAddSmurf] = useState({
        name: '',
        age: '',
        height: '',
    });


    const onChange = e => {
        const changeSmurf = e.target.name;
        setAddSmurf({
            ...addSmurf, [changeSmurf]: e.target.value,
        })
    }

    const onSubmit = e => {
        e.preventDefault();
        Smurfs(addSmurf);
        console.log(Smurfs)
    }


    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>
                    <input type='text' name='name' placeholder="Add Name" onChange={onChange} />
                </label>

                <label>
                    <input type='text' name='age' placeholder="Add Age" onChange={onChange} />
                </label>

                <label>
                    <input type='text' name='height' placeholder="Add Height" onChange={onChange} />
                </label>

                <button type='submit' > Submit </button>
            </form>

        </div>
    )
}