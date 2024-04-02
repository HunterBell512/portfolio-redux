import Nav from './Nav';
import 'bulma/css/bulma.min.css';

export default function Header () {
    return (
        <div>
            <h1 className={'has-text-centered is-size-1 has-text-weight-bold'}>Hunter Bell - The Bell Tower</h1>
            <Nav />
        </div>
    )
}