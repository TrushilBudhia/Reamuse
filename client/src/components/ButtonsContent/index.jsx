import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ButtonsContent, ButtonField, ImgStyled } from './ButtonsContent.styles'
import { hoverMapRegion, selectMapRegion } from '../../modules/app'

// import worldMapAfrica from './World-Map-Africa.png';
// import worldMapAsia from './World-Map-Asia.png';
// import worldMapAustralia from './World-Map-Australia.png';
// import worldMapEurope from './World-Map-Europe.png';
// import worldMapNorthAmerica from './World-Map-North-America.png';
// import worldMapSouthAmerica from './World-Map-South-America.png';

// import { useStoreContext } from '../../utils/GlobalState';

const buttonList = [
    {
        label: 'Africa',
        url: '/assets/images/World-Map-Africa.png'
    },
    {
        label: 'Asia',
        url: '/assets/images/World-Map-Asia.png'
    },
    {
        label: 'Australia',
        url: '/assets/images/World-Map-Australia.png'
    },
    {
        label: 'Europe',
        url: '/assets/images/World-Map-Europe.png'
    },
    {
        label: 'North America',
        url: '/assets/images/World-Map-North-America.png'
    },
    {
        label: 'South America',
        url: '/assets/images/World-Map-South-America.png'
    },
]

console.log('state', useSelector);

const ButtonContent = () => {
    const regionSelect = useSelector(({ app }) => app.regionSelect)
    const dispatch = useDispatch()
    const dispatchHoverMapRegion = (url) => dispatch(hoverMapRegion(url))
    const dispatchSelectMapRegion = (label, url) => dispatch(selectMapRegion(label, url))

    // const [state, dispatch] = useStoreContext();

    return (
        <ButtonsContent>
            {buttonList
                .map(({ label, url }, id) => (
                    <b>
                        <ButtonField
                            key={id}
                            onClick={() => dispatchSelectMapRegion(label, url)}
                            onMouseEnter={() => dispatchHoverMapRegion(url)}
                            onMouseLeave={() => dispatchHoverMapRegion('')}
                            data-image-source={url}
                            isSelected={label === regionSelect}
                        >
                            {label}
                        </ButtonField>
                        <ImgStyled key={id} src={url} />
                    </b>
                ))
            }
        </ButtonsContent>
    )
}

export default ButtonContent;