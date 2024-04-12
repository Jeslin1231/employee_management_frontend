import type { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import Tooltip from '../../components/Tooltip/index';
import { Link } from 'react-router-dom';

export type Profile = {
  user: string;
  firstName: string;
  lastName: string;
  middleName: string;
  ssn: string;
  visaType: string;
  workPhone: string;
  cellPhone: string;
  email: string;
};

export const columns: ColumnDef<Profile>[] = [
  {
    id: 'fullName',
    accessorFn: row => `${row.firstName} ${row.middleName} ${row.lastName}`,
    header: () => <div className="text-center my-6">Employee Name</div>,
    cell: ({ row }) => {
      let Name: string;
      if (row.original.middleName === null) {
        Name = row.original.firstName + ' ' + row.original.lastName;
      } else {
        Name =
          row.original.firstName +
          ' ' +
          row.original.middleName +
          ' ' +
          row.original.lastName;
      }
      const id = row.original.user;

      return (
        <div className="text-center">
          <Link
            to={`/profile_review/${id}`}
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
      return <div className="text-center">{row.original.ssn}</div>;
    },
  },
  {
    accessorKey: 'workAuth',
    header: () => <div className="text-center my-6">Work Authorization</div>,
    cell: ({ row }) => {
      return <div className="text-center">{row.original.visaType}</div>;
    },
  },
  {
    accessorKey: 'phone',
    header: () => <div className="text-center my-6">Phone Number</div>,
    cell: ({ row }) => {
      return (
        <div className="flex justify-center">
          <div className="w-40 px-1 border-l-2">
            Work:{row.original.workPhone}
          </div>
          <div className="w-40 px-1 border-l-2">
            Cellphone:{row.original.cellPhone}
          </div>
        </div>
      );
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
