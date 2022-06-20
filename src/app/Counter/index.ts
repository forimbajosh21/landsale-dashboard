import { createSlice } from '@reduxjs/toolkit'

interface InitialState {
  counter: number
}

const initialState: InitialState = {
  counter: 0,
}

const slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += state.counter
    },
    decrement: (state) => {
      state.counter -= state.counter
    },
  },
})

/**
 * example code for this
 *
 * import { increment } from 'app/Counter'
 * import { useAppDispatch } from 'app/store'
 * const dispatch = useAppDispatch()
 * dispatch(increment())
 */
export const { increment, decrement } = slice.actions

export default slice.reducer
