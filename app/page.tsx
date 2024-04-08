import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/dashboard/1')
  
  return (
    <>
      <h1>Home</h1>
    </>
  );
}
