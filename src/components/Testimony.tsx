import Image from "next/image";
import React from "react";

import "@/app/globals.css";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

type CardData = {
    avatar: string;
    description: string;
    info: string;
    name: string;
};

const reviews: CardData[] = [
    {
        avatar: "/meruko.png",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.",
        info: "@jennienguyn",
        name: "Nguyễn Thị Linh Chi",
    },
    {
        avatar: "/meruko.png",
        description: "1 con mèo khác, nhưng thua vợ cả.",
        info: "@yuki_chino",
        name: "1 cái tên thật là dàiiiiiiiiiiiii",
    },
    {
        avatar: "/meruko.png",
        description: "Người Việt N1 tiếng Nhật chửi tụi CS bằng tiếng Nga.",
        info: "@hitorimi_achi",
        name: "Hitorimi Achi",
    },
    {
        avatar: "/meruko.png",
        description: "Chị gái hàng xóm hát hay, ghét tôm.",
        info: "@renjiwatarimono",
        name: "Tee",
    },
];

export default function Testimony() {
    return (
        <div className={"max-w-4xl mx-auto px-6"}>
            <div className={"text-center mb-10"}>
                <div className={"text-3xl font-bold text-[#F25C5C] mb-2"}>Mọi người nghĩ gì về mình?</div>
                <p className={"text-accent-foreground text-xl"}>Overwhelming Negative Reviews:</p>
            </div>

            <section className={"grid grid-cols-1 sm:grid-cols-2 gap-8"}>
                {reviews.map(c => (
                    <Card
                        className={"border border-accent-foreground shadow-[0_0_20px_4px_rgba(255,0,0,0.2)] "}
                        key={c.info}
                    >
                        <CardHeader className={"flex flex-col items-left text-left py-2"}>
                            <div className={"flex gap-2"}>
                                <Image
                                    alt={c.name}
                                    className={"rounded-full object-cover overflow-hidden border-1 border-black shadow-sm"}
                                    height={50}
                                    src={c.avatar}
                                    width={50}
                                />
                                <div>
                                    <CardTitle className={"font-bold text-lg text-primary"}>
                                        {c.name}
                                    </CardTitle>
                                    <p className={"text-sm text-accent-foreground"}>{c.info}</p>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className={"text-base text-accent-foreground leading-relaxed text-left"}>
                                <span className={"font-bold text-[#F25C5C]"}>"</span>
                                <span>{c.description}</span>
                                <span className={"font-bold text-[#F25C5C]"}>"</span>
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </section>
        </div>
    );
}
