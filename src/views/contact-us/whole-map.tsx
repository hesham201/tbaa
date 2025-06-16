import React from "react";

const WholeMap = () => {
  return (
    <div className="relative h-[60vh] w-full overflow-hidden">
      <iframe
        className="absolute inset-0 w-full h-[60vh]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2522.0285935448264!2d-0.6326991247242783!3d50.793578662600325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875ae8fb0fc15dd%3A0xc458b662160dbede!2sBritish%20Academy%20Of%20Aesthetic%20Dentistry!5e0!3m2!1sen!2s!4v1750083691839!5m2!1sen!2s"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default WholeMap;
