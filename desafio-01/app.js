new Vue({
    el: '#desafio',
    data: {
        nome: 'Thiago Lima',
        idade: 30,
        imagem:'https://i.pinimg.com/originals/2e/99/73/2e99730fef279abd4f3f212fd639f546.jpg',
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