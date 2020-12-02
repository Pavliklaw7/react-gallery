import React from 'react';
import './App.scss';

import { Header } from './components/Header';
import { Gallery } from './components/Gallery';

export const App = () => (
  <>
    <Header headerTitle="TestTask" />
    <Gallery />
  </>
);
