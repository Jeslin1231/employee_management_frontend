import React from 'react';
import { columns, Employee } from './structure';
import { DataTable } from './Table';
import { employeeData } from './sampleData';
import { useMemo } from 'react';
import { Separator } from '@/components/ui/separator';

const Onboarding = () => {
  const data = employeeData;

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
    <div className="flex flex-col h-auto">
      <div className="m-5">
        <header className="text-xl font-semibold text-left mx-5">
          Pending Applications
        </header>

        <div className="h-80 overflow-scroll mx-20">
          <DataTable
            columns={columns}
            data={data}
            filterid="applicationStatus"
            filtervalue="Pending"
          />
        </div>
      </div>
      <Separator />
      <div className="m-5">
        <header className="text-xl font-semibold text-left mx-5">
          Approved Applications
        </header>

        <div className="h-80 overflow-scroll mx-20">
          <DataTable
            columns={columns}
            data={data}
            filterid="applicationStatus"
            filtervalue="Approved"
          />
        </div>
      </div>
      <Separator />
      <div className="m-5">
        <header className="text-xl font-semibold text-left mx-5">
          Rejected Applications
        </header>

        <div className="h-80 overflow-scroll mx-20">
          <DataTable
            columns={columns}
            data={data}
            filterid="applicationStatus"
            filtervalue="Rejected"
          />
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
