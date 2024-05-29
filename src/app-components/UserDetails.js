import './UserDetails.css';

function UserDetails(props) {
    // let name="Saurabh gade";
    // let emailId = "gadesaurabh22@gmail.com"
    return (
        <div className="text-center">
            <h1>Some Bank details are display here :</h1>
            <p>User Name :{props.name} and </p>
            <p>Email Id : {props.emailId}</p>
        </div>
    );
}

export default UserDetails;