import type { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import Tooltip from '../../../components/Tooltip/index';
import { useState } from 'react';

export type History = {
  username: string;
  fullName: string;
  URL: string;
  email: string;
  status: string;
};

export const columns: ColumnDef<History>[] = [
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
    header: () => (
      <div className="text-center my-0">Registration Link Accepted Email</div>
    ),
    cell: ({ row }) => {
      return <div className="text-center">{row.original.email}</div>;
    },
  },
  {
    accessorKey: 'URL',
    header: () => <div className="text-center my-0">Registration Link</div>,
    cell: ({ row }) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [copied, setCopied] = useState(false);
      const copyToClipboard = () => {
        navigator.clipboard
          .writeText(row.original.URL)
          .then(() => {
            setCopied(true);
            setTimeout(() => {
              setCopied(false);
            }, 1500); // Reset copied state after 1.5 seconds
          })
          .catch(err => console.error('Could not copy text: ', err));
      };
      return (
        <div className="flex justify-center">
          <div className="flex ">
            <div onClick={copyToClipboard}>
              <Button variant="link">
                <Tooltip
                  main={copied ? 'Copied!' : 'Copy:'}
                  hover="Click to Copy Link"
                />
              </Button>
            </div>

            <div className="w-80 overflow-x-auto">{row.original.URL}</div>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: 'status',
    header: () => (
      <div className="text-center my-0">Onboarding Application Status</div>
    ),
    cell: ({ row }) => {
      return <div className="text-center">{row.original.status}</div>;
    },
  },
];
