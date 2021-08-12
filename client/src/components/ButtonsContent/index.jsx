import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ButtonsContent, ButtonField, ImgStyled } from './ButtonsContent.styles'
import { hoverMapRegion, selectMapRegion } from '../../modules/app'

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

const ButtonContent = () => {
    const regionSelect = useSelector(({ app }) => app.regionSelect)
    const dispatch = useDispatch()
    const dispatchHoverMapRegion = (url) => dispatch(hoverMapRegion(url))
    const dispatchSelectMapRegion = (label, url) => dispatch(selectMapRegion(label, url))

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