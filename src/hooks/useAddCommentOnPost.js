import { View, Text } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PostsSliceSelectors } from '../redux/slice/PostsSlice'
import { AddCommentToPostAsync } from '../redux/middleware/PostsMiddleware'

const useAddCommentOnPost = () => {

  const addCommentState = useSelector(PostsSliceSelectors.selectAddCommentState);

  const dispatch = useDispatch()

  const AddComment = (payload) => {
    return dispatch(AddCommentToPostAsync(payload))
  }

  return { addCommentState, AddComment }
}

export default useAddCommentOnPost