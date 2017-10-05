// import * as React from 'react';
// import { RouteComponentProps } from 'react-router';
// import * as Types from './custom_types'
// import { Link, NavLink } from 'react-router-dom';
// type DetailPaginaHakState = {}

// export class DetailPaginaHak extends React.Component<RouteComponentProps<{}>, DetailPaginaHakState> {
//     constructor() {
//         super();
//         this.state = {}
//     }

//     public render() {

//         <div> 
//             <h3>{Types.Shoes1.Name} </h3>
//             <img src={Types.Shoes1.Image} width="250" height="250" />
//             <h4>€{Types.Shoes1.Price}.00 </h4>
//             <h4>{Types.Shoes1.Brand} </h4>
//             <div>{Types.Shoes1.Description} </div>
//             <h3>Beschikbare Kleuren</h3>
//             <div>{Types.Shoes1.Color} </div>
//             <h3>Beschikbare Maten</h3>
//             <div>{Types.Shoes0.Size} </div>

//             <NavLink to={'/confirmation'} activeClassName='active'>
//                 <button> Bestel NU!</button>
//             </NavLink>
//         </div>
//     }
// }