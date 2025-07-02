import React from "react";
import { Timeline } from "../ui/timeline";
import "./timelineDemo.css";
import working from "../../assets/working.png";
import computer from "../../assets/computer.png";
import booth from "../../assets/booth.png";
import car from "../../assets/car.png";
import nepo from "../../assets/nepo.png";
import building from "../../assets/building.png";
import highway from "../../assets/highway.png";
import watch from "../../assets/watch.png";

export function TimelineDemo() {
  const data = [
    {
      title: "2025.01 - 06",
      content: (
        <div>
          <p className="timeline-demo-title">Startup Stage</p>
          <p className="timeline-demo-paragraph">
            Completed foundational R&D for simulator digital twin and automated systems with core element technology acquisition.
          </p>
          <p className="timeline-demo-paragraph">
            Built cooperation system with ITS companies and 3D model environment companies to enhance product accuracy and quality.
          </p>
          <p className="timeline-demo-paragraph">
            Developing a metropolitan city-centered micro mobility model for June 2025 completion.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={computer}
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src={working}
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2025.07 - 12",
      content: (
        <div>
          <p className="timeline-demo-title">Growth Stage</p>
          <p className="timeline-demo-paragraph">
            Improved the Dochak website to showcase partner and client models based on real-time models.
          </p>
          <p className="timeline-demo-paragraph">
            Promoted the company via LinkedIn and targeted SNS channels.
          </p>
          <p className="timeline-demo-paragraph">
            Participated in domestic academic mobility exhibitions for company promotion.
          </p>
          <p className="timeline-demo-paragraph">
            Built early customer pipeline using existing networks and expanded partnership channels.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={booth}
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src={car}
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2026.01 - 06",
      content: (
        <div>
          <p className="timeline-demo-title">Expansion Stage</p>
          <p className="timeline-demo-paragraph">
            Focused on maturing projects and product advancements to a scalable, stable pipeline.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={nepo}
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src={building}
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
          <p className="timeline-demo-paragraph">
          <br />Revenue target by June 2026:
          </p>
          <p className="timeline-demo-number">
            3 Billion KRW
          </p>
        </div>
      ),
    },
    {
      title: "2026.07 -",
      content: (
        <div>
          <p className="timeline-demo-title">Stabilization and Growth Stage</p>
          <p className="timeline-demo-paragraph">
            Operated stably while expanding B2B and public agency partnerships, and started continuous technology development.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={highway}
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src={watch}
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
          <p className="timeline-demo-paragraph">
            <br />Revenue target by June 2027:
          </p>
          <p className="timeline-demo-number">
            6 Billion KRW
          </p>
          <p className="timeline-demo-paragraph">
            <br />Revenue target by June 2028:
          </p>
          <p className="timeline-demo-number">
            10 Billion KRW
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="timeline-demo-container">
      <Timeline data={data} />
    </div>
  );
}
