import React from 'react'
import { useSelector } from 'react-redux'
import { MapContent, WorldMap } from './MapContent.styles'
import worldMap2 from './World-Map7.png';

const Map = () => {
    // const worldMap = useSelector(({ app }) => app.displayMapImgSrc)

    return (
        <MapContent>
            <WorldMap><img id="world-map" src={worldMap2} alt="Something went wrong" /></WorldMap>
        </MapContent>
    )
}

export default Map;

