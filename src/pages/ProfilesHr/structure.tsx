import type { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';

export type Profile = {
  fullName: string;
  SSN: string;
  workAuth: string;
  phone: string;
  email: string;
};

export const columns: ColumnDef<Profile>[] = [
  {
    accessorKey: 'fullName',
    header: () => <div className="text-center">Employee Name</div>,
    cell: row => {
      const Name = String(row.getValue());
      return (
        <div className="text-center">
          <Button variant="link">{Name}</Button>
        </div>
      );
    },
  },
  {
    accessorKey: 'SSN',
    header: 'SSN',
  },
  {
    accessorKey: 'workAuth',
    header: 'Work Authorization',
  },
  {
    accessorKey: 'phone',
    header: 'Phone Number',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
];
