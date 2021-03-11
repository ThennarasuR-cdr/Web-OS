import React from 'react';
import TerminalImage from '../assets/icons/terminal.svg';
import CameraImage from '../assets/icons/camera.svg';
import BrowserImage from '../assets/icons/browser.svg';
import SettingsImage from '../assets/icons/setting.svg';
import TerminalWindow from '../components/applications/terminal/terminal';
import Camera from '../components/applications/camera/camera';
import Browser from '../components/applications/browser/browser';
import Settings from '../components/applications/settings/settings';

// const nullFunction = (supplement) => null;
export const defaultApps = [
  {
    name: 'Terminal',
    image: TerminalImage,
    width: '40px',
    key: 'terminal',
    child: (supplement) => (
      <TerminalWindow
        supplement={supplement}
        // supplement={{ terminalLocation: ["desktop"] }}
      />
    ),
    // footer: nullFunction,
  },
  {
    name: 'Browser',
    image: BrowserImage,
    width: '50px',
    key: 'browser',
    child: (supplement) => <Browser supplement={supplement} />,
  },
  {
    name: 'Camera',
    image: CameraImage,
    width: '40px',
    key: 'camera',
    child: (supplement) => <Camera supplement={supplement} />,
  },
  {
    name: 'Settings',
    image: SettingsImage,
    width: '50px',
    key: 'settings',
    child: (supplement) => <Settings supplement={supplement} />,
  },
];
