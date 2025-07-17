import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento";
import {
  IconBuilding,
  IconSettingsAutomation,
  IconApps,
  IconBriefcase
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import meso from '../../assets/meso.png'; //
import truck from '../../assets/truck_hori.png';
import multi from '../../assets/multi.png';
import working from '../../assets/working.png';

export function BentoDemo() {
  const navigate = useNavigate();

  return (
    <BentoGrid className="grid grid-cols-1 gap-4 md:grid-cols-3 max-w-4xl mx-auto m-4">
      {items.map((item, i) => (
        <div
          key={i}
          onClick={() => navigate(item.link)}
          className={`cursor-pointer transition-transform hover:scale-[1.02] ${
            i === 1 || i === 2 ? "md:col-span-2" : ""
          }`}
        >
          <BentoGridItem
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
          />
        </div>
      ))}
    </BentoGrid>
  );
}

const Skeleton = ({ img }) => (
    <div
      className="flex flex-1 w-full min-h-[9rem] rounded-xl bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${img})`,
      }}
    ></div>
  );
  
const items = [
  {
    title: "About Dochak",
    description:
      "Learn about our mission to drive safer, smarter, and seamless urban mobility.",
    header: <Skeleton img={truck}/>,
    icon: <IconBuilding className="h-5 w-5 text-neutral-500" />,
    link: "/about",
  },
  {
    title: "Core Technologies",
    description:
      "Explore our cutting-edge mesoscopic, microscopic, and 3D mesh model simulation technologies and digital twin technologies powering smart mobility.",
    header: <Skeleton img={meso}/>,
    icon: <IconSettingsAutomation className="h-5 w-5 text-neutral-500" />,
    link: "/technologies",
  },
  {
    title: "Our Solutions",
    description:
      "Discover our comprehensive suite of solutions including driving simulators, traffic analysis tools, multimodal simulation, traffic visualization, VR driving, and tele-driving.",
    header: <Skeleton img={multi}/>,
    icon: <IconApps className="h-5 w-5 text-neutral-500" />,
    link: "/solutions",
  },
  {
    title: "Projects & Impact",
    description:
      "See how Dochak transforms cities with impactful smart mobility projects.",
    header: <Skeleton img={working}/>,
    icon: <IconBriefcase className="h-5 w-5 text-neutral-500" />,
    link: "/projects",
  },
];
