import React, { useState, useContext, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { pageContext } from '../context';

const RootLayout = () => {
  const { pageInfo } = useContext(pageContext);
  const { pathname: locationURL } = useLocation();

  
}