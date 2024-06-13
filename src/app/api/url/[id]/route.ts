import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(req: Request, { params }: { params: { id: string } }) {
    const id = await params.id
    const data = await prisma.url.findUnique({
        where: {
            id
        }
    })
    return NextResponse.json({
        id: data?.id,
        url: data?.url
    })
}