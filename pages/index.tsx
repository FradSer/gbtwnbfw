import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
import Head from 'next/head'
import { useEffect, useState } from 'react'

import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'

const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js')

mapboxgl.accessToken =
  'pk.eyJ1IjoiZnJhZHNlciIsImEiOiJQeWlZTzZFIn0.3ysHdFYi5M4bHvG7ywM95A'

export default function Home() {
  const [pageIsMounted, setPageIsMounted] = useState(false)

  useEffect(() => {
    setPageIsMounted(true)

    const map = new mapboxgl.Map({
      container: 'my-map',
      style: 'mapbox://styles/fradser/cja7tqfpq00202ss3b4sntlmj/draft',
    })

    // Add the control to the map.
    map.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
      })
    )

    // Add zoom and rotation controls to the map.
    map.addControl(
      new mapboxgl.NavigationControl({
        showCompass: false,
      })
    )

    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      })
    )
  }, [])
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>God bless those who’d NOT been fed well.</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.8.0/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
        <h1 className="fixed bottom-2 left-2 z-50 max-w-[62%] rounded-lg bg-white p-2 text-3xl font-bold text-gray-900">
          God bless those who’d NOT been fed well.
        </h1>
        <div id="my-map" className="h-screen w-screen" />
      </main>
    </div>
  )
}
