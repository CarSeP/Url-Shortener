"use client"
import { Input, Button } from "@material-tailwind/react";
import { useState } from "react";
import AlertIcon from "@/components/AlertIcon"

export default function Home() {

  const PageUrl = process.env.NEXT_PUBLIC_PAGEURL
  const [url, setUrl] = useState("")
  const [message, setMessage] = useState("")
  const onHandleMessage = (message:string) => setMessage(message)
  const onChange = (e: any) => setUrl(e.target.value)
  const onSubmit = (e: any) => {
    e.preventDefault()

    fetch(`${PageUrl}/api/url`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "url": url
      }),
    })
      .then(response => response.json())
      .then(data => onHandleMessage(`${PageUrl}/${data.id}`))
  }

  return (
    <div>
      <h1 className="text-3xl text-center font-bold mt-12 mb-2">URL Shortener</h1>
      <p className="text-sm text-center text-gray-600 mb-2">example: https://www.google.com</p>
      <div className="flex justify-center">
        <form className="relative w-full max-w-[30rem]" onSubmit={onSubmit}>
          <Input
            id="UrlInput"
            type="url"
            label="URL"
            className="pr-20"
            onChange={onChange}
            containerProps={{
              className: "min-w-0 border-white",
            }}
          />
          <Button
            type="submit"
            size="sm"
            color={url ? "gray" : "blue-gray"}
            disabled={!url}
            className="!absolute right-1 top-1 rounded"
          >
            Submit
          </Button>
        </form>
      </div>

      {message &&
          <div className="w-[30rem] mx-auto mt-4">
            <AlertIcon onHandleMessage={onHandleMessage}>{message}</AlertIcon>
          </div>
      }

    </div>
  );
}
