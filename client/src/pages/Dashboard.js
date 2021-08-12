import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { GET_ME } from '../utils/queries';
import '../styles/style.css'
import MapContent from '../components/MapContent'
import ButtonsContent from '../components/ButtonsContent'
import { Header, MapButtons, RegionInfo, Title, TitleHeader, Description, DescriptionInner, Quote } from '../styles/Dashboard.styles.jsx'

const Dashboard = () => {
    // Setting up useQuery
    const { loading, data } = useQuery(GET_ME);
    const userData = data?.me || {};

    // If data isn't here yet, display Loading
    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <Header>
            <div className="container">
                <MapButtons>
                    <RegionInfo>
                        <Title>
                            <TitleHeader>The world has been invaded!</TitleHeader>
                        </Title>
                        <Description>
                            <DescriptionInner>
                                Mysterious aliens have arrived on Earth and with their perplexing technologies, they have rendered humanities defenses ineffectual.
                            </DescriptionInner>
                            <DescriptionInner>
                                The aliens have occupied six of the world's continents and with their abidance have issued a challenge to the world's inhabitants:
                            </DescriptionInner>
                            <Quote>
                                "Partake in our activities of mental faculty if you wish to save this world"
                            </Quote>
                            <DescriptionInner>
                                Help protect the world by overcoming the challenges the space denizens have set!
                            </DescriptionInner>
                        </Description>

                    </RegionInfo>
                    <MapContent></MapContent>
                </MapButtons>
                <ButtonsContent></ButtonsContent>
            </div>
        </Header>
    );
};

export default Dashboard;
