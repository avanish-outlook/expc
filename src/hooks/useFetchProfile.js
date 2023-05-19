import { View, Text } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProfileSliceSelectors } from '../redux/slice/ProfileSlice'
import { getUserProfileAsync } from '../redux/middleware/ProfileMiddleware'
import { useState } from 'react'
import { useEffect } from 'react'

const useFetchProfile = () => {
    const profileState = useSelector(ProfileSliceSelectors.selectUserProfileState);
    const dispatch = useDispatch();
    const [profile, setProfile] = useState(null);

    useEffect(() => {

        if (profileState.data !== null) {
            console.log('yes it is not null')
            setProfile(profileState.data.payload)
        }

    }, [profileState.status === 'succeed'])


    const fetchProfile = (profileId) => {
        return dispatch(getUserProfileAsync(profileId))
    }

    return { profileState, fetchProfile, profile }
}

export default useFetchProfile