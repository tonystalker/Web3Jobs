"use client";
import { faUser, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@radix-ui/themes";
import { useRef } from "react";
const ImageUpload = ({ icon }: { icon: IconDefinition }) => {
  const fileInRef = useRef<HTMLInputElement>(null);
  function upload(ev: Event) {
    const input = ev.target;
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
