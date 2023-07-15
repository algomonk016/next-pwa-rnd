'use client';
import Link from 'next/link';
import { useEffect } from 'react'
const ServiceWorkerRegister = () => {
  useEffect(() => {
    registerServiceWorker();
  }, [])

  const registerServiceWorker = async () => {
    if ("serviceWorker" in navigator) {
      try {
        const registration = await navigator.serviceWorker.register("/sw.js", {
          scope: "/",
        });
        if (registration.installing) {
          console.log("Service worker installing");
        } else if (registration.waiting) {
          console.log("Service worker installed");
        } else if (registration.active) {
          console.log("Service worker active");
        }
      } catch (error) {
        console.error(`Registration failed with ${error}`);
      }
    }
  };

  return (
    <div className='bg-slate-600 py-4 flex'>
      <Link href={'/users'} className='mx-2'>Users</Link>
      <Link href={'/posts'} className='mx-2'>Posts</Link>
    </div>
  )
}

export default ServiceWorkerRegister;