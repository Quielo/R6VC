import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/app';
import 'firebase/firestore';
import {io as IO}from "socket.io-client";
import Peer from "simple-peer";
import styled from "styled-components";


ReactDOM.render(
    <App />,
  document.getElementById('root')
);