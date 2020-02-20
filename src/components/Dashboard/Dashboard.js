import React,{useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

function Dashboard() {
    const [state, setstate] = useState('')

        axios.get('http://localhost:5000/api/dashboard', 
        {headers: {'x-auth-token':localStorage.getItem('token')}})
        .then(function (response) {
            console.log(response);
            if (response.data.status == 'success') {
                setstate(response.data.message);
            }else{
                localStorage.removeItem('token');
                return <Redirect to='/signin' />
            }
        })
        .catch(function (error) {
            console.log(error);
        });
        

    return(
        <div>
            {state}
        </div>
    )

    
    
}

export default Dashboard
