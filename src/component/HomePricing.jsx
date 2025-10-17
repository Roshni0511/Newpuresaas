import React, { useState } from 'react';
import '../assets/css/Homepricing.css'; // import CSS

// Icons
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5"/>
  </svg>
);

const MinusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/>
  </svg>
);

const plansData = [
  {
    name: 'Simplified',
    description: 'For individuals and small teams with unlimited trial access.',
    features: [
      { text: 'Single Payment', included: true },
      { text: 'Selling your own items', included: true },
      { text: 'Powerful Integration', included: true },
      { text: 'Dedicated Account Manager', included: false }, 
      { text: 'Custom Development', included: false },
    ],
    pricing: { monthly: 190, yearly: 136.8 },
    highlight: false,
  },
  {
    name: 'Basic',
    description: 'For individuals and small teams with unlimited trial access.',
    features: [
      { text: 'Unlimited Bandwidth', included: true },
      { text: 'Promotional Tools', included: true },
      { text: 'Advanced Analytics', included: true },
      { text: 'Priority Support', included: true },
      { text: 'Custom Integrations', included: true },
      { text: 'White Label Solution', included: true },
    ],
    pricing: { monthly: 300, yearly: 352.8 },
    highlight: true,
  },
  {
    name: 'Enhanced',
    description: 'For individuals and small teams with unlimited trial access.',
    features: [
      { text: 'Everything in Basic', included: true },
      { text: 'Custom Integrations', included: true },
      { text: 'White Label Solution', included: true },
      { text: 'Dedicated Account Manager', included: true },
      { text: 'Custom Development', included: true },
    ],
    pricing: { monthly: 400, yearly: 712.8 },
    highlight: false,
  },
];

const HomePricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const getPrice = (plan) => billingCycle === 'monthly' ? plan.pricing.monthly : Math.round(plan.pricing.yearly);

  const getPriceDisplay = (plan) => {
    const price = getPrice(plan);
    const period = billingCycle === 'monthly' ? 'Month' : 'Year';
    const perText = billingCycle === 'monthly' ? 'Per Month' : 'Billed Annually';
    const monthlyEquivalent = (plan.pricing.monthly * 12 * 0.6) / 12;

    return (
      <div>
        <div className="pricing-price-row">
          <span style={{fontSize:"2.5rem", fontWeight:800}}>₹ {price}</span>
          <span className="highlight-period-text"> / {period}</span>
        </div>
        {billingCycle === 'yearly' && (
          <div className="text-sm italic opacity-75 highlight-period-text-sm">
            (₹{monthlyEquivalent.toFixed(2)} effective / month)
          </div>
        )}
        <p className="highlight-per-month-text">{perText}</p>
      </div>
    );
  };

  return (
    <div className="homeprice">
        <div className="min-h-screen font-inter ">
      <div className="pricing-header  ">
        <span className='pricing-badge'>Our pricing</span>
        <h1 className="select-plan-title wow animate__animated animate__fadeInUp ">Select the pricing plan that best suits your needs.</h1>
      </div>

      {/* Toggle */}
      <div className="plan-button">
        <div className="toggle-wrapper">
          <button className={billingCycle==='monthly'?'active':''} onClick={()=>setBillingCycle('monthly')}>Monthly</button>
          <button className={billingCycle==='yearly'?'active':''} onClick={()=>setBillingCycle('yearly')}>Yearly</button>
          <div className="save-tag ">Save 40%</div>
        </div>
      </div>

      {/* Cards */}
      <div className="plan-cards-container wow animate__animated animate__fadeInUp">
        {plansData.map(plan => {
          const cardClass = plan.highlight ? 'highlight-card' : 'pricing-card-base';
          const buttonClass = plan.highlight ? 'button-base button-highlight' : 'button-base';
          return (
            <div key={plan.name} className={cardClass}>
              <div>
                <h2>{plan.name}</h2>
                <p>{plan.description}</p>
              </div>

              <div >
                {getPriceDisplay(plan)}
              </div>

              <button className={buttonClass}>Get started</button>

              <ul >
                {plan.features.map((feature,index)=>(
                  <li key={index} className="feature-item">
                   {feature.included ? (
                <i className={`fa-solid fa-circle-check ${plan.highlight ? 'highlight-included' : 'included'}`}></i>
                ) : (
                     <i className={`fa-solid fa-circle-minus ${plan.highlight ? 'highlight-excluded' : 'excluded'}`}></i>
                )}
                    <span className={feature.included ? (plan.highlight?'text-white':'text-gray-700') : (plan.highlight?'text-white/60':'text-gray-500')}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
};

export default HomePricing;
