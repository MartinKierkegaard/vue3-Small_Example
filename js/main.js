const app = Vue.createApp({
    data() {
        return {
            intro: 'Welcome to my Vue template',
            liste:[],
            navn:null,
            id:null,

        }
    },
    methods: {
        addMethod(){
            this.liste.push({navn:this.navn,id:this.id})


        },
    },
    computed: {
        myComputed() {
            return ''
        },
        
    }
})
