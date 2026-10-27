import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { pageTitles, site } from '../src/site';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    const route = pathname.replace(/\/$/, '') || '/';
    document.title = `${site.name} | ${pageTitles[route] ?? 'Explore the project'}`;
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', `${site.url}${route === '/' ? '' : `${route.slice(1)}/`}`);
  }, [pathname]);
  return null;
}
