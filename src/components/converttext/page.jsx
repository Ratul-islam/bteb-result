"use client"

import React, {useState} from 'react'

import styles from './styles.module.css'

const GetData = () => {

    const [data, setData] = useState('')
    const [finalData, setFinalData] = useState()

const handleChange = (e) =>{
    setData(e.target.value.match(/\d{6}/g))

}
console.log(data)
const handleSubmit =(event)=> {
    event.preventDefault();


    
    var res

    for(let i = 0;i<=data.length;i++){
        if(data[data.indexOf(stdRolls[i])+7]=='('){
            // console.log(b[i])
            // console.log(data.slice(data.indexOf(b[i])+8,data.indexOf(b[i])+12))
           res = {
            roll: stdRolls[i],
            result: data.slice(data.indexOf(stdRolls[i])+8,data.indexOf(stdRolls[i])+12),
            passed: true
            }
            // arr.push(res)
            setFinalData((oldData)=>{return {...oldData, res}})
        }

    }
    
}

console.log(finalData)

  return (
    <main>
        <div>
        <form method='POST' className={styles.form} onSubmit={handleSubmit}>
            <textarea className={styles.textArea} onChange={handleChange}/>
            <input className={styles.btn} type='submit' value='Get Data' />
        </form>
    </div>

    {data && data.map(roll=><p key={roll}className={styles.p}>{roll}</p>)}
    </main>
  )
}

export default GetData;