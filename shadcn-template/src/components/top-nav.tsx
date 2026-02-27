"use client";

import { Bell, Search, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function TopNav() {
  /* ============================================================
     DESIGNER NOTE — DARK MODE TOGGLE
     This simple state toggles the "dark" class on <html>.
     In production you might wire this into next-themes or a
     context provider — the UI itself stays the same.
     ============================================================ */
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    /* ============================================================
       DESIGNER NOTE — TOP NAVIGATION BAR
       The outer <header> controls height, background, border, and padding.
       Key Tailwind classes to customise:
         • h-14        → height of the bar
         • border-b    → bottom border
         • bg-background → background colour (uses CSS variable)
         • px-4        → horizontal padding
       ============================================================ */
    <header className="flex h-14 shrink-0 items-center gap-2 border-b bg-background px-4">
      {/* Sidebar toggle (hamburger on mobile) */}
      <SidebarTrigger className="-ml-1" />

      <Separator orientation="vertical" className="mr-2 !h-4" />

      {/* ============================================================
          DESIGNER NOTE — BREADCRUMBS
          Update the BreadcrumbItem / BreadcrumbLink components to
          reflect your actual page hierarchy. These are static for now.
          ============================================================ */}
      <Breadcrumb className="hidden md:flex">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Dashboard</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* ============================================================
          DESIGNER NOTE — SEARCH BAR
          Adjust width via max-w-*, the placeholder text,
          and the Search icon colour/size below.
          ============================================================ */}
      <div className="ml-auto flex items-center gap-2">
        <div className="relative hidden md:block">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search…"
            className="w-64 pl-8"
          />
        </div>

        {/* ============================================================
            DESIGNER NOTE — ACTION BUTTONS (right side)
            These icon buttons sit at the far-right of the top bar.
            Swap icons, add tooltips, or remove as needed.
            The Badge on the bell shows a notification count.
            ============================================================ */}
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-4 w-4" />
          {/* DESIGNER NOTE — Notification badge: change count or hide */}
          <Badge
            variant="destructive"
            className="absolute -top-1 -right-1 h-4 w-4 rounded-full p-0 text-[10px] flex items-center justify-center"
          >
            3
          </Badge>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsDark(!isDark)}
          aria-label="Toggle theme"
        >
          {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>

        <Separator orientation="vertical" className="!h-6" />

        {/* ============================================================
            DESIGNER NOTE — USER AVATAR (top-right)
            This mirrors the sidebar user dropdown. Swap the image,
            initials, and dropdown items to match your auth flow.
            ============================================================ */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src="" alt="User" />
                <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                  DS
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Sign out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
