import {
  AdjustmentsIcon,
  ChatAltIcon,
  ClockIcon,
  CollectionIcon,
  EyeOffIcon,
  HomeIcon,
  InformationCircleIcon,
  StatusOfflineIcon,
  UserGroupIcon,
  XIcon
} from '@heroicons/react/outline';
import React, { forwardRef, useEffect, useRef } from 'react';

const Sidebar = forwardRef((props, ref) => {
  const sidebarList = useRef(null);

  // @ts-ignore
  const closeSidebar = () => ref.current.classList.remove('open');

  useEffect(() => {
    const sidebarToggle = document.querySelector('.sidebarToggle');

    const hideSidebar = (e) => {
      if (sidebarList.current.contains(e.target) || sidebarToggle.contains(e.target)) {
        return;
      }
      // @ts-ignore
      ref.current.classList.remove('open');
    };
    window.addEventListener('click', hideSidebar);
    return () => window.removeEventListener('click', hideSidebar);
  }, []);

  return (
    // @ts-ignore
    <div className="sidebar" ref={ref}>
      <ul ref={sidebarList}>
        <li className="ilogo">
          <img src="/google.png" alt="google logo" />
          <button className="icon closeSidebar" onClick={closeSidebar}>
            <XIcon />
          </button>
        </li>
        <li>
          <HomeIcon /> Home
        </li>
        <li>
          <ClockIcon /> Search History
        </li>
        <li>
          <CollectionIcon /> Collections
        </li>
        <li>
          <StatusOfflineIcon /> Offline Searches
        </li>
        <hr />
        <li>
          <AdjustmentsIcon /> Settings
        </li>
        <li>
          <UserGroupIcon /> Data & Privacy
        </li>
        <li>
          <EyeOffIcon /> Hide Explicit Results
        </li>
        <li>
          <InformationCircleIcon /> Help & Support
        </li>
        <li>
          <ChatAltIcon /> Send Feedback
        </li>
      </ul>
    </div>
  );
});

export default Sidebar;
