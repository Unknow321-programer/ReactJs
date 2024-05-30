import './SignUp.css'

const SignUp = () => {
    return (
        <div>
            <div className='view'>
                <div className='userform'>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input type='email' name='email' id='email' placeholder='Johan@domain' />  
                    </div>
                    <div>
                        <label htmlFor='name'>Name</label>
                        <input type='text' name='name' id='name' placeholder='John Deo' />
                    </div>
                    <div>
                        <label htmlFor='age'>Age</label>
                        <input type='date' name='age' id='age' placeholder='DD-MM-YYYY' />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input type='password' name='password' id='password' placeholder='Pass@123' />
                    </div>
                    <div>
                        <label htmlFor='confirmPassword'>Confirm Password</label>
                        <input type='password' name='confirmPassword' id='confirmPassword' placeholder='Pass@123' />
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