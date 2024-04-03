import { 
    Footer, 
    Container, 
    Content, 
    Columns,
    Button } from 'react-bulma-components';
import 'bulma/css/bulma.min.css';

export default function Foot () {
    return (
        
        <Footer style={{ background: '#0000'}}>
            <Container>
                <Content>
                    <Columns>
                        <Columns.Column className='has-text-centered is-hover'>
                            <Button textSize={1} color={'link'} text={true}>
                                <a href="https://github.com/HunterBell512">Github</a>
                            </Button>
                        </Columns.Column>
                        <Columns.Column className='has-text-centered'>
                            <Button textSize={1} color={'link'} text={true}>
                                <a href="https://www.linkedin.com/in/hunter-bell-27ab4620a/">LinkedIn</a>
                            </Button>
                        </Columns.Column>
                        <Columns.Column className='has-text-centered'>
                            <Button textSize={1} color={'link'} text={true}>
                                <a href="https://www.codewars.com/users/HunterBell512">CodeWars</a>
                            </Button>
                        </Columns.Column>
                    </Columns>
                </Content>
            </Container>
        </Footer>
    )
}