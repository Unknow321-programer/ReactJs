import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [employees, setEmployees] = useState([]);
  const [employee , setEmployee] = useState();
  const [editableContent, setEditableContent] = useState(false);
  const [tableRowstyle, setTableRowStyle] = useState({color:"white", background:"pink"});
  const SelectedRow = {color:"black", background:"pink"};
  let selectiveBool = true;

  let employeeDetails = employees;
  
  const handleCreate = (event) => {
    const name= document.getElementById("name").textContent;
    const age = document.getElementById('age').textContent;
    const department = document.getElementById("department").textContent;
    console.log(name," ",age," ",department);
    const obj = {"name":name,"age":parseInt(age),"department":department};
    setEmployee(obj);
    saveData(employee);
    loadData();
  }

  const handleDelete = () => {

  }

  const handleUpdate = () => {
    setEditableContent(false);
    updateData(employeeDetails);
    alert("changes are done");
  }

  const handleEdit = () => {
    setEditableContent(true);
    alert("after the edited please click on the save button (: for accurate saving the data");
  }


  const handleRowDataChange = (event) => {
    const content = event.target.textContent;
    const name = event.target.id;
    const employeeIndex = parseInt(name.charAt(name.length-1))-1;
    console.log(employeeIndex);

    if(name.charAt(0) === 'a') {
      employeeDetails[employeeIndex].age = parseInt(content);
    }
    else if(name.charAt(0) === 'n') {
      employeeDetails[employeeIndex].name = content;
    }
    else {
      employeeDetails[employeeIndex].department = content;
    }
  }

  const handleSelectedRow = (event) => {
    const index = parseInt(event.target.id.charAt(event.target.id.length-1))-1;
    console.log(index);
    selectiveBool=false;

  }

  useEffect(() => {
    loadData();
  }, [])
  
  const loadData = () => {
    axios.get("http://localhost:8080/emp/all_emp")
    .then((res) => {
      setEmployees(res.data);
      console.log(res.data);
    }
    ).catch(err =>
      console.log("something else during get ",err)
    )
    
  }

  const saveData = (employee) => {
    axios.post("http://localhost:8080/emp/save_Employee", JSON.stringify(employee), {
      headers: {
          'Content-Type': 'application/json'
      }
  })
    .then((res) => {
      console.log(res.data);
    }).catch((err) => {
      console.log("something else during post",err);
    })
  }

  const updateData = (employees) => {
    axios.put("http://localhost:8080/emp/update_employee", employees)
    .then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log("while updating data : ",err);
    })
  }


  return (
    <>
      <table>
        <tr>
          <th>Em Id</th>
          <th>Name</th>
          <th>Age</th>
          <th>Department</th>
        </tr>
        {
          employees.map( (item) =>
            <tr key={item.id} onClick={handleSelectedRow} style={ selectiveBool ?tableRowstyle:SelectedRow}>
            <td >{item.id}</td>
            <td onKeyUp={handleRowDataChange} contentEditable={editableContent} name={"name"+item.id} id={"name"+item.id}>{item.name}</td>
            <td onKeyUp={handleRowDataChange} contentEditable={editableContent} name={"age"+item.id} id={"age"+item.id}>{item.age}</td>
            <td onKeyUp={handleRowDataChange} contentEditable={editableContent} name={"department"+item.id} id={"department"+item.id}>{item.department}</td>
            </tr>
          )
          
        }
        <tr>
          <td></td>
          <td name="name" id='name' contentEditable></td>
          <td name="age" id='age' contentEditable></td>
          <td name="department" id='department' contentEditable></td>
        </tr>
      </table>
      <button 
      onClick={handleEdit}
      >Edit</button>

      <button
      onClick={handleCreate}
      > Create</button>

      <button
      > Delete</button>

      <button
      onClick={handleUpdate}
      > update</button>
    </>
  );
}

export default App;
