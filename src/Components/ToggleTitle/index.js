import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";

export const ToggleTitle = ({ children, setDisplay }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    const matchs = [
      '/contact',
      '/explore',
      '/notebooks',
      '/computers',
      '/monitors',
      '/accessories',
      '/checkout'
    ];

    const titles = [
      'ColdTech | Fale Conosco',
      'ColdTech | Explorar',
      'ColdTech | Explorar - Notebooks',
      'ColdTech | Explorar - Computadores',
      'ColdTech | Explorar - Monitores',
      'ColdTech | Explorar - Acessórios',
      'ColdTech | Checkout'
    ];

    const matchsHiddenExploreOfNav = [
      '/explore',
      '/notebooks',
      '/computers',
      '/monitors',
      '/accessories',
    ];

    matchs.forEach((match, index) => {
      const lastIndexMatch = matchs.length + 1 === index

      if (pathname.includes(match)) {
        document.title = titles[index];

        matchsHiddenExploreOfNav.includes(match) ?
          setDisplay(false) : setDisplay(true);
      }

      if(lastIndexMatch && !pathname.includes(match)){
        document.title = 'ColdTech'
      }
    });
  }, [pathname]);

  return (
    <>
      {children}
    </>
  );
};