import { SidebarInset, SidebarProvider } from "../ui/sidebar";
import AppSidebar from "./AppSidebar";

const DefaultLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar>
        <SidebarInset></SidebarInset>
      </AppSidebar>
    </SidebarProvider>
  );
};

export default DefaultLayout;
