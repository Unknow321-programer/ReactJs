import { useState } from 'react';
import './LoginUser.css'
import { checkUser } from './UserService.js';
const LoginUser = () => {

    const [formInputs, setFormInputs] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = async () => {
        const {email, password} = formInputs;
        
        console.log(typeof email+" "+typeof password);
        // verify user is existed or not !
        try{
            const result = await checkUser(email, password);
            console.log(result);
            if(result === '' ) {
                alert('something went wrong with given details');
            }
            else {
                alert("Welcome Again (: "+result.name);
            }
        }catch(e){
            alert(e.message);
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
                        <label htmlFor="email">Username</label>
                        <input type="text"
                            name="email"
                             id="email" 
                             placeholder="John_@_213" 
                             onChange={handleChanges}
                             />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" 
                        name="password" 
                        id="password" 
                        placeholder="Password" 
                        onChange={handleChanges}
                        />
                    </div>
                    <div>
                        <a href="#">Already! Have A Account?</a>
                    </div>
                    <div>
                        <button type="sumbit" id="submit" onClick={handleSubmit}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default LoginUser;