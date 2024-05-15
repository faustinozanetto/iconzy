import { useEffect, useState } from 'react';

type Browser = 'Chrome' | 'Firefox' | 'Safari' | 'Internet Explorer' | 'Edge' | 'Opera';

export const useBrowserCheck = (browser: Browser) => {
  const [match, setMatch] = useState<boolean>(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    setMatch(userAgent.indexOf(browser) !== -1);
  }, [browser]);

  return match;
};
