import { useState } from 'react';
import { Box, Form, Container, Button } from 'react-bulma-components';

export default function Contact () {
    let [formName, setFormName] = useState('');
    let [formNameTooltip, setNameTooltip] = useState('');
    let [formEmail, setFormEmail] = useState('');
    let [formEmailTooltip, setEmailTooltip] = useState('');
    let [formInput, setFormInput] = useState('');
    let inputFieldClasses = 'has-background-white has-text-black';
    let labelFieldClasses = 'has-text-black';

    const styles = {
        h2: {
            color: 'black',
            textAlign: 'center',
            fontSize: '50px'
        }
    }

    const validateEmail = (email) => {
        let regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return regex.test(email);
    };

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        console.log(name);

        return name === 'name' ? setFormName(value) : setFormEmail(value);
    }

    const handleBlur = (e) => {
        const { name, value } = e.target;
        console.log(name)
        return name === 'name' ? checkName(value) : checkEmail(value)
    }

    const handleFocus = (e) => {
        const { name } = e.target;
        return name === 'name' ? setNameTooltip('') : setEmailTooltip('')
    }

    const checkName = (val) => {
        if (!val) {
            setNameTooltip('This field is required!');
        }
    }

    const checkEmail = (val) => {
        if (!val) {
            setEmailTooltip('This field is required!');
        } else if (!validateEmail(val)) {
            setEmailTooltip('Email is invalid!');
        } else {
            setEmailTooltip('');
        }
    }

    const allowSubmit = (name, email) => {
        if (!name || !email) {
            return <Button disabled='true'>Submit</Button>
        }
        return <Button color='success'>Submit</Button>
    }

    return (
        <Box shadowless='true' radiusless='true' className='has-background-white'>
            <h2 style={styles.h2}>Contact Me!</h2>
            <Container>
                <form>
                    <Form.Field>
                        <Form.Label className={labelFieldClasses}>Name</Form.Label>
                        <Form.Control>
                            <Form.Input
                                value={formName}
                                name='name'
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                onFocus={handleFocus}
                                className={inputFieldClasses}
                                placeholder="Inside a field set"
                            />
                        </Form.Control>
                        <Form.Help color="danger">{formNameTooltip}</Form.Help>
                    </Form.Field>

                    <Form.Field>
                        <Form.Label className={labelFieldClasses}>Email</Form.Label>
                        <Form.Control>
                            <Form.Input
                                value={formEmail}
                                name='email'
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                onFocus={handleFocus}
                                className={inputFieldClasses}
                                placeholder='Your email here...'
                            />
                        </Form.Control>
                        <Form.Help color="danger">{formEmailTooltip}</Form.Help>
                    </Form.Field>

                    <Form.Field>
                        <Form.Label className={labelFieldClasses}>Message</Form.Label>
                        <Form.Control>
                            <Form.Textarea
                                value={formInput}
                                onChange={(e) => setFormInput(e.target.value)}
                                className={inputFieldClasses}
                                placeholder='Enter your message to me here!'
                            />
                        </Form.Control>
                    </Form.Field>

                    <Form.Field>
                        <Form.Control>
                            {allowSubmit(formName, formEmail)}
                        </Form.Control>
                    </Form.Field>
                </form>
            </Container>
        </Box>
    )
}