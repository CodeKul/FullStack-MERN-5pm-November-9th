import React from 'react'
import { useSelector } from 'react-redux'

export default function Bank() {

    // const Selector = (state) => {
    //     console.log(state.bank)

    // }

    let bankdata = useSelector((state) => {
        return (state.bank.bank)
    })


  

    return (
        <div>
            <input value={bankdata} type="text" />

            <div className="buttons">
                <button>Deposit</button>
                <button>Withdraw</button>
                <button>Interest</button>
                <button>Change Account Type</button>
            </div>
        </div>
    )
}
