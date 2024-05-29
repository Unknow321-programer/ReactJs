import React, { useEffect, useState } from 'react'
import { LoadData } from './FirstComponentService';
const FistComponent = () => {
  const [data, setData] = useState([]);
  const [loading , setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await LoadData();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();

  }, [])
  return (
    <div>
      {
        loading ? <h2>Page is Loading ...</h2>:
        <ul >
        {
          typeof data === 'object' ? data.map((item) =>
            <li key={item.id}>
              <li >{item.name}</li>
              <li>{item.status === true ? 'Active' : 'Inactive'}</li>
              <li>{item.age}</li>
            </li>) :
            <h1>getting error</h1>
        }
      </ul>
      }
      
      
    </div>
  )
}

export default FistComponent