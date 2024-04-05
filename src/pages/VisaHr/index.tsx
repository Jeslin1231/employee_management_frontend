import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import AllVisa from './allVisa/allVisa';
import InProgressVisa from './InProgressVisa/inProgressVisa';

const VisaHr = () => {
  return (
    <div className="flex flex-col flex-grow bg-slate-200">
      <div className="w-4/5 min-h-[600px] py-2 flex flex-col bg-white rounded-lg mx-auto mb-20">
        <header className="text-3xl font-semibold text-left m-5 mx-28">
          Visa Status Management for HR
        </header>
        <Separator className="my-5 w-4/5 self-center" />

        <div className="mx-28">
          <Tabs defaultValue="progress" className="w-full">
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
    </div>
  );
};

export default VisaHr;
