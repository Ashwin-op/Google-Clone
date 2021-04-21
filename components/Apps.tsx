import { ViewGridIcon } from '@heroicons/react/outline';
import React, { useEffect, useRef } from 'react';

const Apps = () => {
  const appsList = useRef(null);
  const appsToggle = useRef(null);

  const closeApps = (e: any) => {
    if (!appsList.current.contains(e.target)) {
      appsList.current.classList.remove('open');
      appsToggle.current.classList.remove('open');
    }
  };
  const toggleApps = (e: any) => {
    e.preventDefault();
    appsList.current.classList.toggle('open');
    appsToggle.current.classList.toggle('open');
  };

  useEffect(() => {
    window.addEventListener('click', closeApps);
    return () => window.removeEventListener('click', closeApps);
  }, []);

  return (
    <div className="apps" ref={appsList}>
      <button className="icon appsToggle" ref={appsToggle} onClick={toggleApps}>
        <ViewGridIcon />
      </button>
      <div className="apps__list">
        <a target="_blank" href="https://assistant.google.com">
          <img
            src="https://lh3.googleusercontent.com/Iyn9yCCDxgHqvjX5jMZ_looun-kL0Sk60FraoMU5-JQG2WstyK6QNzj3JguQRbvQmWqVBSoO88Oh1kGQAoXMPkIIEF0pQrvXL52XXw=h120"
            alt="assistant"
          />
          <span>Assistant</span>
        </a>
        <a target="_blank" href="https://meet.google.com">
          <img
            src="https://lh3.googleusercontent.com/5CsRqfMEP1Rv-PPv9G4962lyEuvb4roSLJHJQWPbmCa51AmvynfoGfoKsKiS87QhX07xQMZAeLp8qoSy7CjVZkXJ1WapQiJkroCeJw"
            alt="meet"
          />
          <span>Meet</span>
        </a>
        <a target="_blank" href="https://mail.google.com">
          <img
            src="https://lh3.googleusercontent.com/mK6uPlO8TKCVSU8TsniV0pOUB0SSETbAPB_QUaaJ96qbBdZwaygmzf_bWRTIHmCNKgJ2hhn86KSfEAHvHN-P2EjFWAxPd77ob_2k8ew=h120"
            alt="gmail"
          />
          <span>Gmail</span>
        </a>
        <a target="_blank" href="https://drive.google.com">
          <img
            src="https://lh3.googleusercontent.com/AGsg9hOAylBkWuFrfSgOt8psYWcr3b-vZcmIVk0ocwx7KAVSu--tg1ZIAUSL7nAbORTHI5eZaweHYVPMJu5ac8Xw7GP_WiCs1w60=h120"
            alt="drive"
          />
          <span>Drive</span>
        </a>
        <a target="_blank" href="https://calendar.google.com">
          <img
            src="https://lh3.googleusercontent.com/DaaQa-Y-b3_IAhu6SBFb2vRl8PFR5iuCLwLszc16_OTlLrEFvFF9P4CS0ui-414nG9016ul3dQD1R3mHtmMx4P1bIA-zRXuPpFN4yw=h120"
            alt="calendar"
          />
          <span>Calendar</span>
        </a>
        <a target="_blank" href="https://photos.google.com" className="gphotos">
          <img
            src="https://lh3.googleusercontent.com/RwVe2Cm1EjeDmYhdTzr179G0ovq_PCxgPzQ92PO-YxTBEFTHWh0L6Ev8FFDWRgRGrE81vwn95tyg9Ey189OO4kllhhpLAMIsGFZ-UKA=h120"
            alt="photos"
          />
          <span>Photos</span>
        </a>
        <a target="_blank" href="https://play.google.com">
          <img
            src="https://lh3.googleusercontent.com/vWJNEFxN3WY5PYAYjwZ9ycEXMCCiB8EbcFXZxfSv5xkKLw67C2J5qXJTBL9KSPldWmLpVMnucrsDBmPlrf9tMiEJpYNZNcTw_ymlxgc=h120"
            alt="play"
          />
          <span>Play</span>
        </a>
        <a target="_blank" href="https://youtube.com">
          <img
            src="https://lh3.googleusercontent.com/I95wjYii8vhFSSx-aSYdh2hPAMjgZkA9yjarSQoOd98COwOxkAVn_dulBcTcfbsa7Limy6IKX6G95ep6OB6y2yMLMiX0YEqFx3KQHQ=h120"
            alt="youtube"
          />
          <span>YouTube</span>
        </a>
        <a target="_blank" href="https://classroom.google.com">
          <img
            src="https://lh3.googleusercontent.com/Qvc6rWiGG_a6LNQ7Yx5vMmve_5ku8TG7z4vmWG7VBkbcOQfOSE2BS7eBcD1NUOWTsbs9A_Vh-mJpKtsGtG_0f7sIGFy5LwhdOLRg4w"
            alt="classroom"
          />
          <span>Classroom</span>
        </a>
        <a target="_blank" href="https://contacts.google.com">
          <img
            src="https://lh3.googleusercontent.com/m5HIvqrNJHr2w5VXuNapBWKSx6YZTU7lIhffkIgDQU_VbpYAfkgXt2Un2ks_wzTn7vrfkyllWMLouCcOcBwfakYylBMe_9PwYm7_=h120"
            alt="contacts"
          />
          <span>Contacts</span>
        </a>
        <a target="_blank" href="https://translate.google.com">
          <img
            src="https://lh3.googleusercontent.com/vNgpLTvnDUr6-QM8s4OuuESGDXs_brbGoPR-7vfwdxQI7M4MVFV0CC_Hil4qRDSp4P66ik85fdv09jKn89kDAJVknIbd6wkl0zGQJQ"
            alt="translate"
          />
          <span>Translate</span>
        </a>
        <a target="_blank" href="https://maps.google.com">
          <img
            src="https://lh3.googleusercontent.com/9NuRdiRepVI3n1txfg7Ky2wWzB3DvXkWABXeFMSn2tzDYYkv8T_RMA9R17fWi0ziUDIDTVJx0JruCzOev37c4dkK9Wrgkeyam3pM8lI"
            alt="maps"
          />
          <span>Maps</span>
        </a>
      </div>
    </div>
  );
};

export default Apps;
