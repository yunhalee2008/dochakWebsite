import React, { useContext } from 'react';
import './Technologies.css';
import meso from './assets/meso.png';
import micro from './assets/micro.png';
import nepo from './assets/nepo.png';
import twin from './assets/twin.png';
import { EnhancedStickyScroll } from './components/ui/enhanced-sticky-scroll';
import { transformTechnologiesData } from './utils/dataTransform';
import LanguageContext from './contexts/LanguageContext';

export default function Technologies() {
  const { t } = useContext(LanguageContext);

  // Create technologies data using translations
  const technologies = [
    {
      title: t('technologies.items.visum.title'),
      subtitle: t('technologies.items.visum.subtitle'),
      image: meso,
      features: [
        {
          title: t('technologies.items.visum.howItWorks'),
          desc: t('technologies.items.visum.features.howItWorks')
        },
        {
          title: t('technologies.items.visum.whatItCanDo'),
          desc: t('technologies.items.visum.features.whatItCanDo')
        },
        {
          title: t('technologies.items.visum.whereItCanBeUsed'),
          desc: t('technologies.items.visum.features.whereItCanBeUsed')
        }
      ]
    },
    {
      title: t('technologies.items.vissim.title'),
      subtitle: t('technologies.items.vissim.subtitle'),
      image: micro,
      features: [
        {
          title: t('technologies.items.visum.howItWorks'),
          desc: t('technologies.items.vissim.features.howItWorks')
        },
        {
          title: t('technologies.items.visum.whatItCanDo'),
          desc: t('technologies.items.vissim.features.whatItCanDo')
        },
        {
          title: t('technologies.items.visum.whereItCanBeUsed'),
          desc: t('technologies.items.vissim.features.whereItCanBeUsed')
        }
      ]
    },
    {
      title: t('technologies.items.mesh.title'),
      subtitle: t('technologies.items.mesh.subtitle'),
      image: nepo,
      features: [
        {
          title: t('technologies.items.visum.howItWorks'),
          desc: t('technologies.items.mesh.features.howItWorks')
        },
        {
          title: t('technologies.items.visum.whatItCanDo'),
          desc: t('technologies.items.mesh.features.whatItCanDo')
        },
        {
          title: t('technologies.items.visum.whereItCanBeUsed'),
          desc: t('technologies.items.mesh.features.whereItCanBeUsed')
        }
      ]
    },
    {
      title: t('technologies.items.digitalTwin.title'),
      subtitle: t('technologies.items.digitalTwin.subtitle'),
      image: twin,
      features: [
        {
          title: t('technologies.items.visum.howItWorks'),
          desc: t('technologies.items.digitalTwin.features.howItWorks')
        },
        {
          title: t('technologies.items.visum.whatItCanDo'),
          desc: t('technologies.items.digitalTwin.features.whatItCanDo')
        },
        {
          title: t('technologies.items.visum.whereItCanBeUsed'),
          desc: t('technologies.items.digitalTwin.features.whereItCanBeUsed')
        }
      ]
    }
  ];

  // Transform technologies data for enhanced sticky scroll
  const enhancedContent = transformTechnologiesData(technologies);

  return (
    <div className="technologies-page">
      {/* Hero Section */}
      <section className="technologies-hero">
        <div className="technologies-container">
          <h1 className="technologies-hero-title">{t('technologies.heroTitle')}</h1>
          <p className="technologies-hero-subtitle">
            {t('technologies.heroSubtitle')}
          </p>
        </div>
      </section>

      {/* Enhanced Sticky Scroll Section - Full Page Height */}
      <EnhancedStickyScroll
        content={enhancedContent}
        className="w-full"
      />
    </div>
  );
} 