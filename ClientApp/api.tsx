const ShoeAPI = {
    Shoes: [
      { 
        number: 1, 
        price: 109.95,
        name: "Nike Air Force 1", 
        description: "...", 
        category: "Popular", 
        brand: "Nike", 
        image: "https://mosaic02.ztat.net/vgs/media/detail/NI/11/1A/08/0A/11/NI111A080-A11@12.jpg"
      },
      { 
        number: 2,
        price: 89.95,         
        name: "Puma Heart Basket", 
        description: "...", 
        category: "Popular", 
        brand: "Puma", 
        image: "https://mosaic02.ztat.net/vgs/media/detail/PU/11/1S/04/YB/11/PU111S04Y-B11@14.jpg"
      },
      { 
        number: 3, 
        price: 94.95,
        name: "Adidas Stan Smith",  
        description: "...",
        category: "Popular", 
        brand: "Adidas" , 
        image: "https://mosaic02.ztat.net/vgs/media/detail/AD/11/2B/0N/2G/11/AD112B0N2-G11@12.jpg"
      },
      { 
        number: 4, 
        price: 89.95,
        name: "Reebok Club C",  
        description: "...",
        category: "Popular", 
        brand: "Reebok" , 
        image: "https://mosaic02.ztat.net/vgs/media/detail/RE/01/2B/04/MA/11/RE012B04M-A11@12.jpg"
      },
      { 
        number: 5,
        price: 169.95, 
        name: "Nike Air Max '97",  
        description: "...",
        category: "Casual", 
        brand: "Nike" , 
        image: "https://mosaic02.ztat.net/vgs/media/detail/NI/11/1S/09/HQ/11/NI111S09H-Q11@12.jpg" 
      },
      { 
        number: 6,
        price: 69.95, 
        name: "Converse All Star",  
        description: "...",
        category: "Casual", 
        brand: "Converse" , 
        image: "https://mosaic02.ztat.net/vgs/media/detail/CO/41/1A/00/23/02/CO411A002-302@19.1.jpg"
      },
      { 
        number: 7, 
        price: 89.95,
        name: "Zign Instappers",  
        description: "...",
        category: "Formal", 
        brand: "Zign" , 
        image: "https://mosaic01.ztat.net/vgs/media/catalog1/ZI/11/1E/A1/GO/11/ZI111EA1G-O11@13.jpg"
      },
      { 
        number: 8,
        price: 89.95, 
        name: "Zign Instappers",  
        description: "...",
        category: "Formal", 
        brand: "Zign" , 
        image: "https://mosaic01.ztat.net/vgs/media/catalog1/ZI/11/1E/A1/GQ/11/ZI111EA1G-Q11@13.jpg"
      },
      { 
        number: 9,
        price: 39.95, 
        name: "Only Veterschoenen",  
        description: "...",
        category: "Formal", 
        brand: "Only" , 
        image: "https://mosaic01.ztat.net/vgs/media/catalog1/OS/41/1C/A0/2Q/11/OS411CA02-Q11@13.jpg"
      },
      { 
        number: 10, 
        price: 49.95,
        name: "Marco Tozzi Pumps",  
        description: "...",
        category: "Formal", 
        brand: "Marco Tozzi" , 
        image: "https://mosaic01.ztat.net/vgs/media/catalog1/M3/11/1B/0B/4Q/11/M3111B0B4-Q11@13.jpg"
      },
      { 
        number: 11, 
        price: 99.95,
        name: "Adidas Tennis Hu",  
        description: "...",
        category: "Casual", 
        brand: "Adidas" , 
        image: "https://mosaic02.ztat.net/vgs/media/detail/AD/11/2B/0M/HM/11/AD112B0MH-M11@12.jpg"
      },
      { 
        number: 12, 
        price: 99.95,
        name: "Asics Gel-Lyte III",  
        description: "...",
        category: "Casual", 
        brand: "Asics" , 
        image: "https://mosaic02.ztat.net/vgs/media/detail/A0/H1/5O/00/0M/11/A0H15O000-M11@12.jpg"
      }     
    ],
    all: function() { return this.Shoes},
    get: function(id:any) {
      const isShoe = (p:any) => p.number === id
      return this.Shoes.find(isShoe)
    }
  }

  export default ShoeAPI
  