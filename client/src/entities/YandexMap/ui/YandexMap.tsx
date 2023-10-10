import {FC} from "react";
import cn from 'classnames'
import {YMaps, Map, Placemark} from "@pbe/react-yandex-maps";
import {YandexMapProps} from './YandexMap.props'

export const YandexMap: FC<YandexMapProps> = (props) => {

    const {zoom,center} = props

    return (
                <div
                    style={{
                        borderRadius:'5rem'
                    }}>
            <YMaps  >

                    <Map
                        width="100%"
                        height="35vh"
                        state={{
                        center: center || [55.75, 37.57],
                        zoom


                    }} >
                        {center && (
                            <Placemark
                                geometry={center}
                                properties={{

                                    balloonContentBody:
                                        "This is balloon loaded by the Yandex.Maps API module system",
                                }}
                            />
                        )}
                    </Map>


            </YMaps>
                </div>
    );
};