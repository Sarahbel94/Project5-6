const ShoeAPI = {
    Shoes: [
      { 
        number: 1, 
        price: 109.95,
        name: "Nike Air Force 1", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula sem, blandit luctus dui non, faucibus aliquet dui. Fusce tristique elit quis diam ullamcorper imperdiet. Phasellus ornare egestas enim eu dapibus. Morbi pellentesque elit vel felis ornare feugiat. Etiam sodales risus dolor, sit amet viverra leo rutrum sit amet. Nam hendrerit mattis est, sed mollis libero viverra sit amet. Donec posuere semper ante eget elementum. Integer in ex condimentum, pretium augue eget, porttitor risus. Vivamus ut iaculis turpis. Praesent tortor dolor, dignissim id est at, euismod pharetra dui. Vivamus semper, mauris sed consectetur interdum, dui tellus porttitor felis, id finibus sem justo sed mauris. Curabitur in cursus urna. Sed quis elementum sapien, ut mollis nisi. Curabitur gravida mi est, pulvinar pulvinar lorem mattis sit amet. Sed finibus, metus eu rhoncus dignissim, risus leo mattis velit, scelerisque laoreet risus sapien eget ante.", 
        category: "Popular", 
        brand: "Nike", 
        image: "https://mosaic02.ztat.net/vgs/media/detail/NI/11/1A/08/0A/11/NI111A080-A11@12.jpg"
      },
      { 
        number: 2,
        price: 89.95,         
        name: "Puma Heart Basket", 
        description: "Nulla aliquam elit ut mauris tristique, a rhoncus nisi ullamcorper. Etiam ullamcorper pellentesque enim auctor lacinia. Duis porttitor molestie pellentesque. Sed purus lectus, luctus a eros vel, ultricies posuere diam. Pellentesque leo tellus, faucibus sed felis vel, finibus consectetur nisl. Sed viverra odio sit amet ornare fringilla. Phasellus a enim quis sem bibendum tristique. Donec condimentum risus quis est venenatis iaculis condimentum et magna. Suspendisse porttitor a mi ac lacinia. Praesent elementum cursus sapien at pharetra. Ut eget tincidunt ligula, a sagittis dolor. Nulla facilisi. Phasellus ac erat quam. Phasellus in metus id felis auctor molestie at et odio. Praesent vulputate gravida sem, vitae vulputate lorem iaculis quis. Curabitur faucibus, erat sit amet commodo tristique, magna tellus gravida tellus, sit amet commodo ligula purus eu dolor.", 
        category: "Popular", 
        brand: "Puma", 
        image: "https://mosaic02.ztat.net/vgs/media/detail/PU/11/1S/04/YB/11/PU111S04Y-B11@14.jpg"
      },
      { 
        number: 3, 
        price: 94.95,
        name: "Adidas Stan Smith",  
        description: "Phasellus id arcu at metus pretium aliquet. Donec erat ex, ultrices eget nibh eget, rhoncus viverra nulla. In hac habitasse platea dictumst. Morbi ac augue tempor, sollicitudin erat id, lobortis ante. In porttitor purus eget augue imperdiet, vitae malesuada dolor luctus. Nulla aliquam, nibh ac feugiat scelerisque, turpis nisl mattis ipsum, quis egestas lacus nisl non mauris. Aenean at turpis efficitur, ultricies diam at, bibendum lorem. Nunc aliquam lacinia enim eget condimentum. Sed quis ipsum et quam gravida posuere eu nec dui. Aliquam hendrerit tellus at arcu tempor porttitor vel ut mauris. Morbi pulvinar, mi non porttitor semper, ipsum massa eleifend purus, non pulvinar diam dolor nec velit. Cras mollis justo orci, in ornare nulla convallis vel. Ut id lacinia nibh, sed facilisis odio. In a magna id velit tincidunt condimentum sed et erat. Nullam convallis odio aliquet luctus egestas.",
        category: "Popular", 
        brand: "Adidas" , 
        image: "https://mosaic02.ztat.net/vgs/media/detail/AD/11/2B/0N/2G/11/AD112B0N2-G11@12.jpg"
      },
      { 
        number: 4, 
        price: 89.95,
        name: "Reebok Club C",  
        description: "Nunc placerat vel tellus et luctus. Praesent mattis tempor diam ut pulvinar. Nam et arcu tempus, hendrerit orci sit amet, aliquam quam. Proin pellentesque euismod imperdiet. In vitae viverra metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum non massa ac ipsum maximus vehicula feugiat nec nibh. Aenean maximus lacus velit, ut viverra nulla rutrum sed. Duis eget turpis finibus, tincidunt ipsum vel, volutpat libero. Nullam non lectus risus.",
        category: "Popular", 
        brand: "Reebok" , 
        image: "https://mosaic02.ztat.net/vgs/media/detail/RE/01/2B/04/MA/11/RE012B04M-A11@12.jpg"
      },
      { 
        number: 5,
        price: 169.95, 
        name: "Nike Air Max '97",  
        description: "Pellentesque diam leo, pulvinar ac erat nec, lacinia dapibus odio. Donec quis hendrerit dolor. Nunc id nisl sit amet sem blandit volutpat. Ut ac vestibulum urna. Ut efficitur est et facilisis tincidunt. Nulla condimentum elementum sem ac dapibus. Vivamus ultricies sem lectus, non efficitur lacus maximus sit amet. Etiam fermentum, metus quis consectetur pretium, turpis enim dapibus massa, nec sodales velit felis quis leo.",
        category: "Casual", 
        brand: "Nike" , 
        image: "https://mosaic02.ztat.net/vgs/media/detail/NI/11/1S/09/HQ/11/NI111S09H-Q11@12.jpg" 
      },
      { 
        number: 6,
        price: 69.95, 
        name: "Converse All Star",  
        description: "Ut lobortis a elit vitae tincidunt. Mauris purus urna, volutpat vel felis vel, dapibus blandit orci. Aenean vitae risus erat. Integer leo nisl, hendrerit id lacus non, molestie lacinia sapien. Duis mi enim, lacinia ac elit vitae, tincidunt euismod risus. Integer molestie et tellus eu eleifend. Duis gravida ut justo eu volutpat. Ut mollis pellentesque venenatis. In laoreet tempus arcu, et luctus dui efficitur eget. Quisque neque tellus, consequat vitae tincidunt quis, volutpat non justo. Suspendisse sit amet ultrices dui. Sed leo libero, egestas tempor orci et, lacinia euismod dui.",
        category: "Casual", 
        brand: "Converse" , 
        image: "https://mosaic02.ztat.net/vgs/media/detail/CO/41/1A/00/23/02/CO411A002-302@19.1.jpg"
      },
      { 
        number: 7, 
        price: 89.95,
        name: "Zign Instappers",  
        description: "Nunc ipsum risus, commodo et congue et, rutrum vitae nunc. Donec quis nibh sed odio sagittis elementum. Aenean scelerisque luctus condimentum. Duis scelerisque quam enim, dictum volutpat ante dictum sit amet. Duis diam turpis, interdum sit amet consequat a, dictum eu est. Praesent convallis, nisi sed cursus consequat, nisi orci accumsan elit, quis mattis ipsum arcu eu magna. Fusce porttitor molestie leo, eget bibendum lorem vehicula et. Morbi sollicitudin ex nunc, vel cursus nunc lacinia vel. Aenean ut lorem justo. Praesent semper est vel pellentesque pharetra. Proin consequat erat quam, ut accumsan dolor porttitor nec. Nam pellentesque nisl ac efficitur efficitur. Proin et pretium mauris, ac egestas purus. Maecenas vitae velit sem. Donec semper interdum justo, molestie fringilla lorem vestibulum ut. Etiam id pellentesque sapien, id consequat libero.",
        category: "Formal", 
        brand: "Zign" , 
        image: "https://mosaic01.ztat.net/vgs/media/catalog1/ZI/11/1E/A1/GO/11/ZI111EA1G-O11@13.jpg"
      },
      { 
        number: 8,
        price: 89.95, 
        name: "Zign Instappers",  
        description: "Aliquam feugiat elit in urna scelerisque mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc ultricies nec massa ut lobortis. Cras molestie volutpat felis, finibus luctus lorem aliquam a. Aenean a ultricies quam, sit amet posuere metus. Nulla eu felis non nulla viverra interdum in commodo enim. Mauris ac nunc nulla. Donec id est sapien. Nulla quis dui sagittis, bibendum tellus id, efficitur mi.",
        category: "Formal", 
        brand: "Zign" , 
        image: "https://mosaic01.ztat.net/vgs/media/catalog1/ZI/11/1E/A1/GQ/11/ZI111EA1G-Q11@13.jpg"
      },
      { 
        number: 9,
        price: 39.95, 
        name: "Only Veterschoenen",  
        description: "Suspendisse semper dui eu sapien ultrices mollis. Mauris vitae sagittis magna. Vivamus vitae aliquam justo, vel volutpat elit. Curabitur ultricies sit amet risus nec fringilla. Nulla sollicitudin nunc a magna euismod maximus. Praesent at enim tempus quam tincidunt maximus ac eu metus. Morbi pretium sit amet nisi et interdum. Mauris sit amet pellentesque mi, non ornare lectus. Nunc rhoncus, augue in dictum dapibus, tellus arcu molestie nunc, ut iaculis tortor sem vel velit. Etiam mollis dolor nunc, in aliquam ligula commodo sit amet. In hac habitasse platea dictumst. Aenean vel sapien ultricies, pellentesque ipsum quis, facilisis ante. Etiam id quam vulputate, cursus elit vitae, interdum sem. In tempor turpis et mollis consequat. Sed nulla libero, posuere sit amet venenatis nec, tincidunt vitae nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        category: "Formal", 
        brand: "Only" , 
        image: "https://mosaic01.ztat.net/vgs/media/catalog1/OS/41/1C/A0/2Q/11/OS411CA02-Q11@13.jpg"
      },
      { 
        number: 10, 
        price: 49.95,
        name: "Marco Tozzi Pumps",  
        description: "Mauris porta ligula sed diam maximus accumsan. Cras ultricies dolor ligula, a varius est pulvinar vel. Praesent sit amet cursus erat, sit amet scelerisque dolor. Praesent sed leo non tellus tincidunt euismod. Integer elit urna, eleifend placerat risus sit amet, varius fringilla magna. Aliquam non venenatis elit, mattis convallis turpis. Curabitur tincidunt lacus ut magna venenatis varius. Integer bibendum rhoncus turpis non fringilla. Cras eget turpis sapien. Etiam ac nisl non urna tempus auctor in non diam. In ut ultrices lectus.",
        category: "Formal", 
        brand: "Marco Tozzi" , 
        image: "https://mosaic01.ztat.net/vgs/media/catalog1/M3/11/1B/0B/4Q/11/M3111B0B4-Q11@13.jpg"
      },
      { 
        number: 11, 
        price: 99.95,
        name: "Adidas Tennis Hu",  
        description: "Vivamus aliquet orci eget elit condimentum, eu convallis leo porttitor. Vivamus lobortis elementum efficitur. In hac habitasse platea dictumst. Donec bibendum aliquam elit, ac varius lorem congue eget. Nulla nec lorem a metus vulputate pretium non a eros. Sed metus ex, vestibulum a vulputate a, eleifend in turpis. Pellentesque bibendum rutrum dui quis lacinia. Quisque sollicitudin lacus id diam convallis maximus. Maecenas metus mauris, pellentesque quis efficitur id, semper id velit. Vestibulum rutrum auctor orci, nec laoreet purus vestibulum quis. Donec id maximus nibh, id volutpat purus. Phasellus in sem id orci sodales semper.",
        category: "Casual", 
        brand: "Adidas" , 
        image: "https://mosaic02.ztat.net/vgs/media/detail/AD/11/2B/0M/HM/11/AD112B0MH-M11@12.jpg"
      },
      { 
        number: 12, 
        price: 99.95,
        name: "Asics Gel-Lyte III",  
        description: "Quisque odio leo, bibendum sed ligula quis, dictum accumsan justo. Phasellus vitae massa a leo auctor tristique. Vivamus egestas sapien vitae sem vulputate, non ornare urna lobortis. Nam massa dui, sagittis eu lobortis vitae, ultricies eget risus. Etiam cursus purus vitae purus tristique, sit amet bibendum quam faucibus. Vivamus placerat efficitur elit, ut sagittis libero pulvinar vitae. Aenean nec maximus sapien, tempor molestie sapien. Pellentesque faucibus turpis ac enim eleifend fringilla. Etiam non faucibus sapien. Nunc a eros commodo elit hendrerit semper vel placerat quam. Nam faucibus scelerisque arcu vel lobortis. In bibendum risus vel mi egestas maximus. Praesent sit amet pellentesque tortor. Nulla vel augue vestibulum, cursus augue sit amet, aliquam risus.",
        category: "Casual", 
        brand: "Asics" , 
        image: "https://mosaic02.ztat.net/vgs/media/detail/A0/H1/5O/00/0M/11/A0H15O000-M11@12.jpg"
      }     
    ],
    all: function() { return this.Shoes}, //This function loads ALL shoes from the API.
    get: function(id:any) {
      const isShoe = (p:any) => p.number === id //This function loads a SPECIFIC shoe from the API.
      return this.Shoes.find(isShoe)
    }
  }

  export default ShoeAPI
  