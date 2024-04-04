import type { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import Tooltip from '../../components/Tooltip/index';
import { Link } from 'react-router-dom';

export type Profile = {
  id: string;
  fullName: string;
  SSN: string;
  workAuth: string;
  phone: string;
  email: string;
};

export const columns: ColumnDef<Profile>[] = [
  {
    accessorKey: 'fullName',
    header: () => <div className="text-center my-6">Employee Name</div>,
    cell: ({ row }) => {
      const Name = row.original.fullName;
      const id = row.original.id;

      return (
        <div className="text-center">
          <Link
            to={`/personal-info/${id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="link">
              <Tooltip main={Name} hover="View Profile" />
            </Button>
          </Link>
        </div>
      );
    },
  },
  {
    accessorKey: 'SSN',
    header: () => <div className="text-center my-6">SSN</div>,
    cell: ({ row }) => {
      return <div className="text-center">{row.original.SSN}</div>;
    },
  },
  {
    accessorKey: 'workAuth',
    header: () => <div className="text-center my-6">Work Authorization</div>,
    cell: ({ row }) => {
      return <div className="text-center">{row.original.workAuth}</div>;
    },
  },
  {
    accessorKey: 'phone',
    header: () => <div className="text-center my-6">Phone Number</div>,
    cell: ({ row }) => {
      return <div className="text-center">{row.original.phone}</div>;
    },
  },
  {
    accessorKey: 'email',
    header: () => <div className="text-center my-6">Email</div>,
    cell: ({ row }) => {
      return <div className="text-center">{row.original.email}</div>;
    },
  },
];
