import './UserProfiles.css'

const UserProfile = () => {
    return (
        <div>
            <div className='userform'>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" placeholder="John_@_213" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" id="password" placeholder="Password" />
                </div>
                <div>
                    <a href="#">Already! Have A Account?</a>
                </div>
                <div>
                    <button type="sumbit" id="submit">Login</button>
                </div>
            </div>
        </div>
    );
}
export default UserProfile;