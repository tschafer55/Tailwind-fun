"use client";

import {
  Home,
  LayoutDashboard,
  Settings,
  Users,
  FileText,
  BarChart3,
  HelpCircle,
  LogOut,
  ChevronDown,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

/* ============================================================
   DESIGNER NOTE — NAVIGATION ITEMS
   Edit the arrays below to change the sidebar menu links.
   Each item has: title (display text), icon (Lucide icon), url (route),
   and an optional isActive flag for the current page highlight.
   ============================================================ */
const mainNavItems = [
  { title: "Home", icon: Home, url: "#", isActive: true },
  { title: "Dashboard", icon: LayoutDashboard, url: "#" },
  { title: "Users", icon: Users, url: "#" },
  { title: "Documents", icon: FileText, url: "#" },
  { title: "Analytics", icon: BarChart3, url: "#" },
];

const secondaryNavItems = [
  { title: "Settings", icon: Settings, url: "#" },
  { title: "Help & Support", icon: HelpCircle, url: "#" },
];

export function AppSidebar() {
  return (
    <Sidebar>
      {/* ============================================================
          DESIGNER NOTE — SIDEBAR HEADER / BRAND
          Customise the logo, brand name, and subtitle below.
          Adjust spacing with Tailwind gap / padding utilities.
          ============================================================ */}
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-3">
          {/* DESIGNER NOTE — Replace this div with an <img> or SVG logo */}
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm font-bold">
            T
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Template App</span>
            <span className="text-xs text-muted-foreground">Design System</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarSeparator />

      <SidebarContent>
        {/* ============================================================
            DESIGNER NOTE — PRIMARY NAVIGATION GROUP
            The SidebarGroupLabel text and menu items render here.
            Change colours via the Tailwind classes on SidebarMenuButton.
            The isActive prop controls the highlighted state.
            ============================================================ */}
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={item.isActive} tooltip={item.title}>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        {/* ============================================================
            DESIGNER NOTE — SECONDARY NAVIGATION GROUP
            A second group for settings / support links.
            ============================================================ */}
        <SidebarGroup>
          <SidebarGroupLabel>Support</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {secondaryNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* ============================================================
          DESIGNER NOTE — SIDEBAR FOOTER / USER MENU
          This renders the avatar + dropdown at the bottom of the sidebar.
          Swap the AvatarImage src for a real user photo.
          Adjust the DropdownMenu items for your auth flow.
          ============================================================ */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="" alt="User" />
                    <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                      DS
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col text-left text-sm leading-tight">
                    <span className="truncate font-medium">Design Studio</span>
                    <span className="truncate text-xs text-muted-foreground">
                      designer@studio.com
                    </span>
                  </div>
                  <ChevronDown className="ml-auto size-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56"
                align="start"
              >
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Account settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 size-4" />
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
