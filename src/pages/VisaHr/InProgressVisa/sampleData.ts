// const handleNextStep = (visa) => {
//   if (["Unsubmitted", "Rejected"].includes(visa.opt_receipt)) {
//     return "Submit OPT receipt";
//   } else if (visa.opt_receipt === "Pending") {
//     return "OPT Receipt: wait for HR approval";
//   } else if (["Unsubmitted", "Rejected"].includes(visa.opt_ead)) {
//     return "Submit OPT EAD";
//   } else if (visa.opt_ead === "Pending") {
//     return "OPT EAD: wait for HR approval";
//   } else if (["Unsubmitted", "Rejected"].includes(visa.i983)) {
//     return "Submit I-983";
//   } else if (visa.i983 === "Pending") {
//     return "I-983: wait for HR approval";
//   } else if (["Unsubmitted", "Rejected"].includes(visa.i20)) {
//     return "Submit I-20";
//   } else if (visa.i20 === "Pending") {
//     return "I-20: wait for HR approval";
//   } else {
//     return "All documents have been approved";
//   }
// };

type employee = {
  id: string;
  fullName: string;
  workAuth: {
    title: string;
    startDate: string;
    endDate: string;
    remainingDays: number;
  };
  nextStep: string;
  // action: string;
};

export const sampleData: employee[] = [
  {
    id: '1',
    fullName: 'Chen yi',
    workAuth: {
      title: 'H1-B',
      startDate: '2021-01-01',
      endDate: '2024-01-01',
      remainingDays: 100,
    },
    nextStep: 'Submit OPT receipt',
    // action: 'Renew H1-B'
  },
  {
    id: '2',
    fullName: 'Wang Er',
    workAuth: {
      title: 'L2',
      startDate: '2021-01-01',
      endDate: '2024-01-01',
      remainingDays: 100,
    },
    nextStep: 'OPT Receipt: wait for HR approval',
    // action: 'Renew L2'
  },
  {
    id: '3',
    fullName: 'Zhang San',
    workAuth: {
      title: 'H1-B',
      startDate: '2021-01-01',
      endDate: '2024-01-01',
      remainingDays: 100,
    },
    nextStep: 'Submit OPT EAD',
    // action: 'Renew H1-B'
  },
  {
    id: '4',
    fullName: 'Li Si',
    workAuth: {
      title: 'H4',
      startDate: '2021-01-01',
      endDate: '2024-01-01',
      remainingDays: 100,
    },
    nextStep: 'OPT EAD: wait for HR approval',
    // action: 'Renew H4'
  },
  {
    id: '5',
    fullName: 'Zhao Wu',
    workAuth: {
      title: 'F1-OPT',
      startDate: '2021-01-01',
      endDate: '2024-01-01',
      remainingDays: 100,
    },
    nextStep: 'Submit I-983',
    // action: 'Renew F1-OPT'
  },
  {
    id: '6',
    fullName: 'Qian Liu',
    workAuth: {
      title: 'F1-CPT',
      startDate: '2021-01-01',
      endDate: '2024-01-01',
      remainingDays: 100,
    },
    nextStep: 'I-983: wait for HR approval',
    // action: 'Renew F1-CPT'
  },
  {
    id: '1',
    fullName: 'Chen yi',
    workAuth: {
      title: 'H1-B',
      startDate: '2021-01-01',
      endDate: '2024-01-01',
      remainingDays: 100,
    },
    nextStep: 'Submit I-20',
    // action: 'Renew H1-B'
  },
  {
    id: '2',
    fullName: 'Wang Er',
    workAuth: {
      title: 'L2',
      startDate: '2021-01-01',
      endDate: '2024-01-01',
      remainingDays: 100,
    },
    nextStep: 'I-20: wait for HR approval',
    // action: 'Renew L2'
  },
  {
    id: '3',
    fullName: 'Zhang San',
    workAuth: {
      title: 'H1-B',
      startDate: '2021-01-01',
      endDate: '2024-01-01',
      remainingDays: 100,
    },
    nextStep: 'Submit Onboarding Application',
    // action: 'Renew H1-B'
  },
  {
    id: '4',
    fullName: 'Li Si',
    workAuth: {
      title: 'H4',
      startDate: '2021-01-01',
      endDate: '2024-01-01',
      remainingDays: 100,
    },
    nextStep: 'Renew H4',
    // action: 'Renew H4'
  },
  {
    id: '5',
    fullName: 'Zhao Wu',
    workAuth: {
      title: 'F1-OPT',
      startDate: '2021-01-01',
      endDate: '2024-01-01',
      remainingDays: 100,
    },
    nextStep: 'Renew F1-OPT',
    // action: 'Renew F1-OPT'
  },
  {
    id: '6',
    fullName: 'Qian Liu',
    workAuth: {
      title: 'F1-CPT',
      startDate: '2021-01-01',
      endDate: '2024-01-01',
      remainingDays: 100,
    },
    nextStep: 'Renew F1-CPT',
    // action: 'Renew F1-CPT'
  },
  {
    id: '1',
    fullName: 'Chen yi',
    workAuth: {
      title: 'H1-B',
      startDate: '2021-01-01',
      endDate: '2024-01-01',
      remainingDays: 100,
    },
    nextStep: 'Renew H1-B',
    // action: 'Renew H1-B'
  },
  {
    id: '2',
    fullName: 'Wang Er',
    workAuth: {
      title: 'L2',
      startDate: '2021-01-01',
      endDate: '2024-01-01',
      remainingDays: 100,
    },
    nextStep: 'Renew L2',
    // action: 'Renew L2'
  },
  {
    id: '3',
    fullName: 'Zhang San',
    workAuth: {
      title: 'H1-B',
      startDate: '2021-01-01',
      endDate: '2024-01-01',
      remainingDays: 100,
    },
    nextStep: 'Renew H1-B',
    // action: 'Renew H1-B'
  },
  {
    id: '4',
    fullName: 'Li Si',
    workAuth: {
      title: 'H4',
      startDate: '2021-01-01',
      endDate: '2024-01-01',
      remainingDays: 100,
    },
    nextStep: 'Renew H4',
    // action: 'Renew H4'
  },
  {
    id: '5',
    fullName: 'Zhao Wu',
    workAuth: {
      title: 'F1-OPT',
      startDate: '2021-01-01',
      endDate: '2024-01-01',
      remainingDays: 100,
    },
    nextStep: 'Renew F1-OPT',
    // action: 'Renew F1-OPT'
  },
  {
    id: '6',
    fullName: 'Qian Liu',
    workAuth: {
      title: 'F1-CPT',
      startDate: '2021-01-01',
      endDate: '2024-01-01',
      remainingDays: 100,
    },
    nextStep: 'Renew F1-CPT',
    // action: 'Renew F1-CPT'
  },
];
