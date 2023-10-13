import React, {useState} from 'react'
import {useAppDispatch, useAppSelector} from './app/hooks';
import {incremented, amountAdded, macUpdated, snUpdated} from './features/counter/counter-slice';
import './App.css'

function AA() {

    console.log('Component AA rendered')

    // const count = useAppSelector((state) => state.counter.value);
    const dispatch = useAppDispatch();
    const mac = useAppSelector((state) => state.counter.MAC);
    const sn = useAppSelector((state) => state.counter.SN);
    // const [mac, setMac] = useState('');
    // const [sn, setSn] = useState('');

    function handleClick() {
        // increment by 1
        // dispatch(incremented());

        // increment by a fixed amount
        dispatch(amountAdded(3));
    }

    function handleMacChange(e: React.ChangeEvent<HTMLInputElement>) {
        // setMac(e.target.value);
        dispatch(macUpdated(e.target.value));
    }

    function handleSnChange(e: React.ChangeEvent<HTMLInputElement>) {
        // setSn(e.target.value);
        dispatch(snUpdated(e.target.value));
    }

    return (
        <div className="AA">
            <header className="Subcomponent-header">
                <p>Component AA</p>
                <p>
                    <button onClick={handleClick}>
                        {/*count is: {count}*/}
                        Increment the counter
                    </button>
                </p>
                <p>
                    <input type="text" placeholder="Enter MAC" value={mac} onChange={handleMacChange}/>
                </p>
                <p>
                    <input type="text" placeholder="Enter SN" value={sn} onChange={handleSnChange}/>
                </p>
            </header>
        </div>
    )
}

export {AA}
