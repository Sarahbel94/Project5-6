const ShoeAPI = {
  shoes: [
    { number: 1, name: "Shoe1", testparam: "A" },
    { number: 2, name: "Shoe2", testparam: "B" },
    { number: 3, name: "Shoe3", testparam: "C" },
    { number: 4, name: "Shoe4", testparam: "D" },
    { number: 5, name: "Shoe5", testparam: "E" },
    { number: 6, name: "Shoe6", testparam: "F" }
  ],
  all: function() { return this.shoes},
  get: function(id: any) {
    const isShoe = (p: any) => p.number === id
    return this.shoes.find(isShoe)
  }
}

export default ShoeAPI
