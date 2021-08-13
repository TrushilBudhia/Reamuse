import React, { useEffect, Fragment } from 'react';
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { GET_ME } from '../utils/queries';
import MapContent from '../components/MapContent'
import ButtonsContent from '../components/ButtonsContent'
import FeaturedContinent from '../components/FeaturedContinent'
import { saveApiRegions } from '../modules/app'
import '../styles/style.css'
import { Header, MapButtons, RegionInfo, Title, TitleHeader, Description, DescriptionInner, Quote } from '../styles/Dashboard.styles.jsx'

const Dashboard = () => {
    const dispatch = useDispatch()
    const dispatchSaveApiRegions = (regions) => dispatch(saveApiRegions(regions))

    useEffect(() => {
        const regionAreas = {
            africa: {
                id: '101',
                page_title: 'Africa',
                header_image: '',
                subheader: '',
                descriptionOne: 'A mysterious silence hangs in the air.',
                descriptionTwo: 'No challenge has been issued by the alien present within this region yet.',
                region_name: 'Africa',
                button_link: '/game1'
            },
            asia: {
                id: '102',
                page_title: 'Asia',
                header_image: '',
                subheader: '',
                descriptionOne: 'A mysterious silence hangs in the air.',
                descriptionTwo: 'No challenge has been issued by the alien present within this region yet.',
                region_name: 'Asia',
                button_link: '/game2',
            },
            australia: {
                id: '103',
                page_title: 'Australia - Submerged Within Mist',
                header_image: '',
                subheader: '',
                descriptionOne: 'Giant stone obelisk constructs have arrived within each of the states and territories with the arrival of the aliens. Shortly after their appearance, the obelisks began emanating an unsettling mist that has now blanketed the whole continent. Panic and uneasiness have taken over the mood of the nation.',
                descriptionTwo: 'The alien known as Eno has cast out a challenge:',
                description2: 'Aliens: Eno Otw Ehrte Ufor Eivf Ixs',
                quote: '"Memory, concentration and an open mind shall be the tools wielded within this trial. Come, bold ones, let your existence be witnessed"',
                region_name: 'Australia',
                button_link: '/flip-card-eno',
            },
            europe: {
                id: '104',
                page_title: 'Europe',
                header_image: '',
                subheader: '',
                descriptionOne: 'A mysterious silence hangs in the air.',
                descriptionTwo: 'No challenge has been issued by the alien present within this region yet.',
                region_name: 'Europe',
                button_link: '/game4',
            },
            northAmerica: {
                id: '105',
                page_title: 'North America',
                header_image: '',
                subheader: '',
                descriptionOne: 'A mysterious silence hangs in the air.',
                descriptionTwo: 'No challenge has been issued by the alien present within this region yet.',
                region_name: 'North America',
                button_link: '/game5',
            },
            southAmerica: {
                id: '106',
                page_title: 'South America',
                header_image: '',
                subheader: '',
                descriptionOne: 'A mysterious silence hangs in the air.',
                descriptionTwo: 'No challenge has been issued by the alien present within this region yet.',
                region_name: 'South America',
                button_link: '/game6',
            }
        }

        const valueArray = [regionAreas.africa, regionAreas.asia, regionAreas.australia, regionAreas.europe, regionAreas.northAmerica, regionAreas.southAmerica];

        if (valueArray) {
            dispatchSaveApiRegions(valueArray)
        }
    }, [])


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
        <Fragment>
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
                            <ButtonsContent></ButtonsContent>
                        </RegionInfo>
                        <MapContent></MapContent>
                    </MapButtons>

                </div>
            </Header>

            {/* <input id="regionsId" type="hidden" value={`[abc, 123, 533, 3532, dsgsds]`}>
            </input> */}

            <FeaturedContinent />
        </Fragment>
    );
};

export default Dashboard;
