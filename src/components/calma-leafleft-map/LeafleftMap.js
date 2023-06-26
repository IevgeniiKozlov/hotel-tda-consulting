import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const LeafleftMap = () => {
  return (
    <MapContainer style={{ height: '100%', width: '100%' }} center={[41.81860147837614, 3.064202467862416]} zoom={12} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        url='https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png'
      />
      <Marker position={[41.81860147837614, 3.064202467862416]}>
        <Popup>
          Calma Holiday Villa <br />
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default LeafleftMap;