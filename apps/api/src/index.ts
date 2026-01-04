import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { User, ApiResponse } from '@repo/types';
import { formatDate } from '@repo/shared';

const app = new Hono();

app.use('/*', cors());

app.get('/', (c) => {
  return c.text('Hello Hono!');
});

app.get('/api/users', (c) => {
  const users: User[] = [
    { id: '1', name: 'Alice', email: 'alice@example.com' },
    { id: '2', name: 'Bob', email: 'bob@example.com' },
  ];
  
  const response: ApiResponse<User[]> = {
    data: users,
    success: true,
    message: `Fetched at ${formatDate(new Date())}`
  };

  return c.json(response);
});

export default { 
    port: 3001, 
    fetch: app.fetch 
};
