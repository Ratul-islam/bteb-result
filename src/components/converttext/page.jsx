"use client"

import React, {useState, useRef} from 'react'

import styles from './styles.module.css'

const GetData = () => {
    const buttonRef = useRef(null);

    const [rawData, setRawData] = useState('')
    const [rolls, setRolls] = useState()
    const [finalData, setFinalData] = useState([])

const handleChange = (e) =>{
    setRawData(e.target.value)
    setRolls(e.target.value.match(/\d{6}/g))

}
const handleSubmit =(event)=> {
    event.preventDefault();
    
    

    


}

const handlebtn = (e) =>{
    
    for(var i=0;i<=rolls.length;i++){
        if(rawData[rawData.indexOf(rolls[i])+7]==`(`){
           
           let info = {
               roll: rolls[i],
               result: rawData.slice(rawData.indexOf(rolls[i])+8 , rawData.indexOf(rolls[i])+12),
               passed: true,
           }
           setFinalData((oldData) => [...oldData , {info}])
       }   
       }
       
   
       for(var i=0;i<=rolls.length;i++){
           if(rawData[rawData.indexOf(rolls[i])+7]==`{`){
               for(var start = rawData.indexOf(rolls[i])+7; start<=rawData.length; start = start+1 ){
                   if(rawData[start]=='}'){
   
                       let info = {
                           roll: rolls[i],
                           result: rawData.slice(rawData.indexOf(rolls[i])+7,start+1),
                           passed: false,
                       }
                       setFinalData((oldData) => [...oldData , {info}])
                       break
                   }
               }
   
           }
       }
       console.log(finalData)
    
        e.target.setAttribute('disabled', 'disabled')
        // e.target.styles.backgroundColor = 'gray';
}


  return (
    <main>
        <div>
        <form method='POST' className={styles.form} onSubmit={handleSubmit}>
            <textarea className={styles.textArea} onChange={handleChange} placeholder='Copy the result pdf text ad past it in here'/>
            <input className={styles.btn} type='submit'  onClick={handlebtn} value='Get Data' />
        </form>

    </div>
    <div className={styles.wrapper}>
        {finalData && finalData.map((roll) => {
            return (
                <div key={roll.info.roll} id={roll.info.roll}>
                <h2>{roll.info.roll}</h2>
                <p>{roll.info.result}</p>
            </div>
            )
        })}
    </div>
    
    </main>
  )
}

export default GetData;