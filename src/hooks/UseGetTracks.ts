import React, { useEffect, useState } from 'react'
import { api, userClient } from '../api/api'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface Track {
    trackName: string,
    artistName: string,
    img: string
}

export const UseGetTracks = () => {

    const [tracks, setTracks] = useState([])
    const [favoriteTracks, setFavoriteTracks] = useState<any[]>([])

    useEffect(() => {
        getVideos()
    }, []);

    useEffect(() => {
        storeData(favoriteTracks)
    }, [favoriteTracks]);

    const addFavorites = (item: any) => {
        const found = favoriteTracks.some(value => value.name === item.name);
        if (!found) {
            (favoriteTracks.length) > 9 && favoriteTracks.pop();
            setFavoriteTracks([item, ...favoriteTracks])
        }
    }

    const storeData = async (value: Track[]) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('favorites', jsonValue);
        } catch (e) {
            // saving error
        }
    };

    const getVideos = async () => {
        try {
            const { data } = await api.get(`/2.0/?method=geo.gettoptracks&country=mexico&api_key=${userClient.apiKey}&format=json`)
            console.log("datos ->", JSON.stringify(data.tracks.track, null, 4));
            setTracks(data.tracks.track);
        } catch (error) {

        }
    }

    return {
        tracks,
        addFavorites
    }
}
