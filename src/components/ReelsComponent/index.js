import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { videoList } from '../../__mock_data__/Database'
import SingleReel from './SingleReel';
import useFeed from '../../hooks/useFeed';
/**
 * 
 * @returns 
 * 
 */
const ReelsComponent = () => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const handleChangeIndexValue = ({ index }) => {
        setCurrentIndex(index)
    }

    const feed = useFeed();
    const [page, setPage] = useState(0);

    const [reelsList, setReelsList] = useState([]);

    useEffect(() => {
        const disp = feed.fetchReels(page);

        return () => {
            disp.abort();
        }
    }, [page])


    useEffect(() => {
        if (feed.reelsFeedState.data?.payload) {
            console.log('reels feed................................', feed.reelsFeedState.data.payload)
            const data = feed.reelsFeedState.data.payload;
            if (data.currentPage === page) {
                if (data.doc.length > 0)
                    setReelsList(prev => [...prev, ...data.doc])
            }
        }
    }, [feed.reelsFeedState.status === 'succeed'])


    useEffect(() => {
        console.log({ reelsList })
    }, [reelsList])



    function FetchMoreData() {
        console.log('loading more data....')
        setPage(p => p + 1)
    }

    return (
        <SwiperFlatList
            vertical={true}
            onChangeIndex={handleChangeIndexValue}
            data={reelsList}
            keyExtractor={(item, index) => index}
            renderItem={
                ({ item, index }) => <SingleReel

                    item={item}
                    index={index}
                    currentIndex={currentIndex} />
            }
            onEndReachedThreshold={0.4}
            onEndReached={FetchMoreData}
        />
    )
}

export default ReelsComponent

const styles = StyleSheet.create({})