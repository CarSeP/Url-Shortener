import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

const idGenerator = () => {
    const characters = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890"
    let id = ""

    for (let i = 0; i < 7; i++) {
        id += characters[Math.floor(Math.random() * characters.length)]
    }
    return id
}

export async function POST(req: Request) {
    const { url } = await req.json()
    const data = await prisma.url.create({
        data: {
            id: idGenerator(),
            url,
        }
    })
    return NextResponse.json({
        id: data.id,
        url: data.url,
        urlShort: `${process.env.NEXT_PUBLIC_PAGEURL}/${data.id}`
    })
}