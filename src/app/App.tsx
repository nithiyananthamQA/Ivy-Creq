import { Suspense } from 'react';
import { RouterProvider } from 'react-router';
import { router } from './routes';

export default function App() {
  return (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  );
}
