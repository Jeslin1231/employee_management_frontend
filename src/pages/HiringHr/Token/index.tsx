import { columns, History } from './structure';
import { DataTable } from './Table';
import { tokenData } from './sampleData';
import { useMemo } from 'react';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Token = () => {
  const data = tokenData;
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(true);
  const handleSend = () => {
    let found = email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g);
    if (found) {
      setValidEmail(true);
      console.log('Send', email);
    } else {
      setEmail('');
      setValidEmail(false);
    }
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const loading = useMemo(
    () => (data.length === 0 ? 'pending' : 'done'),
    [data],
  );

  if (loading === 'pending') {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <p className="text-black text-2xl font-bold">Loading...</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div>
        <header className="text-2xl font-semibold text-left mx-5 mt-5">
          Registration Token
        </header>

        <div className="text-gray-400 mx-5">
          Generate token and send it to the candidate for registration
        </div>

        <div className="ml-20 my-5">
          <div className="flex gap-5">
            <Input
              type="email"
              placeholder="Email for new employee"
              className="w-80"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />

            <Button onClick={handleSend}>Send</Button>
          </div>

          <div className="text-red-500 text-sm">
            {!validEmail && 'Please enter a valid email'}
          </div>
        </div>
      </div>

      <Separator />

      <div className="mt-5">
        <div>
          <header className="text-2xl font-semibold text-left m-5">
            Token History
          </header>
        </div>

        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default Token;
