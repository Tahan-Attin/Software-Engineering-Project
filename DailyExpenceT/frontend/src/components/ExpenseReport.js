import React, {useState,useEffect} from 'react';
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate} from 'react-router-dom';

const ExpenseReport = () => {

    const navigate=useNavigate();
            const [formData,setFromData] =useState({
                ExpenseDate :'',
                ExpenseTtem :'',
                ExpenseCost :'',
        
            });
    
           const userId = localStorage.getItem('userId');
           useEffect(()=>{
            if(!userId){
                navigate('/login')
            }
    
           },[]);
        
            const handleChange=(e) =>{
                setFromData({...formData,[e.target.name]:e.target.value});
            };
        
            const handleSubmit = async(e)=>{
                e.preventDefault();
                try{
                   const response = await fetch("http://127.0.0.1:8000/api/add_expense/",)
                    
                    const data =await response.json();
        
                    if(response.status===201){
                        toast.success(data.message)
                        setTimeout(()=>{
                            navigate('/dashboard');
        
                        },2000);
                    }
                    else{
                       
                        toast.error(data.message);
                    }
                    
                }
                catch(error){
                    console.error('Error:',error);
                    toast.error('Something went wrong .try again')
        
                }
        
            };
  return (
     <div className='container mt-5'>
            <div className='text-center mb-4'>
                <h2><i className='fas fa-file-invoice-dollar me-2'></i>Datewise Expense Report</h2>
                <p className='text-muted'>Search and analyze your expense between two date</p>
            </div>
    
            <form className='row' onSubmit={handleSubmit}>
                <div className='col-md-4'>
                    
                    <div className='input-group mb-3'>
                        <span className="input-group-text">
                            <i className="fas fa-calendar-alt">
    
                            </i>
                        </span>
                        <input type ="date" name="fromdate" value={formData.ExpenseDate} className='form-control' onChange ={handleChange} required />
    
                    </div>
            </div>
            <div className='col-md-4'>
                    
                    <div className='input-group mb-3'>
                        <span className="input-group-text">
                            <i className="fas fa-calendar-alt">
    
                            </i>
                        </span>
                        <input type ="date" name="todate" value={formData.ExpenseDate} className='form-control' onChange ={handleChange} required />
    
                    </div>
            </div>               
               
    
                <div className='col-md-4'>
                    <button type="submit" className='btn btn-primary w-100 '><i className='fas fa-search'></i>Search</button>
                </div>
                    
            </form>
    
            <ToastContainer/>
    
    
        </div>
  )
}

export default ExpenseReport;
