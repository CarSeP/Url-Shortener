import { Tooltip, Button } from "@material-tailwind/react";

function Icon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>

    );
}

export function CloseButton({ onHandleMessage }: any) {
    const onclick = () => onHandleMessage("")

    return (
        <Tooltip content="Close" className="text-xs py-1 px-2">
            <Button variant="text" className="rounded-full p-2" onClick={onclick}>
                <Icon />
            </Button>
        </Tooltip>
    );
}