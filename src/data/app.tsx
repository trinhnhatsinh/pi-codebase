import { FaFacebookF, FaInstagram, FaPinterestP, FaTiktok, FaYoutube } from 'react-icons/fa';
import { v4 } from 'uuid';

import { CityOutlineIcon } from '@/components/icons/CityOutlineIcon';
import { LocationOutlineIcon } from '@/components/icons/LocationOutlineIcon';
import { PeopleOutlineIcon } from '@/components/icons/PeopleOutlineIcon';
import { ThermometerOutlineIcon } from '@/components/icons/ThermometerOutlineIcon';
import { WheatOutlineIcon } from '@/components/icons/WheatOutlineIcon';

import { ContactInterface, MenuInterface } from '@/constant/interfaces';

export const menu: MenuInterface[] = [
  {
    id: v4(),
    route: '/',
    label: 'Về chúng tôi',
  },
  {
    id: v4(),
    route: '/project',
    label: 'Dự án',
  },
  {
    id: v4(),
    route: '/template',
    label: 'Kho giao diện',
  },
  {
    id: v4(),
    route: '/blog',
    label: 'Blog',
  },
];

export const contact: ContactInterface[] = [
  {
    id: v4(),
    icon: <FaFacebookF size={20} />,
    url: 'https://www.facebook.com/hellohoainhon',
    label: 'Facebook',
  },
  {
    id: v4(),
    icon: <FaYoutube size={20} />,
    url: 'https://www.youtube.com/@hellohoainhon',
    label: 'Youtube',
  },
  {
    id: v4(),
    icon: <FaInstagram size={20} />,
    url: 'https://www.instagram.com/hellohoainhon',
    label: 'Instagram',
  },
  {
    id: v4(),
    icon: <FaTiktok size={20} />,
    url: 'https://www.tiktok.com/@hellohoainhon',
    label: 'TikTok',
  },
  {
    id: v4(),
    icon: <FaPinterestP size={20} />,
    url: 'https://www.pinterest.com/hello_hoainhon',
    label: 'Pinterest',
  },
];

export const informationItems = [
  {
    id: v4(),
    icon: <CityOutlineIcon width={48} />,
    label: 'Diện tích',
    value: '1627,38ha',
  },
  {
    id: v4(),
    icon: <PeopleOutlineIcon width={48} />,
    label: 'Dân số',
    value: '12,490 người',
  },
  {
    id: v4(),
    icon: <LocationOutlineIcon width={48} />,
    label: 'Vị trí địa lý',
    value: 'Phía bắc tỉnh',
  },
  {
    id: v4(),
    icon: <WheatOutlineIcon width={48} />,
    label: 'Cây đặc trưng',
    value: 'Lúa nước',
  },
  {
    id: v4(),
    icon: <ThermometerOutlineIcon width={48} />,
    label: 'Nhiệt độ',
    value: '25°C - 30°C',
  },
];
