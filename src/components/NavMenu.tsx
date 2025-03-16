"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/NavigationMenu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "ALBUMS",
    href: "/",
    description:
      "",
  },
  {
    title: "CELEBRATION",
    href: "/",
    description:
      "",
  },
  {
    title: "MESSAGING",
    href: "/",
    description:
      "",
  },
  {
    title: "PROFILE",
    href: "/",
    description: "",
  },
  {
    title: "EVENTS",
    href: "/",
    description:
      "",
  },
  {
    title: "GROUPS",
    href: "/",
    description:
      "",
  },
  {
    title: "POST VIDEOS",
    href: "/",
    description:
      "",
  },
  {
    title: "BLOG",
    href: "/",
    description:
      "",
  },
]

export function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
      <NavigationMenuItem>
          <NavigationMenuTrigger className="text-foreground">Pages</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex w-auto gap-3 p-4 md:w-[500px] flex-col lg:w-[600px] text-left">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-foreground">Account</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col w-[400px] gap-3 p-4 md:w-[500px]  lg:w-[600px] text-left">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-foreground">Account</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col w-[400px] gap-3 p-4 md:w-[500px]  lg:w-[600px] text-left">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a href="#">
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-foreground`} >
              Documentation
            </NavigationMenuLink>
          </a>   
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
