import React, { useContext } from "react";
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
import LanguageContext from "../../contexts/LanguageContext";

export function TimelineDemo() {
  const { t } = useContext(LanguageContext);
  
  const data = [
    {
      title: "2025.01 - 06",
      content: (
        <div>
          <p className="timeline-demo-title">{t('timeline.startup.title')}</p>
          <p className="timeline-demo-paragraph">
            {t('timeline.startup.content1')}
          </p>
          <p className="timeline-demo-paragraph">
            {t('timeline.startup.content2')}
          </p>
          <p className="timeline-demo-paragraph">
            {t('timeline.startup.content3')}
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
          <p className="timeline-demo-title">{t('timeline.growth.title')}</p>
          <p className="timeline-demo-paragraph">
            {t('timeline.growth.content1')}
          </p>
          <p className="timeline-demo-paragraph">
            {t('timeline.growth.content2')}
          </p>
          <p className="timeline-demo-paragraph">
            {t('timeline.growth.content3')}
          </p>
          <p className="timeline-demo-paragraph">
            {t('timeline.growth.content4')}
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
          <p className="timeline-demo-title">{t('timeline.expansion.title')}</p>
          <p className="timeline-demo-paragraph">
            {t('timeline.expansion.content1')}
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
          <br />{t('timeline.expansion.revenueTarget')}
          </p>
          <p className="timeline-demo-number">
            {t('timeline.expansion.revenueAmount')}
          </p>
        </div>
      ),
    },
    {
      title: "2026.07 -",
      content: (
        <div>
          <p className="timeline-demo-title">{t('timeline.stabilization.title')}</p>
          <p className="timeline-demo-paragraph">
            {t('timeline.stabilization.content1')}
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
            <br />{t('timeline.stabilization.revenueTarget2026')}
          </p>
          <p className="timeline-demo-number">
            {t('timeline.stabilization.revenueAmount2026')}
          </p>
          <p className="timeline-demo-paragraph">
            <br />{t('timeline.stabilization.revenueTarget2027')}
          </p>
          <p className="timeline-demo-number">
            {t('timeline.stabilization.revenueAmount2027')}
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
