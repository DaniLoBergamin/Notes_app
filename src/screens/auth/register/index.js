import React, { Fragment } from 'react';
import Header from "../../../components/header";
import { Column, Section, Title, Container, Card } from "rbx";
// import LogoImage from '../../../assets/images/React_JS.png';
import "../../../styles/auth.scss";
import RegisterForm from "../../../components/auth/register_form";


const RegisterScreen= () => (
    <Fragment>
        <Header/>
            <Section size="medium" className="auth">
                <Container>
                    <Column.Group centered>
                        <Column size={3}>
                            <Card>
                                <Card.Content>
                                    <Section>
                                        <Column.Group centered>
                                            {/* <Column size={12}>
                                                <img src={LogoImage}/>
                                            </Column> */}
                                            <Column.Group>

                                            </Column.Group>
                                            <Column size={8}>
                                                <Title size={6} className="has-text-grey has-text-centered">
                                                    Make your notes
                                                </Title>
                                            </Column>
                                        </Column.Group>
                                        <RegisterForm/>
                                    </Section>
                                </Card.Content>
                            </Card>
                        </Column>
                    </Column.Group>
                </Container>
            </Section>
    </Fragment>
);

export default RegisterScreen;