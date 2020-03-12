import React,{useState, useEffect} from 'react';
import axios from 'axios';

function Dashboard(props) {
    const [state, setstate] = useState('')
    console.log(props);

        /* axios.get('http://localhost:5000/api/dashboard', 
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
        }); */
        

    let logOut = () => {
        localStorage.removeItem('token');
        props.history.push('/signin');
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(e.target.file.files, e.target.name.value, e.target.email.value, e.target.phone.value, e.target.notes.value);

        axios.post('http://localhost:5000/api/dashboard/newPerson',
        {
            file:e.target.file.files,
            name:e.target.name.value, 
            email:e.target.email.value,
            phone:e.target.phone.value,
            notes:e.target.notes.value
        },
        {
            headers: {
                'x-auth-token':localStorage.getItem('token'),
                'Content-Type': 'multipart/form-data'
            }
        })
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
        

    }

    return(
        <div className="d-flex">
            <div className="col-md-4 bg-info vh-100">
            <form onSubmit={submitHandler}>
                <h5 className="text-light">
                    Photo:
                </h5>

                <input name="file" className="d-block form-control-file mb-3" type="file" id="exampleFormControlFile1"/>
                
                <input name="name" type="text" class="form-control mb-3" placeholder="Name"/>

                <input name="email" type="email" class="form-control mb-3" placeholder="email"/>

                <input name="phone" type="text" class="form-control mb-3"  placeholder="Phone Number"/>

                <textarea name="notes" class="form-control mb-3" rows="3" placeholder="Add some note..."></textarea>

                <button className="btn btn-light btn-block">ADD</button>
            </form>

            </div>
            <div className="col-md-8">
                <button className='btn btn-primary' onClick={logOut}>
                    Logout
                </button>
                {state}

                <div className="card" style={{ width: "18rem" }}>

<img className="card-img-top" alt="..." />
<div className="card-body text-center">
    <h5 className="card-title">Milad Mosadegh</h5>
    <hr />
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <hr />
    <button className="btn btn-danger m-2">Delete</button>
    <button className="btn btn-success m-2">Edit</button>

</div>
</div>
            </div>
        </div>
    )

    
    
}

export default Dashboard
