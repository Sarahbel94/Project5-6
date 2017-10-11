const ShoeAPI = {
    Shoes: [
      { number: 1, name: "Shoe1", position: "A" },
      { number: 2, name: "Shoe2", position: "B" },
      { number: 3, name: "Shoe3", position: "C" },
      { number: 4, name: "Shoe4", position: "D" },
      { number: 5, name: "Shoe5", position: "E" },
      { number: 6, name: "Shoe6", position: "F" }
    ],
    all: function() { return this.Shoes},
    get: function(id:any) {
      const isShoe = (p:any) => p.number === id
      return this.Shoes.find(isShoe)
    }
  }
  
  export default ShoeAPI
  