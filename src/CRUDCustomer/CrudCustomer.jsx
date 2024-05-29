import './CrudCustomer.css';
import React, { useEffect, useState } from 'react'
import { loadCustomers, createCustomer, updateCustomer, deleteCustomer } from './CrudCustomerService';


const CrudCustomer = () => {

    const [CustomerData, setCustomerData] = useState([]);
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        age: '',
        status: ''
    })
    const [inputVisibles, setInputVisibles] = useState({
        id: false,
        other: false
    })
    const [buttonName, setButtonName] = useState('Useless Button');

    useEffect(() => {
        fetchData();
    }, [])


    const fetchData = async () => {
        try {
            const result = await loadCustomers();
            setCustomerData(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }





    const handleSubmitForm = async () => {
        const {id, name, age, status} = formData;
        const isActive = status === 'active';

        try {
            let res;
            if(buttonName === 'update') {
                res = await updateCustomer({ id, name, age, status: isActive });
            }else if(buttonName === 'create') {
                res = await createCustomer({ name, age, status: isActive });
            }else if(buttonName === 'delete') {
                res = await deleteCustomer(id);
            } else {
                alert('choices are not available');
            }
            alert(res)
            fetchData();
        } catch (error) {
            console.error('Error',error);
        }
    };

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }
    const handleRadioChange = (event) => {
        const choice = event.target.value;
        setInputVisibles({
            id: choice !== 'create',
            other: choice !== 'delete'
        })
        setButtonName(choice)
    }

    return (
        <div>
            <div className='firstselection'>
                {['update', 'create', 'delete'].map(choice => (
                    <div key={choice}>
                        <label className='firstselection-label' htmlFor='choice'>{choice}</label>
                        <input
                            className='firstselection-input'
                            type='radio'
                            name='choice'
                            id={choice}
                            value={choice}
                            onChange={handleRadioChange}
                        />
                    </div>
                ))}
            </div>
            <div className='view'>
                <div className='form'>

                    {inputVisibles.id && (
                        <div>
                            <label htmlFor="id">Enter Id</label>
                            <input
                                type='text'
                                name="id"
                                id="id"
                                placeholder='Id'
                                value={formData.id}
                                onChange={handleInputChange}
                            />
                        </div>
                    )}
                    {inputVisibles.other && (
                        <>
                            <div>
                                <label htmlFor="name">Enter Name :-</label>
                                <input
                                    type='text'
                                    name="name"
                                    id="name"
                                    placeholder='Name'
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="age" >Enter Age :-</label>
                                <input
                                    type='number'
                                    name='age'
                                    id='age'
                                    min={0}
                                    max={130}
                                    placeholder='Age'
                                    value={formData.age}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="active">Choose</label>
                                <select
                                    name='active'
                                    id='active'
                                    value={formData.status}
                                    onChange={handleInputChange}
                                >
                                    <option>active</option>
                                    <option>deactive</option>
                                </select>
                            </div>
                        </>
                    )

                    }



                    <div>
                        <button value={buttonName} className='submit' onClick={handleSubmitForm} >{buttonName}</button>
                    </div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Array.isArray(CustomerData) ? CustomerData.map(item =>
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.status === true ? "active" : "Not Active"}</td>
                                </tr>) :
                                <tr>
                                    <td colSpan="4">Something went wrong</td>
                                </tr>
                        }
                    </tbody>
                </table>


            </div>
        </div>
    )
}

export default CrudCustomer