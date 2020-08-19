new Vue({
    el: '#desafio',
    data: {
        nome: 'Thiago Lima',
        idade: 30,
    },
    methods: {
        idadeVezes3(){
            return this.idade * 3
        },
        random(){
            return Math.random()
        }
    }
})