"use client"

import React, {useState} from 'react'

import styles from './styles.module.css'

const GetData = () => {
    const [semesterName, setSemesterName] = useState('')
    const [rawData, setRawData] = useState('')
    const [rolls, setRolls] = useState()
    const [finalData, setFinalData] = useState([])

const handleChange = (e) =>{
    setRawData(e.target.value)
    setRolls(e.target.value.match(/\d{6}/g))

}
const handleNameChange = (e) =>{
    setSemesterName(e.target.value)
}
const handleSubmit =(event)=> {
    event.preventDefault();
}

const handlebtn = (e) =>{
    
    for(var i=0;i<=rolls.length;i++){
        if(rawData[rawData.indexOf(rolls[i])+7]==`(`){
           
           let info = {
               roll: rolls[i],
               result: {
                semesterName : rawData.slice(rawData.indexOf(rolls[i])+8 , rawData.indexOf(rolls[i])+12)
            },
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
                           result: {semesterName: rawData.slice(rawData.indexOf(rolls[i])+7,start+1)},
                           passed: false,
                       }
                       setFinalData((oldData) => [...oldData , {info}])
                       break
                   }
               }
   
           }
       }
       
       e.target.setAttribute('disabled', 'disabled')
       // e.target.styles.backgroundColor = 'gray';
    }
//     const consoleValue = () =>{
//     console.log(finalData)
    
// }

  return (
    <main>
        <div>
        <form method='POST' className={styles.form} onSubmit={handleSubmit}>
            <input className={styles.input} onChange={handleNameChange} type='text' name='semester' />
            <textarea className={styles.textArea} onChange={handleChange} placeholder='Copy the result pdf text ad past it in here'/>
            <input className={styles.btn} type='submit'  onClick={handlebtn} value='Get Data' />
        </form>
            {/* <input className={styles.btn} type='submit'  onClick={consoleValue} value='console log' /> */}

    </div>
    <div className={styles.wrapper}>
        {finalData && finalData.map((roll) => {
            return (
                <div key={roll.info.roll} id={roll.info.roll}>
                <h2>{roll.info.roll}</h2>
                <p>{roll.info.result[0]}</p>
            </div>
            )
        })}
    </div>
    
    </main>
  )
}

export default GetData;