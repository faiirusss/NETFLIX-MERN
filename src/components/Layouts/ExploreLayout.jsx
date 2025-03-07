import { Separator } from "../ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import AppSidebar from "./AppSidebar";

const ExploreLayout = ({ children }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex items-center justify-between h-16 gap-2 px-4 border-b shrink-0 bg-background fixed z-10 w-full">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="h-4 mr-2" />
            <h1 className="font-bold">Movies</h1>
          </div>
        </header>
        <main className="flex flex-1 flex-col items-center gap-4 bg-background p-4 sm:p-8 lg:p-4 my-16">
          <div className="w-full max-w-screen-4xl">{children}</div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default ExploreLayout;
