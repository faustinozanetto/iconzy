import Script from 'next/script';
import React from 'react';

const GoogleAnalytics: React.FC = () => {
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=G-XXDCRK4SE4`} strategy="afterInteractive" />
      <Script id="nextjs-google-analytics">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXDCRK4SE4', {
              page_path: window.location.pathname
            });
          `}
      </Script>
    </>
  );
};
export default GoogleAnalytics;
