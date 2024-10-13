"use client";
import {
  faSpinner,
  faUser,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@radix-ui/themes";
import axios from "axios";
import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";

export default function ImageUpload({
  name,
  icon,
  defaultValue = "",
}: {
  name: string;
  icon: IconDefinition;
  defaultValue: string;
}) {
  const fileInRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [url, setUrl] = useState(defaultValue);

  async function upload(ev: ChangeEvent<HTMLInputElement>) {
    const input = ev.target as HTMLInputElement;
    if (input && input.files?.length && input.files.length > 0) {
      setIsUploading(true);
      const file = input.files[0];
      const data = new FormData();
      data.set("file", file);
      const response = await axios.post("/api/upload", data);
      if (response.data.url) {
        setUrl(response.data.url);
        setIsUploading(false);
        setIsImageLoading(true);
      }
    }
  }

  const imgLoading = isUploading || isImageLoading;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-24 h-24 rounded-md overflow-hidden bg-gray-100 flex items-center justify-center border border-gray-300 shadow-md">
        {imgLoading && (
          <FontAwesomeIcon
            icon={faSpinner}
            className="text-gray-400 animate-spin"
          />
        )}
        {!isUploading && url && (
          <Image
            src={url}
            alt={"uploaded image"}
            width={1024}
            height={1024}
            onLoadingComplete={() => setIsImageLoading(false)}
            className="w-full h-full object-cover"
          />
        )}
        {!imgLoading && !url && (
          <FontAwesomeIcon icon={icon} className="text-gray-400 text-2xl" />
        )}
      </div>
      <input type="hidden" value={url} name={name} />
      <input
        onChange={(ev) => upload(ev)}
        ref={fileInRef}
        type="file"
        className="hidden"
      />
      <Button
        type="button"
        onClick={() => fileInRef.current?.click()}
        className="px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600 transition duration-200"
      >
        Select File
      </Button>
    </div>
  );
}
