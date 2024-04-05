import React from 'react';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Link, useNavigate } from 'react-router-dom';
import Tooltip from '@/components/Tooltip';

const Navigation = () => {
  const navigate = useNavigate();

  const [Identity, setIdentity] = React.useState('HR');

  const pagesHR = [
    {
      description: <Link to="/profiles_hr">Employee Profiiles</Link>,
    },
    {
      description: <Link to="/visa_hr">Visa Status Management</Link>,
    },
    {
      description: <Link to="/hiring_hr">Hiring Management</Link>,
    },
  ];

  const pagesEmployee = [
    {
      description: <Link to="/onboarding">Onboarding</Link>,
    },
    {
      description: <Link to="/personal-info">Personal Information</Link>,
    },
    {
      description: <Link to="/visa">Visa Status Management</Link>,
    },
  ];

  const pages = Identity === 'HR' ? pagesHR : pagesEmployee;

  const handleLogout = () => {
    // dispatch(logout()); // dispatch logout action
    navigate('/login');
  };

  return (
    <div className="flex bg-[#6A7AAE] py-4 justify-around items-center">
      <div className="font-bold md:text-3xl text-xl ">Company A</div>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Hover to Navigate</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex flex-col w-[200px] py-2">
                {pages.map((component, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between p-2 hover:bg-accent cursor-pointer"
                  >
                    {component.description}
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div
        className="text-white hover:text-black md:text-base text-sm"
        onClick={handleLogout}
      >
        <Tooltip main="Log Out" hover="Click to Log Out" />
      </div>
    </div>
  );
};

export default Navigation;
