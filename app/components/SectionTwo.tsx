import Image from "next/image";
import square from "../../public/square.svg";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import sketch from "../../public/tech-icons/sketch.svg";

import ai from "../../public/tech-icons/ai.svg";

import chatgpt from "../../public/tech-icons/chatgpt.svg";
import cloud from "../../public/tech-icons/creativecloud.svg";
import framer from "../../public/tech-icons/framer.svg";
import github from "../../public/tech-icons/github.svg";
import slack from "../../public/tech-icons/slack.svg";
import discord from "../../public/tech-icons/discord.svg";
import youtube from "../../public/tech-icons/youtube.svg";
import chrome from "../../public/tech-icons/chrome.svg";

import notion from "../../public/tech-icons/notion.svg";
import react from "../../public/tech-icons/react-1.svg";
import nextjs from "../../public/tech-icons/next-js.svg";
import typescript from "../../public/tech-icons/typescript-2.svg";
import tailwind from "../../public/tech-icons/tailwindcss.svg";
import micro from "../../public/tech-icons/micro.svg";
import twitter from "../../public/twitter.svg";
import insta from "../../public/insta.svg";
import linkedin from "../../public/linkedin.svg";
import { Button } from "@/components/ui/button";

const icons = [
    sketch,
    ai,
    chatgpt,
    cloud,
    framer,
    github,
    slack,
    discord,
    youtube,
    chrome,
    notion,
    micro,
    react,
    nextjs,
    typescript,
    tailwind,
];

const socialMedia = [
    {
        id: 1,
        icon: insta,
        name: "Instagram",
        username: "@iwhohasnothing",
        link: "https://www.instagram.com/iwhohasnothing?igsh=MmVlMjlkMTBhMg%3D%3D&utm_source=qr",
    },
    {
        id: 2,
        icon: twitter,
        name: "X / Twitter",
        username: "@code__lover",
        link: "https://x.com/code__lover?s=21&t=p00IA-lLm6nCH7ZAiZulVQ",
    },
    {
        id: 3,
        icon: linkedin,
        name: "Linkedin",
        username: "@omuetinelson",
        link: "https://www.linkedin.com/in/omueti-nelson-b330b7276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
];



export function SectionTwo() {
    return (
        <div className="grid gird-cols-1 lg:grid-cols-3 gap-4 mt-10">
            <div className="w-full relative col-span-1">
                <Image
                    src={square}
                    alt="square"
                    className="w-full h-full object-cover rounded-2xl"
                />
            </div>
            <div className="flex flex-col w-full col-span-1 lg:col-span-2 gap-4">
                <Card className="bg-gray-100 border-none">
                    <CardHeader>
                        <CardTitle>Explore my stack</CardTitle>
                        <CardDescription>Check out the tools I use frequently</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-4">
                        {icons.map((item, index) => (
                            <Image key={index} src={item} alt="Icon" className="w-16 h-16" />
                        ))}
                    </CardContent>
                </Card>

                <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-4">
                    {socialMedia.map((item) => (
                        <Card
                            key={item.id}
                            className="p-4 flex flex-col items-center sm:items-start bg-gray-100 border-none"
                        >
                            <Image src={item.icon} alt="Icon" className="w-16 h-16" />
                            <h1 className="text-2xl font-medium pt-3">{item.name}</h1>
                            <p className="text-muted-foreground">{item.username}</p>
                            <Button className="mt-4" size="sm" asChild>
                                <a href={item.link} target="_blank">Follow</a>
                            </Button>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}