/* class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cart:[],
            products:[]
        };
    }

    componentDidMount() {
        
    }

    componentDidUpdate(){
        
    }

    render() {
        this.setState();

        return (
            <h1>{props.children}</h1>
        );
    }
}


 */



export default function (props) {
    return (
        <h1>{props.children}</h1>
    );
}

