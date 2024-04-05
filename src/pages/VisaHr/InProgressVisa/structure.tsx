import type { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import Tooltip from '@/components/Tooltip/index';
import { Link } from 'react-router-dom';

export type Employee = {
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

export const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: 'fullName',
    header: () => <div className="text-center my-6">Employee Name</div>,
    cell: ({ row }) => {
      return <div className="text-center">{row.original.fullName}</div>;
    },
  },

  // {
  //     accessorKey: 'userName',
  //     header: () => <div className="text-center my-6">User Name</div>,
  //     cell: ({ row }) => {
  //         return <div className="text-center">{row.original.userName}</div>;
  //     },
  // },

  {
    accessorKey: 'workAuth',
    header: () => <div className="text-center my-6">Work Authorization</div>,
    cell: ({ row }) => {
      return <div className="text-center">{row.original.workAuth.title}</div>;
    },
  },
  {
    accessorKey: 'nextStep',
    header: () => <div className="text-center my-6">Next Step</div>,
    cell: ({ row }) => {
      return <div className="text-center">{row.original.nextStep}</div>;
    },
  },
];
