import React, { useEffect } from 'react';

const Newsletter = ({ portalId, formId }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/v2.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: '46743907',
          formId: 'bcd522cf-a5c6-42c8-a603-6ce5da2ba407',
          target: '#hubspotForm',
        });
      }
    };

    // Clean up the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, [portalId, formId]);

  return <div id="hubspotForm"></div>;
};

export default Newsletter;
