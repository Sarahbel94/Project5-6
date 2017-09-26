using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Model;

namespace Test
{
    public class Program
    {
        public static void Main(string[] args)
        {
             BuildWebHost(args).Run(); /* */
    //         using (var db = new ShoeContext())
    //         {
    //             Shoe s = new Shoe
    //             {
    //                 Name = "NIKE AIR ZOOM MARIAH FLYKNIT RACER",
    //                 Price = 160,
    //                 Size = 42,
    //                 Category = "Heren",
    //                 Brand = "Nike",
    //                 Color = "Blue",
    //                 Description = "De hardloopschoen uit de jaren 80 wordt met trots opnieuw gepresenteerd als lifestylesneaker: de Nike Air Zoom Mariah Flyknit Racer herenschoen. Nauwsluitend Flyknit materiaal en een vetersysteem waarmee je de schoen eenvoudig aantrekt en vetert, zodat je snel de deur uit kunt.",
    //                 Image = "https://images.nike.com/is/image/DotCom/PDP_THUMB_RETINA/918264_500/air-zoom-mariah-flyknit-racer-mens-shoe.jpg",
    //                 Users = new System.Collections.Generic.List<User>
    //                         {
    //                             new User{Name = "Anouk"}
    //                         }
    //             };

    //             Shoe s1 = new Shoe
    //             {
    //                 Name = "STRIKE 2",
    //                 Price = 25,
    //                 Size = 38,
    //                 Category = "Dames",
    //                 Brand = "New look",
    //                 Color = "light blue",
    //                 Description = "Materiaal buitenlaag:Textiel, Voering:Imitatieleer, Binnenzool:Imitatieleer, Zool:Kunststof, Voeringdikte:Zeer licht gevoerd",
    //                 Image = "https://mosaic02.ztat.net/nvg/media/large/NL/01/1L/06/YK/12/NL011L06Y-K12@12.jpg",
    //                 Users = new System.Collections.Generic.List<User>
    //                         {
    //                             new User{Name = "Anouk"}
    //                         }
    //             };

    //             Shoe s2 = new Shoe
    //             {
    //                 Name = "LOYAL",
    //                 Price = 120,
    //                 Size = 37,
    //                 Category = "Dames",
    //                 Brand = "Steve Madden",
    //                 Color = "taupe",
    //                 Description = "Materiaal buitenlaag:Textiel, Voering:Textiel, Binnenzool:Imitatieleer, Zool:Kunststof, Voeringdikte:Zeer licht gevoerd",
    //                 Image = "https://mosaic01.ztat.net/vgs/media/pdp-gallery/ST/31/1M/01/2C/11/ST311M012-C11@12.jpg",
    //                 Users = new System.Collections.Generic.List<User>
    //                         {
    //                             new User{Name = "Anouk"}
    //                         }
    //             };

    //             Shoe s3 = new Shoe
    //             {
    //                 Name = "Giorgio 1958",
    //                 Price = 210,
    //                 Size = 43,
    //                 Category = "Heren",
    //                 Brand = "Cognac",
    //                 Color = "bruin",
    //                 Description = "Materiaal buitenlaag:Leer, Voering:Leer, Binnenzool:Leer, Zool:Kunststof/ Leer, Voeringdikte:Zeer licht gevoerd",
    //                 Image = "https://mosaic01.ztat.net/vgs/media/pdp-gallery/G7/81/2A/01/VO/11/G7812A01V-O11@12.jpg",
    //                 Users = new System.Collections.Generic.List<User>
    //                         {
    //                             new User{Name = "Anouk"}
    //                         }
    //             };
    //             // db.Shoes.Add(s);
    //             // db.Shoes.Add(s1);
    //             // db.Shoes.Add(s2);
    //             // db.Shoes.Add(s3);
    //             // db.SaveChanges();
    //         }
        }
        public static IWebHost BuildWebHost(string[] args) =>
        WebHost.CreateDefaultBuilder(args)
        .UseStartup<Startup>()
        .Build();
    }
}

//         public static IWebHost BuildWebHost(string[] args) =>
//             WebHost.CreateDefaultBuilder(args)
//                 .UseStartup<Startup>()
//                 .Build();
// }

