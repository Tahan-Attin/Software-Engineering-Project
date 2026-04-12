import React, {useState} from 'react';
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate} from 'react-router-dom';
const Signup = () => {
    const navigate=useNavigate();
    const [formData,setFromData] =useState({
        FullName:'',
        Email:'',
        Password:'',

    });

    const handleChange=(e) =>{
        setFromData({...formData,[e.target.name]:e.target.value});
    };

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
           const response = await fetch("http://127.0.0.1:8000/api/signup/",{
                method :'POST',
                headers:{'Content-Type':'application/json'},
                body : JSON.stringify(formData)
            });

            if(response.status===201){
                toast.success('Signup successfull! Please Login')
                setTimeout(()=>{
                    navigate('/login');

                },2000);
            }
            else{
                const data =await response.json();
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
            <h2><i className='fas fa-user-plus me-2'></i> signup</h2>
            <p className='text-muted'>Create your account to start tracking your expenses</p>
        </div>

        <form className='p-4 border rounded shadow mx-auto' style= {{maxWidth:'400px'}} onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label className='form-lable'>Full Name</label>
                <div className='input-group'>
                    <span className="input-group-text">
                        <i className="fas fa-user">

                        </i>
                    </span>
                    <input type ="text" name="FullName" value={formData.FullName} className='form-control' onChange ={handleChange} required placeholder='Enter your full name '/>

                </div>

            </div>
            <div className='mb-3'>
                <label className='form-lable'>Email</label>
                <div className='input-group'>
                    <span className="input-group-text">
                        <i className="fas fa-envelope">

                        </i>
                    </span>
                    <input type ="email" name="Email" value={formData.Email} className='form-control' onChange ={handleChange} required placeholder='Enter your email '/>

                </div>

            </div>
            <div className='mb-3'>
                <label className='form-lable'>Password</label>
                <div className='input-group'>
                    <span className="input-group-text">
                        <i className="fas fa-lock">

                        </i>
                    </span>
                    <input type ="password" name="Password" value={formData.Password} className='form-control' onChange ={handleChange} required placeholder='Create your password'/>

                </div>

            </div>

            <button type="submit" className='btn btn-primary w-100 mt-3'><i clssName='fas fa-user-plus me-2'></i>Signup</button>
                
        </form>

        <ToastContainer/>


    </div>
  )
}

export default Signup;
