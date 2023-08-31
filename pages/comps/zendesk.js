import { useEffect } from 'react';

const ZendeskChat = () => {
    useEffect(() => {
        // Replace 'your-zendesk-widget-code' with your actual Zendesk Chat widget code
        const script = document.createElement('script');
        script.innerHTML = `
      window.zE = window.zE || function(c) {zE._.push(c)};
      var d = document, s = d.createElement('script');
      s.src = 'https://static.zdassets.com/ekr/snippet.js?key=f081cf71-6296-44b5-9b54-ee7d398318cf';
      s.defer = true;
      s.id = 'ze-snippet';
      d.getElementsByTagName('head')[0].appendChild(s);
    `;
        document.head.appendChild(script);

        return () => {
            // Clean up the script when the component unmounts
            const zeScript = document.getElementById('ze-snippet');
            zeScript.parentNode.removeChild(zeScript);
        };
    }, []);

    return null;
};

export default ZendeskChat;