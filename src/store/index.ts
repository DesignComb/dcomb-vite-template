import { defineStore } from 'pinia'
export const mainStore = defineStore('main',{
    state: () => {
        return{
            counter: <any>localStorage.getItem('counter') || 0,
            name: 'Test Name',
        }
    },
    getters: {
        doubleCount: (state:any):any => {
            return state.counter * 2
        }
    },
    actions: {
        increaseCounter() {
            this.counter++
            localStorage.setItem('counter', <any>this.counter)
        },
    },
})