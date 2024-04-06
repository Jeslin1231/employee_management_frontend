import { columns, Employee } from './structure';
import { DataTable } from './Table';
import { sampleData } from './sampleData';
import { useMemo } from 'react';

const inProgressVisa = () => {
  // const initialSteps = [
  //   'Sent registration token',
  //   'submit onboardiing application',
  // ];
  // const visaSteps = [
  //   { 'OPT receipt': ['pending', 'rejected', 'approved'] },
  //   { 'OPT EAD': ['pending', 'rejected', 'approved'] },
  //   { 'I-983': ['pending', 'rejected', 'approved'] },
  //   { 'I-20': ['pending', 'rejected', 'approved'] },
  // ];

  const data = sampleData;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const loading = useMemo(
    () => (data.length === 0 ? 'pending' : 'done'),
    [data],
  );

  if (loading === 'pending') {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <p className="text-black text-2xl font-bold">Loading...</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default inProgressVisa;