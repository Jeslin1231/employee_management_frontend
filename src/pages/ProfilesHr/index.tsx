import { Profile, columns } from './structure';
import { DataTable } from '@/components/Table';
import { sampleData } from './sampleData';

// async function getData(): Promise<Profile[]> {
//   // Fetch data from your API here.x
//   return [
//     {
//       id: "728ed52f",
//       amount: 100,
//       status: "pending",
//       email: "m@example.com",
//     },
//     // ...
//   ]
// }

const ProfilesHr = () => {
  const data = sampleData;
  return (
    <div className="flex flex-grow bg-slate-200">
      <div className="w-4/5 flex flex-col m-auto bg-white rounded-lg my-20">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default ProfilesHr;
