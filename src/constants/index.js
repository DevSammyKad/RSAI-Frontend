import SvgSettings from '../assets/iconComponents/Settings';
import SvgHelp from '../assets/iconComponents/Help';
import SvgSignOut from '../assets/iconComponents/SignOut';
import SvgBellOff from '../assets/iconComponents/BellOff';
import SvgUser from '../assets/iconComponents/User';
import SvgHome from '../assets/iconComponents/Home';
import SvgEducation from '../assets/iconComponents/Education';
import SvgUsers from '../assets/iconComponents/Users';

export const NavLinks = [
  {
    path: '/dashboard',
    heading: 'DashBoard',
    icon: SvgHome,
  },
  {
    path: '/leads',
    heading: 'Leads',
    icon: SvgUser,
  },
  {
    path: '/courses',
    heading: 'Courses',
    icon: SvgEducation,
  },
  {
    path: '/students',
    heading: 'Students',
    icon: SvgUsers,
  },
  {
    path: '/Teachers',
    heading: 'Teachers',
    icon: SvgUsers,
  },
  {
    path: '/setting',
    heading: 'Setting',
    icon: SvgSettings,
  },
];

export const NavDropDownData = [
  {
    path: '/setting',
    heading: 'My Profile',
    icon: SvgUser,
  },
  {
    path: '/setting/Notification',
    heading: 'Mute Notification',
    icon: SvgBellOff,
  },
  {
    path: '/setting',
    heading: 'Setting',
    icon: SvgSettings,
  },
  {
    path: '/Help-Center',
    heading: 'Help Center',
    icon: SvgHelp,
  },
  {
    path: '/Sign Out',
    heading: 'Sign Out',
    icon: SvgSignOut,
  },
];
