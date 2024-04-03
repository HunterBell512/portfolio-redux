import {
    Box,
    Content,
    Card,
    Columns,
    Media,
    Heading,
    Image } from 'react-bulma-components';

export default function Portfolio () {
    const styles = {
        card: {
            border: '2px solid black',
            boxShadow: "1px 5px 5px black"
        }
    }

    return (
        <Box shadowless='true' className='has-background-white has-text-black' radiusless='true'>
                <Columns>
                    <Columns.Column size='one-third'>
                        <Card style={styles.card}>
                            <Card.Image 
                                size='4by3'
                                src='./src/assets/images/project1.png'
                            />
                            <Card.Content>
                                <Media>
                                    <Media.Item renderAs='figure' align='left'>
                                        <Image 
                                            size={64}
                                            alt='64x64'
                                            src='./src/assets/images/avatar.png'
                                        />
                                    </Media.Item>
                                    <Media.Item>
                                        <Heading size={4}>3000 JS Super Quiz</Heading>
                                        <Heading subtitle size={6}>Developed by: Hunter Bell</Heading>
                                    </Media.Item>
                                </Media>
                                <Content>
                                    <i>This was my first attempt at combining all the bare essentials of frontend design together. Very archaic, but it allowed to hone my skills.</i><br/>
                                    Repo: <a href='https://github.com/HunterBell512/3000-iq-javascript-super-quiz'>Here</a><br/>
                                    Live Demo: <a href='https://hunterbell512.github.io/3000-iq-javascript-super-quiz/'>Here</a>
                                </Content>
                            </Card.Content>
                        </Card>
                    </Columns.Column>
                    <Columns.Column size='one-third'>
                    <Card style={styles.card}>
                            <Card.Image 
                                size='4by3'
                                src='./src/assets/images/project2.png'
                            />
                            <Card.Content>
                                <Media>
                                    <Media.Item renderAs='figure' align='left'>
                                        <Image 
                                            size={64}
                                            alt='64x64'
                                            src='./src/assets/images/avatar.png'
                                        />
                                    </Media.Item>
                                    <Media.Item>
                                        <Heading size={4}>Dealify</Heading>
                                        <Heading subtitle size={6}>Co-developed by: Hunter Bell</Heading>
                                    </Media.Item>
                                </Media>
                                <Content>
                                    <i>This was my first attempt at collaborating with a team working with Git, fetching data from third-party APIs, and creating a fully responsive frontend web app.</i><br/>
                                    Repo: <a href='https://github.com/HunterBell512/dealify'>Here</a><br/>
                                    Live Demo: <a href='https://hunterbell512.github.io/dealify/'>Here</a>
                                </Content>
                            </Card.Content>
                        </Card>
                    </Columns.Column>
                    <Columns.Column size='one-third'>
                    <Card style={styles.card}>
                            <Card.Image 
                                size='4by3'
                                src='./src/assets/images/project3.png'
                            />
                            <Card.Content>
                                <Media>
                                    <Media.Item renderAs='figure' align='left'>
                                        <Image 
                                            size={64}
                                            alt='64x64'
                                            src='./src/assets/images/avatar.png'
                                        />
                                    </Media.Item>
                                    <Media.Item>
                                        <Heading size={4}>Readme Generator</Heading>
                                        <Heading subtitle size={6}>Developed by: Hunter Bell</Heading>
                                    </Media.Item>
                                </Media>
                                <Content>
                                    This was my first attempt at interacting with and developing backend technologies using the Node Package Manager.
                                    This app in particular uses the Inquirer package.<br/>
                                    Repo: <a href='https://github.com/HunterBell512/readme-generator-3000'>Here</a><br/>
                                    Live Demo: Instructions for demo are featured in the repo.
                                </Content>
                            </Card.Content>
                        </Card>
                    </Columns.Column>
                    <Columns.Column size='one-third'>
                    <Card style={styles.card}>
                            <Card.Image 
                                size='4by3'
                                src='./src/assets/images/project4.png'
                            />
                            <Card.Content>
                                <Media>
                                    <Media.Item renderAs='figure' align='left'>
                                        <Image 
                                            size={64}
                                            alt='64x64'
                                            src='./src/assets/images/avatar.png'
                                        />
                                    </Media.Item>
                                    <Media.Item>
                                        <Heading size={4}>SVG Generator</Heading>
                                        <Heading subtitle size={6}>Developed by: Hunter Bell</Heading>
                                    </Media.Item>
                                </Media>
                                <Content>
                                    This was my second take at making a backend application with node. What sets this one apart from the previous example is that
                                    the use of creating and implementing classes.<br/>
                                    Repo: <a href='https://github.com/HunterBell512/svg-generator-3000'>Here</a><br/>
                                    Live Demo: Instructions for demo are featured in the repo.
                                </Content>
                            </Card.Content>
                        </Card>
                    </Columns.Column>
                    <Columns.Column size='one-third'>
                    <Card style={styles.card}>
                            <Card.Image 
                                size='4by3'
                                src='./src/assets/images/project5.png'
                            />
                            <Card.Content>
                                <Media>
                                    <Media.Item renderAs='figure' align='left'>
                                        <Image 
                                            size={64}
                                            alt='64x64'
                                            src='./src/assets/images/avatar.png'
                                        />
                                    </Media.Item>
                                    <Media.Item>
                                        <Heading size={4}>Convention Planner</Heading>
                                        <Heading subtitle size={6}>Developed by: Hunter Bell</Heading>
                                    </Media.Item>
                                </Media>
                                <Content>
                                    This was my second major attempt at collaborating with a team of my peers. This project was centered around the use of tying together frontend
                                    and backend design, creating and using a database, deploying the app to a hosting platform. <br/>
                                    Repo: <a href='https://github.com/kathylopez97/Convention-Planner'>Here</a><br/>
                                    Live Demo: <a href='https://convention-planner-f58cd02bb10c.herokuapp.com'>Here</a><br/>
                                </Content>
                            </Card.Content>
                        </Card>
                    </Columns.Column>
                </Columns>
        </Box>
    )
}