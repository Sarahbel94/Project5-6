import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { ManSchoenen } from './components/ManSchoenen';
import { VrouwSchoenen } from './components/VrouwSchoenen';
import { Schoenen } from './components/Schoenen';
import { DetailPagina } from './components/DetailPagina';
import { Confirmation } from './components/Confirmation';
import { Hakke } from './components/Hakke';
import { Wishlist } from './components/Wishlist';
import { Formal } from './components/Formal';
import { Casual } from './components/Casual'; 
import { Beach } from './components/Beach';

export const routes = 
<Layout>
    <Route exact path='/' component={ Home } />
    <Route path='/VrouwSchoenen' component={ VrouwSchoenen } />
    <Route path='/ManSchoenen' component={ ManSchoenen } />
    <Route path='/schoenen' component={ Schoenen } />
    <Route path='/confirmation' component={ Confirmation } />
    <Route path='/detailpagina' component={ DetailPagina } />
    <Route path='/hakke' component={ Hakke } /> 
    <Route path='/wishlist' component={ Wishlist }/> 
    <Route path='/werk' component={ Formal } />
    <Route path='/beach' component={ Beach } />
    <Route path='/casual' component={ Casual } />   
</Layout>;
