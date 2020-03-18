import React from 'react'

function PersonCard(props) {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" alt="..." src={'http://localhost:5000/avatars/'+props.avatar} />
            <div className="card-body text-center">
                <h5 className="card-title">{props.name}</h5>
                <hr />
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <hr />
                <button className="btn btn-danger m-2">Delete</button>
                <button className="btn btn-success m-2">Edit</button>

            </div>
        </div>
    )
}

export default PersonCard


