import './Banner.css';

let bottom = {
    borderBottomLeftRadius: '25px',
    borderBottomRightRadius: '25px'
}

let top = {
    borderTopLeftRadius: '25px',
    borderTopRightRadius: '25px'
}

let left = {
    borderTopLeftRadius: '25px',
    borderBottomLeftRadius: '25px'
}

let right = {
    borderTopRightRadius: '25px',
    borderBottomRightRadius: '25px'
}

let rounded = {};

export default function (props) {

    switch (props.rounded) {
    case 'top':
        rounded = top
        break;

    case 'bottom':
        rounded = {...bottom}
        break;

    case 'left':
        rounded = {...left}
        break;

    case 'right':
        rounded = {...right}
        break;

    default:
        break;
    }

    return (
        <img
            style = {{...props.style, ...rounded}}
            className = {"banner " + props.className}
            src = {props.source}
            alt = "Something went wrong! Please try again later."
            title = "How's the scene"
        /> 
    );
    //style = {props.rounded=='bottom'?bottom:props.rounded=='top'?top:null}
}


// ternary operator syntax: condition?true:false