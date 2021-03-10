import logo from '../logo.svg';
import './Card.css';

export default function (props) {
    /* console.log(props.onclick); */
    return (
        <div className = "card">
            <img 
                src = {props.imgSrc}
                alt = "Something went wrong! Please try again later."
                title = "How's the scene"
            />
            <h3>{props.title}</h3> 
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, distinctio facilis dolores ullam autem ad commodi.
            </p>
            <h4>Price: ${props.price}</h4> 

            <h4 onClick = {props.onclick} >Add to Cart</h4> 
        </div>
            /*<h4 onClick = {()=>props.onclick(props.price)} >Add to Cart</h4> */
            /*<h4 onClick = {click.bind(this, 'Burhanovic')} >Add to Cart</h4> */
    );
}

/* 
let cardContent = {
    header: 'Hello World :))',
    details: 'React elements are immutable. Once you create an element, you can’t change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time.'
}
 */