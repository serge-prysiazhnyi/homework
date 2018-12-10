let app = new Vue({
    el: '#app',
    data: {
        persons: [
          {
            id: 001,
            title: 'some title',
            age: 25,
            adress: 'some adress'
          },
          {
            id: 002,
            title: 'some title 2',
            age: 20,
            adress: 'some adress 2'
          }
        ],
        buffer: {
          index: null,
          key: '',
          value: ''
        }
    },
    methods: {
      onClick: function(index,key,value){
        this.buffer.index = index;
        this.buffer.key = key;
        this.buffer.value = value;
      },
      apply: function(){
        let index = this.buffer.index;
        let key = this.buffer.key;
        let value = this.buffer.value;
        this.persons[index][key] = value;
      }
    }
})
