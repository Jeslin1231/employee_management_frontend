import type { ColumnDef } from '@tanstack/react-table';

export type History = {
  fullName: string;
  email: string;
  status: string;
  registrationLink: string;
};

export const columns: ColumnDef<History>[] = [
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
    accessorKey: 'registrationLink',
    header: () => <div className="text-center my-0">Registration Link</div>,
    cell: ({ row }) => {
      return <div className="text-center">{row.original.registrationLink}</div>;
    },
  },
  {
    accessorKey: 'status',
    header: () => <div className="text-center my-0">Status</div>,
    cell: ({ row }) => {
      return <div className="text-center">{row.original.status}</div>;
    },
  },
];
