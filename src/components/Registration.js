import React, {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

function Registration() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username : '',
        email : '',
        password : '',
        confirmPassword : ''
    })

    const [errors, setErrors] = useState({})
    const [isSubmit, setIssubmit] = useState(false);

    useEffect(() => {
        if(isSubmit){
            navigate('/countries')
        }
    }, [formData,navigate,isSubmit]);

    const handleChange = (e) => {
        setFormData({...formData, [e.target_name] : e.target_value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if(!formData.username.trim()){
            newErrors.username = "Username is empty";
        }

        if(!formData.email.trim()){
            newErrors.email = "Email is empty";
        }

        if(!formData.password.trim()){
            newErrors.password = "Password is empty";
        }

        if(formData.password != formData.confirmPassword){
            newErrors.confirmPassword = "Pssword doesnt match";
        }

        setErrors(newErrors);
        if(Object.keys(newErrors).length === 0){
            setIssubmit(newErrors)
        }
    }
  return (
    <div>
        <h1>Registration </h1>
        {Object.keys(errors).map((key) => {
            <p key={key}>
                {errors[key]}
            </p>
        })}
        <form onSubmit={handleSubmit}>
            <label> Username :</label>
            <input type= "text" name="username" value={formData.username} onChange = {handleChange}/>

            <label> Email :</label>
            <input type= "email" name="email" value={formData.email} onChange = {handleChange}/>

            <label> Password :</label>
            <input type= "password" name="password" value={formData.password} onChange = {handleChange}/>

            <label> Confirm Password :</label>
            <input type= "password" name="confirmPassword" value={formData.confirmPassword} onChange = {handleChange}/>

            <button type="submit"> Submit </button>

        </form>
    </div>
  )
}

export default Registration