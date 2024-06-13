import { redirect } from "next/navigation";

export async function GET(req: Request, { params }: { params: { id: string } }){
    const id = await params.id
    const res = await fetch(`${process.env.NEXT_PUBLIC_PAGEURL}/api/url/${id}`)
    const data = await res.json()

    if (data.url) redirect(data.url)
    redirect("/")
}
