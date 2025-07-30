import React, { useContext } from 'react';
import './PatentCard.css';
import LanguageContext from '../contexts/LanguageContext';

const PatentCard = ({ patent }) => {
  const { t } = useContext(LanguageContext);

  // Format the date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long',
      day: 'numeric'
    });
  };

  // Get translated patent name
  const getTranslatedPatentName = (patentName) => {
    // Use the patent name directly as the translation key
    const translatedName = t(`disclosure.patentNames.${patentName}`);
    
    // If translation exists and is different from the key, return it
    if (translatedName && translatedName !== `disclosure.patentNames.${patentName}`) {
      return translatedName;
    }
    
    // If no translation found, return the original name
    return patentName;
  };

  // Get translated country name
  const getTranslatedCountryName = (countryName) => {
    // Create a mapping from country names to translation keys
    const countryToKeyMap = {
      '대한민국': 'KR',
      'South Korea': 'KR',
      'United States': 'US',
      'China': 'CN',
      'Japan': 'JP',
      'Germany': 'DE',
      'United Kingdom': 'GB',
      'France': 'FR',
      'Canada': 'CA',
      'Australia': 'AU',
      'India': 'IN',
      'European Union': 'EU'
    };

    const translationKey = countryToKeyMap[countryName];
    if (translationKey) {
      return t(`disclosure.countries.${translationKey}`) || countryName;
    }
    
    // If no translation key found, return the original name
    return countryName;
  };

  // Get status label and styling
  const getStatusInfo = (status) => {
    if (status === 'registered') {
      return {
        label: t('disclosure.patentStatus.registered') || 'Registered',
        className: 'patent-status-registered'
      };
    } else {
      return {
        label: t('disclosure.patentStatus.pending') || 'Pending',
        className: 'patent-status-pending'
      };
    }
  };

  const statusInfo = getStatusInfo(patent.status);

  return (
    <article 
      className="patent-card"
      role="article"
      aria-labelledby={`patent-name-${patent.id}`}
    >
      <header className="patent-header">
        <div 
          className={`patent-status ${statusInfo.className}`}
          role="img"
          aria-label={`Patent status: ${statusInfo.label}`}
        >
          {statusInfo.label}
        </div>
        <div 
          className="patent-country"
          aria-label={`Country: ${getTranslatedCountryName(patent.country)}`}
        >
          {getTranslatedCountryName(patent.country)}
        </div>
      </header>
      
      <div className="patent-content">
        <h3 
          className="patent-name"
          id={`patent-name-${patent.id}`}
        >
          {getTranslatedPatentName(patent.name)}
        </h3>
        
        <dl className="patent-details">
          <div className="patent-date">
            <dt className="patent-date-label">
              {patent.status === 'registered' 
                ? (t('disclosure.registrationDate') || 'Registration Date') 
                : (t('disclosure.applicationDate') || 'Application Date')
              }:
            </dt>
            <dd className="patent-date-value">
              <time 
                dateTime={patent.registrationDate}
                aria-label={formatDate(patent.registrationDate)}
              >
                {formatDate(patent.registrationDate)}
              </time>
            </dd>
          </div>
          
          {patent.registrationNumber && (
            <div className="patent-number">
              <dt className="patent-number-label">
                {t('disclosure.registrationNumber') || 'Registration Number'}:
              </dt>
              <dd 
                className="patent-number-value"
                aria-label={`Registration number: ${patent.registrationNumber}`}
              >
                {patent.registrationNumber}
              </dd>
            </div>
          )}
          
          {patent.managementNumber && (
            <div className="patent-number">
              <dt className="patent-number-label">
                {t('disclosure.managementNumber') || 'Management Number'}:
              </dt>
              <dd 
                className="patent-number-value"
                aria-label={`Management number: ${patent.managementNumber}`}
              >
                {patent.managementNumber}
              </dd>
            </div>
          )}
        </dl>
      </div>
    </article>
  );
};

export default PatentCard;