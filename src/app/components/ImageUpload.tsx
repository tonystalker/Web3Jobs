"use client";
import { faUser, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@radix-ui/themes";
import { useRef } from "react";
import axios from "axios";

const ImageUpload = ({ icon }: { icon: IconDefinition }) => {
  const fileInRef = useRef<HTMLInputElement>(null);
  async function upload(ev: Event) {
    const input = ev.target as HTMLInputElement;
    if (input && input.files) {
      const files = input.files[0];
      const data = new FormData();
      data.set("file", files);
      const response = await axios.post("/api/upload", data);
    }
  }
  return (
    <div>
      <div className="bg-gray-200 size-24 inline-flex items-center justify-center">
        <FontAwesomeIcon icon={icon} className="text-gray-400" />
      </div>
      <div className="mt-2">
        <input ref={fileInRef} type="file" className="hidden" />
        <Button
          type="button"
          onClick={() => fileInRef.current?.click()}
          variant="soft"
          onChange={upload}
        >
          Select File
        </Button>
      </div>
    </div>
  );
};

export default ImageUpload;
