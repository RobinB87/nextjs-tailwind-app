import Script from "next/script";

const GoogleAnalyticsScript = () => {
  return (
    <>
      <Script async src="https://www.googletagmanager.com/..." />

      {/* to avoid compilation error use trick with {``} this string will be parsed and interpreted as javascript */}
      <Script id="bla">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'bla');`}
      </Script>
    </>
  );
};

export default GoogleAnalyticsScript;
