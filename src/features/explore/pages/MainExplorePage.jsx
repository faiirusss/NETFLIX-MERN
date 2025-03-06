import AppSidebar from "@/components/Layouts/AppSidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const MainExplorePage = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex items-center justify-between h-16 gap-2 px-4 border-b shrink-0 bg-sidebar">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="h-4 mr-2" />
            <h1 className="font-bold">Dashboard</h1>
          </div>
        </header>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default MainExplorePage;
