"use client";
import * as React from "react";
import QrCodeReact from 'react-qr-code'

export default function Home() {
  const [qrCodeContent, setQrCodeContent] = React.useState("");
  const [qrCodeImageData, setQrCodeImageData] = React.useState("");

  function handleQrCodeContentOnChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setQrCodeContent(event.currentTarget.value);
  }

  return (
    <main className="container my-4 mx-auto flex flex-col md:flex-row gap-2">
      <form className="w-full md:w-2/3 p-4">
        <label className="block w-full font-sans font-bold text-xl">
          QR Code Content

          <textarea
            className="block w-full font-sans font-regular text-base text-black p-2 my-2"
            name="qr-code-content"
            rows={10}
            placeholder="Type content here and it is stuffed into the QR Code."
            onChange={handleQrCodeContentOnChange}
          />
        </label>
      </form>

      <div className="mt-8">
        <QrCodeReact
          value={qrCodeContent}
        />

        <a
          aria-disabled={!!qrCodeImageData}
          className="inline-block my-2 hover:text-blue-300"
          href={`data:image/png;base64${qrCodeImageData}`}
          download={"QR-Code"}
          type=""
          target="_blank"
          rel="noreferrer"
        >
          Download QR Code Image
        </a>
      </div>
    </main>
  )
}
