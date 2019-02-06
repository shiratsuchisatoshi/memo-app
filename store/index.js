const STORAGE_NAME = 'vuex_data'
const storageDate = localStorage.getItem(STORAGE_NAME)

export const state = () => storageDate ? JSON.parse(storageDate) : {
  memoList: [],
  colorBox: ['pink', 'lightblue', 'lightgreen']
}

export const getters = {
  memoData(state) {
    console.log('test', state)
    return index => state.memoList[index]
  }
}

export const plugins = [
  (store) => {
    store.subscribe(() => {
      localStorage.setItem(STORAGE_NAME, JSON.stringify(store.state))
    })
  }
]

export const mutations = {
  addMemo(state, memo) {
    state.memoList = [
      ...state.memoList,
      memo
    ]
  },
  changeColor(state, colorfooter) {
    state.memoList = [...state.memoList]
    state.memoList[colorfooter.id].background = state.colorBox[colorfooter.footerNum]
  },
  minusMemo(state, index) {
    state.memoList = [...state.memoList]
    state.memoList.splice(index, 1)
  },
  updateText(state, { index, text }) {
    state.memoList = [...state.memoList]
    state.memoList[index] = {
      ...state.memoList[index],
      text
    }
  },
  updateMemoposition(state, { index, target }) {
    state.memoList = [...state.memoList]
    state.memoList[index] = target
  },
  zindexPlus(state, { index, memoData }) {
    state.memoList = [...state.memoList]
    state.memoList[index].zindex = memoData
  },
  lineUpMemo(state, { index, toppo, left }) {
    state.memoList = [...state.memoList]
    state.memoList[index].left = left
    state.memoList[index].toppo = toppo
  }
}
