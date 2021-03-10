import Banner from './Banner';
import './Header.css';
import Message from './Message';

export default function () {
    return (
    <header>
        <Message>Welcome on My Store</Message>
        <Banner
            className = 'opacity-50'
            style = {{border: '2px solid purple'}}
            rounded = "right" 
            source = "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            /* style = {} here would be custom props so will not work directly. We should catch from component js */
        />

    </header>
    );
}



/*<h1 style = {{border: '2px solid purple'}} >Welcome on My Store</h1>*/


