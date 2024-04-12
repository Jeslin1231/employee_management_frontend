import type { ColumnDef } from '@tanstack/react-table';
import { Link } from 'react-router-dom';

export type Employee = {
  id: string;
  username: string;
  fullName: string;
  email: string;
  status: string;
};

export const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: 'username',
    header: () => <div className="text-center my-0">Employee Username</div>,
    cell: ({ row }) => {
      return <div className="text-center">{row.original.username}</div>;
    },
  },
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
    accessorKey: 'status',
    header: () => <div className="text-center my-0">Application Status</div>,
    cell: ({ row }) => {
      return <div className="text-center">{row.original.status}</div>;
    },
  },

  {
    id: 'preview',
    cell: ({ row }) => {
      const id = row.original.id;
      const status = row.original.status;
      return (
        <Link
          to={`/onboarding_review/${id}/${status}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="text-center text-blue-600 cursor-pointer hover:underline">
            View Application
          </div>
        </Link>
      );
    },
  },
];
