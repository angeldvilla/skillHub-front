import React from "react";
import { Link } from "react-router-dom";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  Square3Stack3DIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
 
export default function VerticalTabsWithIcon() {
  const data = [
    {
      label: "Profile",
      value: "profile",
      icon: UserCircleIcon,
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
        label: "My Services",
        value: "services",
        icon: Square3Stack3DIcon
    },
    {
      label: "Settings",
      value: "settings",
      icon: Cog6ToothIcon,
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
  ];
  return (
    <Tabs value="profile" orientation="vertical">
      <TabsHeader className="w-40">
        {data.map(({ label, value, icon }) => (
        <Link to={value === 'services' ? "/WorkPublications" : `/${value}`} key={value}>
            <Tab key={value} value={value} className="place-items-start">
                <div className="flex items-center gap-2">
                {React.createElement(icon, { className: "w-5 h-5" })}
                {label}
                </div>
            </Tab>
        </Link>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value} className="py-0">
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}