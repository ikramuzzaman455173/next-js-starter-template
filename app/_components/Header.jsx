import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
const Header = () => {
  return (
    <header className='p-5 border-b shadow-sm'>
      <div className={`flex justify-between`}>
        <Link href="/">
        <Image width="180" height="50" src="./logo.svg" alt="logo" />
        </Link>

        <Link href="/dashboard" className='flex items-center gap-4'>
          <Button variant="outline">Dashboard</Button>
        </Link>

      </div>
    </header>
  );
};

export default Header;
