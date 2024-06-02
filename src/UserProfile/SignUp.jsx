import './SignUp.css'
import { useState } from 'react'
import { createUser } from './UserService.js'

const SignUp = () => {
    const [formInputs, setFormInputs] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        dob: ''
    })

    const handleSubmit = async () => {
        const { name, email, password, confirmPassword, dob} = formInputs;

        try {
            const res = await createUser(name, email, password)
        }catch(e) {
            console.log(e.message);
        }
    
    }

    const handleChanges = (event) => {
        setFormInputs({
            ...formInputs,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div>
            <div className='view'>
                <div className='userform'>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            name='email'
                            id='email'
                            placeholder='Johan@domain'
                            onChange={handleChanges}
                        />
                    </div>
                    <div>
                        <label htmlFor='name'>Name</label>
                        <input
                            type='text'
                            name='name'
                            id='name'
                            placeholder='John Deo'
                            onChange={handleChanges}
                        />
                    </div>
                    <div>
                        <label htmlFor='age'>dob</label>
                        <input
                            type='date'
                            name='age'
                            id='age'
                            placeholder='DD-MM-YYYY'
                            onChange={handleChanges}
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            name='password'
                            id='password'
                            placeholder='Pass@123'
                            onChange={handleChanges}
                        />
                    </div>
                    <div>
                        <label htmlFor='confirmPassword'>Confirm Password</label>
                        <input 
                        type='password' 
                        name='confirmPassword' 
                        id='confirmPassword' 
                        placeholder='Pass@123' 
                        onChange={handleChanges}
                        />
                    </div>
                    <div>
                        <button type='submit' id='submit'>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;