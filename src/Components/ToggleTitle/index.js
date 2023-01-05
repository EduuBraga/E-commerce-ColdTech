import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";

export const ToggleTitle = ({ children, setDisplay }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    const matchs = [
      '/contact',
      '/notebooks',
      '/computers',
      '/monitors',
      '/accessories',
      '/explore',
      '/checkout'
    ];

    const titles = [
      'ColdTech | Fale Conosco',
      'ColdTech | Explorar - Notebooks',
      'ColdTech | Explorar - Computadores',
      'ColdTech | Explorar - Monitores',
      'ColdTech | Explorar - Acessórios',
      'ColdTech | Explorar',
      'ColdTech | Checkout'
    ];

    const matchsHiddenExploreOfNav = [
      '/explore',
      '/notebooks',
      '/computers',
      '/monitors',
      '/accessories',
    ];

    for (let i = 0; i < matchs.length; i++) {
      const match = matchs[i];
      
      if (pathname.includes(match)) {
        document.title = titles[i];

        matchsHiddenExploreOfNav.includes(match) ?
          setDisplay(false) : setDisplay(true);
        break;
      } else {
        document.title = 'ColdTech';
        setDisplay(true);
      }
    }
  }, [pathname]);

  return (
    <>
      {children}
    </>
  );
};