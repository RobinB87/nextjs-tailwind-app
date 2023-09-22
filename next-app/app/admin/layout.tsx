import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

// create nested layout by creating a file layout.tsx
// it should have children of type ReactNode
// this will be the common ui for all the admin pages
const AdminLayout = ({ children }: Props) => {
  return (
    <div className="flex">
      <aside className="bg-slate-200 p-5 mr-5">Admin Sidebar</aside>
      <div>{children}</div>
    </div>
  );
};

export default AdminLayout;
