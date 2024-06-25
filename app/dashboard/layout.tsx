import SideNav from "../ui/SideNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-cols">
      <SideNav />
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
