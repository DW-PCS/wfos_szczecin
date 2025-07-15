'use client';


import AdminHomeTabs from './admin-home-tabs';
import { AdminHomepageHeader } from './admin-homepage-header';

export function AdminHomepagePage() {


  return (
    <div className="space-y-6">
      <AdminHomepageHeader />
      <AdminHomeTabs />
    </div>
  );
}
