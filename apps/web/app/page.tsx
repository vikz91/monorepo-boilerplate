import { User, ApiResponse } from '@repo/types';
import { capitalize } from '@repo/shared';

export default async function Home() {
  let users: User[] = [];
  let error = '';

  try {
    const res = await fetch('http://localhost:3001/api/users', { cache: 'no-store' });
    const data: ApiResponse<User[]> = await res.json();
    if (data.success) {
      users = data.data;
    }
  } catch (e) {
    error = 'Failed to fetch users. Ensure API is running.';
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold mb-8">
          {capitalize('byte Prep Me Monorepo')}
        </h1>
        
        {error && <p className="text-red-500">{error}</p>}

        <div className="grid grid-cols-1 gap-4">
          {users.map((user) => (
            <div key={user.id} className="p-4 border rounded-lg shadow-sm">
              <p className="font-bold">{user.name}</p>
              <p className="text-gray-500">{user.email}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
