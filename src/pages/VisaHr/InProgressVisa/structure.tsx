import type { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Textarea } from '@/components/ui/textarea';

import Tooltip from '@/components/Tooltip/index';
import { Link } from 'react-router-dom';
import { useState } from 'react';

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
    header: () => <div className="text-center my-0">Employee Name</div>,
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
    header: () => <div className="text-center my-0">Work Authorization</div>,
    cell: ({ row }) => {
      return (
        <div className="flex justify-center">
          <div className="flex flex-col justify-center px-1 w-30 border-l-2">
            <div>
              <span>Title: {row.original.workAuth.title}</span>
            </div>
            <div>
              <span>Remaining Days: {row.original.workAuth.remainingDays}</span>
            </div>
          </div>

          <div className="flex flex-col justify-center w-40 px-1 border-l-2">
            <div>
              <span>Start Date: {row.original.workAuth.startDate}</span>
            </div>
            <div>
              <span>End Date: {row.original.workAuth.endDate}</span>
            </div>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: 'nextStep',
    header: () => <div className="text-center my-0">Next Step</div>,
    cell: ({ row }) => {
      return <div className="text-center">{row.original.nextStep}</div>;
    },
  },

  {
    id: 'actions',
    header: () => <div className="text-center my-0">Action List</div>,
    cell: ({ row }) => {
      const handleNotification = () => {
        alert('notification');
      };

      const handlePreview = () => {
        alert('preview');
      };

      const handleApprove = () => {
        alert('approve');
      };
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [feedback, setFeedback] = useState('');

      const handleFeedback = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFeedback(e.target.value);
      };

      const handleReject = () => {
        console.log(feedback);
        alert('reject');
      };

      if (row.original.nextStep.includes('Submit')) {
        return (
          <div className="text-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={handleNotification}
                >
                  Send Notification
                </DropdownMenuItem>
                {/* <DropdownMenuSeparator /> */}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        );
      } else if (row.original.nextStep.includes('approval')) {
        return (
          <div className="text-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={handlePreview}
                >
                  Preview Documents
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <div className="flex flex-col">
                  <DropdownMenuItem
                    className="cursor-pointer"
                    onClick={handleApprove}
                  >
                    Approve
                  </DropdownMenuItem>
                  <div className="flex items-center">
                    <Textarea
                      placeholder="Give some feedback for reject"
                      value={feedback}
                      onChange={handleFeedback}
                    />
                    <Button
                      className="ml-2"
                      variant="outline"
                      onClick={handleReject}
                    >
                      <DropdownMenuItem>Reject</DropdownMenuItem>
                    </Button>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        );
      }

      return (
        <div className="text-center">
          No Action Available
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                // onClick={() => navigator.clipboard.writeText(payment.id)}
              >
                Copy payment ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View customer</DropdownMenuItem>
              <DropdownMenuItem>View payment details</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
        </div>
      );
    },
  },
];
