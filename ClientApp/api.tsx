const ShoeAPI = {
    Shoes: [
      { number: 1, name: "Nike Air Force 1", position: "A", brand: "Nike" ,image: "https://mosaic02.ztat.net/vgs/media/detail/NI/11/1A/08/0A/11/NI111A080-A11@12.jpg"},
      { number: 2, name: "Puma Heart Basket", position: "B", brand: "Puma" , image: "https://mosaic02.ztat.net/vgs/media/detail/PU/11/1S/04/YB/11/PU111S04Y-B11@14.jpg"},
      { number: 3, name: "Adidas Stan Smith", position: "C", brand: "Adidas" , image: "https://mosaic02.ztat.net/vgs/media/detail/AD/11/2B/0N/2G/11/AD112B0N2-G11@12.jpg"},
      { number: 4, name: "Reebok Club C", position: "D", brand: "Reebok" , image: "https://mosaic02.ztat.net/vgs/media/detail/RE/01/2B/04/MA/11/RE012B04M-A11@12.jpg"},
      { number: 5, name: "Nike Air Max '97", position: "E", brand: "Nike" , image: "https://mosaic02.ztat.net/vgs/media/detail/NI/11/1S/09/HQ/11/NI111S09H-Q11@12.jpg" },
      { number: 6, name: "Converse All Star", position: "F", brand: "Converse" , image: "https://mosaic02.ztat.net/vgs/media/detail/CO/41/1A/00/23/02/CO411A002-302@19.1.jpg"}
    ],
    all: function() { return this.Shoes},
    get: function(id:any) {
      const isShoe = (p:any) => p.number === id
      return this.Shoes.find(isShoe)
    }
  }
  
  export default ShoeAPI
  