import { useEffect, useRef } from "react";

export const MessengerFbChat = () => {
  const messengerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messengerRef.current) {
      messengerRef.current.setAttribute("attribution_version", "biz_inbox");
      messengerRef.current.setAttribute("attribution", "install_email");
      messengerRef.current.setAttribute("page_id", "116713648921145");

      (window as any).fbAsyncInit = function () {
        const FB = {};
        
        (FB as any).init({
          xfbml: true,
          version: 'v16.0'
        });
      };

      (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        (js as any).src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
        (fjs as any).parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    }
  }, []);

  return (
    <>
      <div id="fb-root" />
      <div className="fb-customerchat" ref={messengerRef} />
    </>
  );
}
