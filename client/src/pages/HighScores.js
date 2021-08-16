import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { useQuery } from '@apollo/client';
import Auth from '../utils/auth';
import { GET_ME } from '../utils/queries';
import '../styles/style.css'
import { ContentContainer, Header, Title, TitleHeader, Content } from '../styles/HighScores.styles.jsx'

const HighScores = () => {

    // Setting up useQuery
    const { loading, data } = useQuery(GET_ME);
    console.log('data', data);
    // const userData = data?.me || {};

    // If data isn't here yet, display Loading
    if (loading) {
        return <Header><h2>Loading...</h2></Header>;
    }
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
        window.location.href = "/login";
        return false;
    }

    return (
        <ContentContainer>
            <Header>
                <Title>
                    <TitleHeader>HIGH SCORES</TitleHeader>
                </Title>
                <Content>The stars have yet to align</Content>
                <Content>Work in progress...</Content>
            </Header>
        </ContentContainer>
    );
};

export default HighScores;
