"use client"
import React from "react";

import {Music,Code, MessageSquare,VideoIcon,ImageIcon ,ArrowRight} from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "text-violet-500/10",
    href: "/conversation",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-pink-500",
    bgColor: "text-violet-500/10",
    href: "/image",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    color: "text-orange-700",
    bgColor: "text-violet-500/10",
    href: "/video",
  },
  {
    label: "Music Generation",
    icon: Music,
    color: "text-emerald-500",
    bgColor: "text-violet-500/10",
    href: "/music",
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-green-700",
    bgColor: "text-violet-500/10",
    href: "/code",
  },
];

const Dashboard = () => {
  const router = useRouter()
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore The Power of Arya
        </h2>
        <p className="text-center">Chat with the Smartest AI </p>
        <div className="px-4 md:px-20 lg:px-32 space-y-4">
          {tools.map((el) => (
            <Card
            onClick={()=>router.push(el.href)}
              key={el.href}
              className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
            >
              <div className="flex items-center gap-x-4">
                <div className={cn("p-2 w-fit rounded-md", el.bgColor)}>
                  <el.icon className={cn("w-8 h-8", el.color)} />
                </div>
                <div className="font-semibold">
                    {el.label}
                </div>
              </div>
              <ArrowRight className="w-5 h-5" />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
