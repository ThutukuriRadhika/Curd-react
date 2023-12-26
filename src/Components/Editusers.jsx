import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import style from "./home.module.css"
import axios from 'axios'


const Editusers = () =>{
    let [name,setName] = useState("")
    let [salary,setSalary] = useState("")
    let [company,setCompany] = useState("")

    let {index} = useParams()
    // console.log(index);
    let navigate = useNavigate()

    
    useEffect(()=>{
        axios.get(`http://localhost:3000/content/${index} `)
        .then((response)=>{
            console.log(response.data);
            setName(response.data.name)
            setSalary(response.data.salary)
            setCompany(response.data.company)

        })
    },[])

    let nameData=(e)=>{
        setName(e.target.value)
    }
    let salaryData=(e)=>{
        setSalary(e.target.value)
    }
    let companyData=(e)=>{
        setCompany(e.target.value)
    }
    let formHandle=(e)=>{
        e.preventDefault()
     let payload= {name,salary,company}
     axios.put(`http://localhost:3000/content/${index} `,payload)
     .then(()=>{
        console.log("Data has been Updated")
     })
      navigate("/user")
    }

    return(
        // <div>Editusers</div>
        <div id={style.Myform}>
        <form>
            <table>
        
        {/* <div>CreateUsers</div> */}
        <tr>
            <td><label htmlFor="">Name</label></td>
            <td><input type="text" value={name} onChange={nameData} /></td>
        </tr>
        <tr>
            <td><label htmlFor="">Salary</label></td>
            <td><input type="text" value={salary} onChange={salaryData} /></td>
        </tr>
        <tr>
            <td><label htmlFor="">Company</label></td>
            <td><input type="text"  value={company}  onChange={companyData}/></td>
        </tr>
        <tr id={style.btn}>
        <td colSpan="2"><button onClick={formHandle} >Submit</button></td>
        </tr>
        </table>
        </form>
        </div>
    )
}
export default Editusers