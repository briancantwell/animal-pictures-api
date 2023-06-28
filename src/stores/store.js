import { defineStore } from 'pinia'
import { getFox, getDog, getCat }  from '../../api-interface'

export const useStore = defineStore('store', {
  state: () => ({
    picHistory: [],
    slide: 0
}),
  getters: {
    fetchPics: (state) => state.picHistory
  },

  actions: {
    getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    },
    async getRandomPic(){
      switch ((this.getRndInteger(1, 4))) {
        case 1:
        await getFox().then(data =>{
          // newPic.value =  data.data.image
          this.picHistory.push(data.data.image)
          })
          break;
        case 2:
         await getDog().then(data =>{
            // newPic.value =  data.data.message
            this.picHistory.push(data.data.message)
    
          })
          break;
        case 3:
         await getCat().then( data =>{
            // newPic.value = data
            this.picHistory.push(data)
    
        })
        break;
    
        default:
          break;
    }
    
    }
  }
})
