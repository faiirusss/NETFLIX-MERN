import { Separator } from "../ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import AppSidebar from "./AppSidebar";

const DefaultLayout = ({ children }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="fixed z-10 flex items-center justify-between w-full h-16 gap-2 px-4 border-b shrink-0 bg-background">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="h-4 mr-2" />
          </div>
        </header>
        <main className="flex flex-col items-center flex-1 gap-4 p-4 my-16 bg-background sm:p-8 lg:p-4">
          <div className="w-full max-w-screen-4xl">{children}</div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DefaultLayout;
