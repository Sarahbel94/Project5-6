// ╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱
// ╱╭━━━━━━━━╮┏╮╭┓╱
// ╱┃▋┈┈┈┈┈┈┈┃╰╮╭╯╱
// ╱┣━╯┈┈┈┈┈┈╰━╯┃╱╱
// ╭╋╭┳╭┳╭┳╭┳╭┳╭╋╭┳
// ╯╰╯╰╯╰╯╰╯╰╯╰╯╰╯╰

import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { ManSchoenen } from './components/ManSchoenen';
import { VrouwSchoenen } from './components/VrouwSchoenen';
import { Schoenen } from './components/Schoenen';
// import { DetailPagina } from './components/DetailPagina';
import { Confirmation } from './components/Confirmation';

import { Wishlist } from './components/Wishlist';



import Shoppingcart from './components/shoppingcart';
import Product from './components/product';


// mannen
import { Popularm } from './components/Popular-m';
import { Casualm } from './components/Casual-m'; 
import { Formalm } from './components/Formal-m';
import { Beachm } from './components/Beach-m';

// vrouwen
import { Popularf } from './components/Popular-f';
import { Casualf } from './components/Casual-f'; 
import { Formalf } from './components/Formal-f';
import { Beachf } from './components/Beach-f';

// kinderen

export const routes = 
<Layout>
    {/* mannen */}
        <Route path='/Popular-m' component={ Popularm } /> 
        <Route path='/Formal-m' component={ Formalm } /> 
        <Route path='/Casual-m' component={ Casualm } />  
        <Route path='/Beach-m' component={ Beachm } />
    {/* vrouwen */}
        <Route path='/Popular-f' component={ Popularf } /> 
        <Route path='/Formal-f' component={ Formalf } /> 
        <Route path='/Casual-f' component={ Casualf } />  
        <Route path='/Beach-f' component={ Beachf } />


    <Route exact path='/' component={ Home } />
    <Route path='/VrouwSchoenen' component={ VrouwSchoenen } />
    <Route path='/ManSchoenen' component={ ManSchoenen } />
    <Route path='/schoenen' component={ Schoenen } />
    <Route path='/confirmation' component={ Confirmation } />
    {/* <Route path='/detailpagina' component={ DetailPagina } /> */}
   
    <Route path='/wishlist' component={ Wishlist }/> 
    
    
    
    
    <Route path='/shoppingcart' component={ Shoppingcart } />
    <Route path='/product' component={ Product } />
</Layout>;
