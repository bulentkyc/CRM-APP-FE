import Banner from './Banner';
import './Footer.css';
import Message from './Message';

export default function () {
    return (
        <footer>
            <Banner rounded="top" source = "https://images.unsplash.com/photo-1542581509-7e87190743b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"/>  
            <br/>
            <p>
                - 2020 -
            </p>
            <Message>We're looking forward to see you again</Message>
        </footer>
    );
}