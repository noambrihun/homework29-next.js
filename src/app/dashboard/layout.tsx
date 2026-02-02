 "use client";
 import Link from "next/link";
 
 function DashboardLayout({children,}: { children: React.ReactNode;}) {
    return (
        <div className="flex min-h-screen">

        <aside className="w-52 bg-gray-200 p-5">
          <p className="font-bold mb-4">Dashboard Menu</p>
  
          <ul className="space-y-2">
            <li><Link href="/dashboard">Dashboard</Link></li>
            <li><Link href="/dashboard/projects">Projects</Link></li>
            <li><Link href="/dashboard/tasks">Tasks</Link></li>
            <li><Link href="/dashboard/tasks/create">Create Task</Link></li>
            <li><Link href="/dashboard/settings">Settings</Link></li>
          </ul>
        </aside>
  
        <main className="flex-1  bg-white">
       <header className="h-14 border-b px-6 flex items-center font-semibold">
       Dashboard Header
       </header>
       <div className="p-6">
          {children}
          </div>
        </main>
  
      </div>
    );
  }

  export default DashboardLayout;
  