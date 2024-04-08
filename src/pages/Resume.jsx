import {
    Box,
    Content,
    Container,
    Columns,
    Button } from 'react-bulma-components';
import ResumeDoc from '../../resume.pdf'

export default function Resume () {
    const styles = {
        content: {
            padding: '10px',
            border: '2px solid black',
            boxShadow: "1px 5px 5px black",
            borderRadius: "10px",
            backgroundColor: '#222233'
        },
        cHeader: {
            fontSize: '50px',
            textAlign: 'center',
            color: 'white'
        },
        bodyHeader: {
            fontSize: '75px',
            textAlign: 'center',
            paddingBottom: '50px'
        },
        text: {
            textAlign: 'center',
            listStyle: 'none',
            color: 'white',
            fontSize: '30px'
        }
    }

    return (
        <Box shadowless='true' className='has-background-white has-text-black' radiusless='true'>
            <h1 style={styles.bodyHeader}>My Skills</h1>
            <Columns>
                <Columns.Column size={'one-third'}>
                    <Content style={styles.content}>
                        <Container>
                            <h2 style={styles.cHeader}>Front-end</h2>
                            <ul>
                                <li style={styles.text}>HTML</li>
                                <li style={styles.text}>CSS</li>
                                <li style={styles.text}>JavaScript</li>
                                <li style={styles.text}>Fetch API</li>
                                <li style={styles.text}>Bulma CSS Framework</li>
                            </ul>
                        </Container>
                    </Content>
                </Columns.Column>
                <Columns.Column size={'one-third'}>
                    <Content style={styles.content}>
                        <Container>
                            <h2 style={styles.cHeader}>Back-end</h2>
                            <ul>
                                <li style={styles.text}>Node.js</li>
                                <li style={styles.text}>Express</li>
                                <li style={styles.text}>OOP</li>
                                <li style={styles.text}>Sequelize</li>
                                <li style={styles.text}>ORM</li>
                                <li style={styles.text}>MVC</li>
                            </ul>
                        </Container>
                    </Content>
                </Columns.Column>
                <Columns.Column size={'one-third'}>
                    <Content style={styles.content}>
                        <Container>
                            <h2 style={styles.cHeader}>Database / Other</h2>
                            <ul>
                                <li style={styles.text}>MongoDB</li>
                                <li style={styles.text}>PWA</li>
                                <li style={styles.text}>React</li>
                                <li style={styles.text}>Apollo Server / GraphQL </li>
                            </ul>
                        </Container>
                    </Content>
                </Columns.Column>
            </Columns>
            <Content className='has-text-centered'>
                <a href={ResumeDoc} download="hunter-bell-resume.pdf" target='_blank'>
                    <Button>Download my Resume</Button>
                </a>
            </Content>
        </Box>
    )
}