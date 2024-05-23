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
    heading: 'Students Attendance',
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

export const leadsJsonData = [
  {
    leadName: 'John Doe',
    leadEmail: 'johndoe@example.com',
    leadWhatsAppNumber: '1234567890',
    leadCourse: 'Engineering',
    leadAge: '25',
    leadNote: 'Interested in pursuing a degree in Mechanical Engineering.',
    leadStatus: 'New',
    leadCreatedAt: '2024-05-15T12:00:00Z',
    leadUpdatedAt: '2024-05-15T12:00:00Z',
    leadDeletedAt: null,
    leadAssignedTo: null,
    leadAssignedAt: null,
  },
  {
    leadName: 'Jane Smith',
    leadEmail: 'janesmith@example.com',
    leadWhatsAppNumber: '9876543210',
    leadCourse: 'Business Administration',
    leadAge: '30',
    leadNote: 'Looking for MBA program options.',
    leadStatus: 'Contacted',
    leadCreatedAt: '2024-05-14T10:30:00Z',
    leadUpdatedAt: '2024-05-15T09:45:00Z',
    leadDeletedAt: null,
    leadAssignedTo: 'Michael Johnson',
    leadAssignedAt: '2024-05-15T10:00:00Z',
  },
  {
    leadName: 'Emily Brown',
    leadEmail: 'emilybrown@example.com',
    leadWhatsAppNumber: '5554443333',
    leadCourse: 'Computer Science',
    leadAge: '22',
    leadNote: 'Interested in software engineering courses.',
    leadStatus: 'Converted',
    leadCreatedAt: '2024-05-13T15:20:00Z',
    leadUpdatedAt: '2024-05-14T11:30:00Z',
    leadDeletedAt: null,
    leadAssignedTo: 'Alex Miller',
    leadAssignedAt: '2024-05-14T11:45:00Z',
  },
  {
    leadName: 'David Johnson',
    leadEmail: 'davidjohnson@example.com',
    leadWhatsAppNumber: '9998887777',
    leadCourse: 'Medicine',
    leadAge: '28',
    leadNote: 'Aspiring to become a doctor.',
    leadStatus: 'Contacted',
    leadCreatedAt: '2024-05-12T14:00:00Z',
    leadUpdatedAt: '2024-05-15T08:00:00Z',
    leadDeletedAt: null,
    leadAssignedTo: 'Sarah Clark',
    leadAssignedAt: '2024-05-13T10:30:00Z',
  },
  {
    leadName: 'Michael White',
    leadEmail: 'michaelwhite@example.com',
    leadWhatsAppNumber: '3332221111',
    leadCourse: 'Finance',
    leadAge: '32',
    leadNote: 'Interested in financial planning courses.',
    leadStatus: 'New',
    leadCreatedAt: '2024-05-11T09:45:00Z',
    leadUpdatedAt: '2024-05-11T09:45:00Z',
    leadDeletedAt: null,
    leadAssignedTo: null,
    leadAssignedAt: null,
  },
];
