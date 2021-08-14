import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import '../../styles/style.css'
import { FeaturedContinentLanding, FeaturedContent, ArrowUpContainer, ArrowUp, ContinentHeader, SubHeader, Description, Quote, HorizontalLine, ButtonLight } from './FeaturedContinent.styles.jsx'


const ContinentChallenge = () => {
    const regions = useSelector(({ app }) => app.regions)
    const regionSelected = useSelector(({ app }) => app.regionSelect)
    let regionPost = {}
    let regionPostObj = {}

    if (regionSelected) {
        regionPost = regions.find(region => region.region_name === regionSelected)

        regionPostObj = {
            "id": regionPost.id,
            "pageTitle": regionPost.page_title,
            "subHeader": regionPost.subheader,
            "descriptionOne": regionPost.descriptionOne,
            "descriptionTwo": regionPost.descriptionTwo,
            "quote": regionPost.quote,
            "gameLink": regionPost.button_link,
            "regionName": regionSelected,
        }
    }

    if (Object.keys(regionPostObj).length === 0) {
        return null
    }

    return (
        <FeaturedContinentLanding>
            <div className="feature-continent-landing" >
                {/* <CloseBtn><div className="close-btn" ></div></CloseBtn> */}
                <ArrowUpContainer>
                    <ArrowUp><div className="arrow-up"></div></ArrowUp>
                </ArrowUpContainer>
                <FeaturedContent key={regionPostObj.id}>
                    <div className="content">
                        <ContinentHeader><div className="header">{regionPostObj.pageTitle}</div></ContinentHeader>
                        <SubHeader><div className="description-one">{regionPostObj.subHeader}</div></SubHeader>
                        <Description><div className="description-one">{regionPostObj.descriptionOne}</div></Description>
                        <Description><div className="description-two">{regionPostObj.descriptionTwo}</div></Description>
                        <Quote>{regionPostObj.quote}</Quote>
                        <Link to={regionPostObj.gameLink} className="flex-center">
                            <ButtonLight>
                                Challenge
                            </ButtonLight>
                        </Link>
                        <HorizontalLine>
                            <div className="line">
                                <hr />
                            </div>
                        </HorizontalLine>
                    </div>
                </FeaturedContent>
            </div>
        </FeaturedContinentLanding>
    )
}

export default ContinentChallenge;
