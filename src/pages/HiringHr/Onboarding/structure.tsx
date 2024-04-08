import type { ColumnDef } from '@tanstack/react-table';
import { Link } from 'react-router-dom';

export type Employee = {
  fullName: string;
  email: string;
  applicationStatus: string;
};

export const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: 'fullName',
    header: () => <div className="text-center my-0">Employee Name</div>,
    cell: ({ row }) => {
      return <div className="text-center">{row.original.fullName}</div>;
    },
  },
  {
    accessorKey: 'email',
    header: () => <div className="text-center my-0">Email</div>,
    cell: ({ row }) => {
      return <div className="text-center">{row.original.email}</div>;
    },
  },
  {
    accessorKey: 'applicationStatus',
    header: () => <div className="text-center my-0">Application Status</div>,
    cell: ({ row }) => {
      return (
        <div className="text-center">{row.original.applicationStatus}</div>
      );
    },
  },

  {
    id: 'preview',
    cell: ({ row }) => {
      return (
        <Link to={`/onboarding`}>
          <div className="text-center text-blue-600 cursor-pointer hover:underline">
            View Application
          </div>
        </Link>
      );
    },
  },
];
