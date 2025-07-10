'use client';

import { usePathname } from 'next/navigation';
import { Suspense } from 'react';

export default function PageTransitionWrapper({ children }) {
  const pathname = usePathname();

  return (
    <main key={pathname} className="flex min-h-screen flex-col">
      <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
        {children}
      </Suspense>
    </main>
  );
}
