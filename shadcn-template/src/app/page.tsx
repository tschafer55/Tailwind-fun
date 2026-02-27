"use client";

import {
  ArrowUpRight,
  TrendingUp,
  Users,
  FileText,
  Activity,
} from "lucide-react";

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { TopNav } from "@/components/top-nav";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

/* ============================================================
   DESIGNER NOTE — STAT CARDS DATA
   Edit the array below to change the summary cards at the top
   of the dashboard. Each object controls one card.
     • title    → label above the number
     • value    → the large metric
     • change   → percentage badge text
     • trend    → "up" | "down" (colours the badge)
     • icon     → Lucide icon component
   ============================================================ */
const stats = [
  {
    title: "Total Users",
    value: "2,847",
    change: "+12.5%",
    trend: "up" as const,
    icon: Users,
  },
  {
    title: "Active Sessions",
    value: "1,234",
    change: "+8.2%",
    trend: "up" as const,
    icon: Activity,
  },
  {
    title: "Documents",
    value: "456",
    change: "-2.1%",
    trend: "down" as const,
    icon: FileText,
  },
  {
    title: "Growth Rate",
    value: "23.6%",
    change: "+4.3%",
    trend: "up" as const,
    icon: TrendingUp,
  },
];

/* ============================================================
   DESIGNER NOTE — RECENT ACTIVITY DATA
   This array populates the "Recent Activity" card.
   Swap out placeholder data for real content or wire up an API.
   ============================================================ */
const recentActivity = [
  {
    name: "Alice Johnson",
    initials: "AJ",
    action: "Created a new project",
    time: "2 min ago",
  },
  {
    name: "Bob Smith",
    initials: "BS",
    action: "Updated the design system",
    time: "15 min ago",
  },
  {
    name: "Carol White",
    initials: "CW",
    action: "Published a component",
    time: "1 hr ago",
  },
  {
    name: "Dan Brown",
    initials: "DB",
    action: "Left a comment on Button",
    time: "3 hr ago",
  },
  {
    name: "Eve Davis",
    initials: "ED",
    action: "Merged pull request #42",
    time: "5 hr ago",
  },
];

export default function Home() {
  return (
    /* ============================================================
       DESIGNER NOTE — LAYOUT SHELL
       SidebarProvider wraps everything and manages open/collapsed state.
       The `defaultOpen` prop controls whether the sidebar starts expanded.
       ============================================================ */
    <SidebarProvider defaultOpen={true}>
      {/* ============================================================
          DESIGNER NOTE — SIDEBAR
          The AppSidebar component renders the left-hand navigation.
          Edit it in src/components/app-sidebar.tsx.
          ============================================================ */}
      <AppSidebar />

      {/* ============================================================
          DESIGNER NOTE — MAIN CONTENT AREA
          SidebarInset automatically adjusts its margin when the
          sidebar collapses. Everything inside is the "page" content.
          ============================================================ */}
      <SidebarInset>
        {/* ============================================================
            DESIGNER NOTE — TOP NAVIGATION BAR
            The TopNav component renders breadcrumbs, search, and action
            buttons. Edit it in src/components/top-nav.tsx.
            ============================================================ */}
        <TopNav />

        {/* ============================================================
            DESIGNER NOTE — PAGE CONTENT
            This <main> wraps all scrollable page content.
            Key Tailwind classes:
              • flex-1         → fills remaining height
              • overflow-auto  → enables scroll when content overflows
              • p-6            → page padding (adjust to taste)
              • gap-6          → spacing between sections
            ============================================================ */}
        <main className="flex flex-1 flex-col gap-6 overflow-auto p-6">
          {/* ============================================================
              DESIGNER NOTE — PAGE HEADER
              The title + description at the top of the main content area.
              Adjust text size with text-2xl / text-3xl / text-4xl.
              ============================================================ */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-muted-foreground">
                Welcome back! Here&apos;s an overview of your workspace.
              </p>
            </div>
            {/* DESIGNER NOTE — Primary CTA button, change variant / size */}
            <Button>
              <ArrowUpRight className="mr-2 h-4 w-4" />
              View Reports
            </Button>
          </div>

          <Separator />

          {/* ============================================================
              DESIGNER NOTE — STAT CARDS ROW
              A responsive grid of summary cards. Classes to adjust:
                • grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 → breakpoints
                • gap-4  → space between cards
              Each Card inherits colours from CSS variables in globals.css.
              ============================================================ */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <Card key={stat.title}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  {/* DESIGNER NOTE — Icon colour inherits from text-muted-foreground */}
                  <stat.icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  {/* DESIGNER NOTE — Badge variant changes based on trend direction */}
                  <Badge
                    variant={stat.trend === "up" ? "default" : "destructive"}
                    className="mt-1 text-xs"
                  >
                    {stat.change}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* ============================================================
              DESIGNER NOTE — TWO-COLUMN CONTENT AREA
              Below the stats we have a 2-column grid (wide + narrow).
              Adjust the ratio with lg:col-span-* values.
              On mobile these stack vertically.
              ============================================================ */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* ============================================================
                DESIGNER NOTE — RECENT ACTIVITY CARD
                Takes up 2/3 width on desktop. Displays a list of events.
                Adjust the Avatar, text, and timestamps as needed.
                ============================================================ */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>
                  Latest updates from your team
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivity.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    {/* DESIGNER NOTE — Avatar: swap bg colour, initials, or image */}
                    <Avatar className="h-9 w-9">
                      <AvatarImage src="" alt={item.name} />
                      <AvatarFallback className="bg-muted text-xs">
                        {item.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {item.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {item.action}
                      </p>
                    </div>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      {item.time}
                    </span>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View all activity
                </Button>
              </CardFooter>
            </Card>

            {/* ============================================================
                DESIGNER NOTE — QUICK ACTIONS CARD
                A narrow sidebar-style card for shortcuts / links.
                Great for CTAs, links, or embedded widgets.
                ============================================================ */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common tasks at a glance</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                {/* DESIGNER NOTE — Button variants: "default" | "secondary" | "outline" | "ghost" | "destructive" */}
                <Button variant="outline" className="justify-start">
                  <FileText className="mr-2 h-4 w-4" />
                  Create Document
                </Button>
                <Button variant="outline" className="justify-start">
                  <Users className="mr-2 h-4 w-4" />
                  Invite Team Member
                </Button>
                <Button variant="outline" className="justify-start">
                  <Activity className="mr-2 h-4 w-4" />
                  Generate Report
                </Button>
                <Separator />
                {/* DESIGNER NOTE — Colour reference cards for the design system */}
                <div className="space-y-2">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Colour Palette
                  </p>
                  <div className="grid grid-cols-4 gap-2">
                    {/* DESIGNER NOTE — These swatches map to your CSS variables in globals.css */}
                    <div className="flex flex-col items-center gap-1">
                      <div className="h-8 w-8 rounded-md bg-primary" />
                      <span className="text-[10px] text-muted-foreground">Primary</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="h-8 w-8 rounded-md bg-secondary" />
                      <span className="text-[10px] text-muted-foreground">Secondary</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="h-8 w-8 rounded-md bg-accent" />
                      <span className="text-[10px] text-muted-foreground">Accent</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="h-8 w-8 rounded-md bg-destructive" />
                      <span className="text-[10px] text-muted-foreground">Destructive</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* ============================================================
              DESIGNER NOTE — COMPONENT SHOWCASE SECTION
              This section demonstrates several ShadCN components together.
              Use it as a quick reference while designing.
              ============================================================ */}
          <Card>
            <CardHeader>
              <CardTitle>Component Showcase</CardTitle>
              <CardDescription>
                A quick reference of ShadCN component variants available in this
                template. Designers — use this section to test style changes.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* DESIGNER NOTE — BUTTON VARIANTS */}
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Button Variants</h3>
                <div className="flex flex-wrap gap-3">
                  <Button variant="default">Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="destructive">Destructive</Button>
                </div>
              </div>

              <Separator />

              {/* DESIGNER NOTE — BADGE VARIANTS */}
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Badge Variants</h3>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="default">Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                </div>
              </div>

              <Separator />

              {/* DESIGNER NOTE — BUTTON SIZES */}
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Button Sizes</h3>
                <div className="flex flex-wrap items-center gap-3">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon">
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
