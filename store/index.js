const STORAGE_NAME = 'vuex_data'
const storageDate = localStorage.getItem(STORAGE_NAME)

export const state = () => storageDate ? JSON.parse(storageDate) : {
  memoList: []
}

// export const state = () => ({
//   memoList: []
// })

export const getters = {
  memoData(state) {
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
  updateText(state, { index, text }) {
    state.memoList = [...state.memoList]
    state.memoList[index] = {
      ...state.memoList[index],
      text
    }
  }
}
