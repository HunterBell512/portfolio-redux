import { Link, useLocation } from 'react-router-dom';
import { Navbar } from 'react-bulma-components';
import 'bulma/css/bulma.min.css';
const styles = {
    activeTab: {
        background: "white",
        border: "1px solid white",
        borderTopRightRadius: "10px",
        borderTopLeftRadius: "10px"
    }
}

export default function Nav () {
    let currentLocation = useLocation().pathname;

    return (
        <Navbar alignContent='center'>
            <Navbar.Container align='left'>
                <Navbar.Item style={currentLocation === '/' ? styles.activeTab : {}}>
                    <Link
                        to='/'
                    >
                        About Me
                    </Link>
                </Navbar.Item>
                <Navbar.Item style={currentLocation === '/portfolio' ? styles.activeTab : {}}>
                    <Link
                        to='/portfolio'
                    >
                        Portfolio
                    </Link>
                </Navbar.Item>
                <Navbar.Item>
                    Projects
                </Navbar.Item>
                <Navbar.Item>
                    Contact
                </Navbar.Item>
            </Navbar.Container>
        </Navbar>
    )
}