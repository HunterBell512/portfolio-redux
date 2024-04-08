import { 
    Content, 
    Columns,
    Block, 
    Box } from 'react-bulma-components';
import 'bulma/css/bulma.min.css';

const styles = {
    heading: {
        fontSize: '50px',
        color: 'black'
    },
    image: {
        border: '3px solid black',
        borderRadius: '50%'
    }
}

export default function About() {
    return (
        <Box shadowless='true' className='has-background-white' radiusless='true'>
            <Content textAlign={"center"}>
                <h1 style={styles.heading}>About Me</h1>
                <Box shadowless='true' className='has-background-white'>
                    <Columns className='is-vcentered'>
                        <Columns.Column>
                            <Block textSize={1} className='has-text-left has-text-black'>
                                Hey there! My name is Hunter Bell. I am an aspiring web developer from
                                Smithfield, VA studying at MSU acquire and hone my skills as well as network.
                                On days that I am not working I like to read, research topics that I find
                                interesting, or play video games with my friends.
                                <br/><br/>

                                My interest in computer science started when I was very young, however I never
                                pursued my passion for it until recent years. I am learning a lot of new
                                technologies at a rapid pace, the latest of which being React, the framework
                                this website is developed with.
                                <br/><br/>

                                Nothing else really to say than to check out my projects. It will give a good
                                representation of my growth throughout the course. Thanks for stopping by!
                            </Block>
                        </Columns.Column>
                        <Columns.Column>
                            <img
                            src="../../assets/images/avatar.png"
                            alt="image of Ultra Instinct Shaggy"
                            style={styles.image}/>
                            <p className='has-text-black'>(This is an accurate picture of me, I promise)</p>
                        </Columns.Column>
                    </Columns>
                </Box>
            </Content>
        </Box>
    )
}