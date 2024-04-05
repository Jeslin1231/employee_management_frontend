import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AllVisa from './allVisa';
import InProgressVisa from './inProgressVisa';

const VisaHr = () => {
  return (
    <div className="flex flex-col flex-grow bg-slate-200">
      <div className="w-4/5 min-h-[600px] p-2 flex flex-col bg-white rounded-lg mx-auto mb-20">
        <header className="text-2xl text-left m-5">
          Employee Profiles for HR to Review
        </header>
        <Tabs defaultValue="progress" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="progress">In Progress Visa </TabsTrigger>
            <TabsTrigger value="all">All Visa</TabsTrigger>
          </TabsList>
          <TabsContent value="progress">
            <InProgressVisa />
          </TabsContent>
          <TabsContent value="all">
            <AllVisa />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default VisaHr;
