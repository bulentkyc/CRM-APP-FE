import React,{useState, useEffect} from 'react';
import axios from 'axios';

function Dashboard(props) {
    const [state, setstate] = useState('')

        axios.get('http://localhost:5000/api/dashboard', 
        {headers: {'x-auth-token':localStorage.getItem('token')}})
        .then(function (response) {
            console.log(response);
            if (response.data.status == 'success') {
                setstate(response.data.message);
            }else{
                localStorage.removeItem('token');
                props.history.push('/signin');
            }
        })
        .catch(function (error) {
            console.log(error);
            props.history.push('/signin');
        });
        

    return(
        <div>
            {state}
        </div>
    )

    
    
}

export default Dashboard
