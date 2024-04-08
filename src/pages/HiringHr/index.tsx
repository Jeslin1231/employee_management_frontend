import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import Onboarding from './Onboarding';
import Token from './Token';

const HiringHr = () => {
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
              <TabsTrigger value="progress">Registration Token </TabsTrigger>
              <TabsTrigger value="all">
                Onboarding Application Review
              </TabsTrigger>
            </TabsList>
            <TabsContent value="progress">
              <Token />
            </TabsContent>
            <TabsContent value="all">
              <Onboarding />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default HiringHr;
