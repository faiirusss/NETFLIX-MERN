import { Compass, History, Home, Star, Timer, UserRound } from "lucide-react";

export const LIST_SIDEBAR = {
  menu: [
    { title: "Home", url: "/home", icon: Home },
    { title: "Explore", url: "/explore", icon: Compass },
    { title: "Coming Soon", url: "/coming-soon", icon: Timer },
  ],
  library: [
    { title: "History", url: "/history", icon: History },
    { title: "Favorites", url: "/favorite", icon: Star },
    { title: "Your Channel", url: "/profile", icon: UserRound },
  ],
};
