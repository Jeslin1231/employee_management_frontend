import React from 'react';

const inProgressVisa = () => {
  const initialSteps = [
    'Sent registration token',
    'submit onboardiing application',
  ];
  const visaSteps = [
    { 'OPT receipt': ['pending', 'rejected', 'approved'] },
    { 'OPT EAD': ['pending', 'rejected', 'approved'] },
    { 'I-983': ['pending', 'rejected', 'approved'] },
    { 'I-20': ['pending', 'rejected', 'approved'] },
  ];

  return <div>inProgressVisa</div>;
};

export default inProgressVisa;
