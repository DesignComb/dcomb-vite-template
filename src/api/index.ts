import axios from '@/utils/axios'

export default {
    getTestData:()    => axios.get(`https://catfact.ninja/fact`)
}
