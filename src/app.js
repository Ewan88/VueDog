import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      beers: [],
      selectedBeerIndex: '',
      selectedBeer: null,
      favouriteBeers: []
    },
    mounted(){
      this.getBeers();
    },
    methods: {
      getBeers: function(){
        fetch("https://api.punkapi.com/v2/beers")
        .then(response => response.json())
        .then(data => this.beers = data)
      },
      beerSelect: function(){
        this.selectedBeer = this.beers[this.selectedBeerIndex];
      },
      addFavourite: function(){
        this.favouriteBeers.push(this.selectedBeer);
      }
    }
  })
})
