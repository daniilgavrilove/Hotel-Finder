import {MapContainer, Marker, TileLayer, useMap} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L, {LatLngExpression} from "leaflet";



import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import {FC, useEffect} from "react";
import styles from './Map.module.scss'
import {MapProps} from "@/entities/Map/ui/Map.props";




const DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconRetinaUrl: markerIcon2x.src,

    iconSize: new L.Point(32, 50),
    // shadowSize: new L.Point(68, 95),
    iconAnchor: new L.Point(16, 50),
    popupAnchor: new L.Point(0, -18)
});
L.Marker.prototype.options.icon = DefaultIcon;



const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

const Centerer:FC<MapProps> = ({ center,zoom }) => {
    const map = useMap();

    useEffect(() => {
        map.setView(center || [51.505, -0.09],zoom);

    }, [zoom, center, map]);

    return (
        <TileLayer
            url={url}
        />
    );
};

export const Map:FC<MapProps> = ({ center,zoom }) => {

    return (
        <MapContainer
            className={styles.Map}
        >
            <Centerer center={center} zoom={zoom} />

            {center && (
                <Marker position={center as LatLngExpression} />
            )}
        </MapContainer>
          
    )
}

