"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "./animated-modal";

export function ResumeButton() {
  return (
    <div className="flex items-center justify-center">
      <Modal>
        {/* OPEN BUTTON */}
        <ModalTrigger className="relative bg-white text-black flex justify-center items-center overflow-hidden group/modal-btn px-6 py-3 rounded-lg">
          <span className="group-hover/modal-btn:translate-x-40 font-semibold transition duration-500">
            View Resume
          </span>

          <div className="absolute inset-0 flex items-center justify-center -translate-x-40 group-hover/modal-btn:translate-x-0 transition duration-500">
            <img className="w-[35px]" src="/Resume.png" alt="Resume Icon" />
          </div>
        </ModalTrigger>

        {/* MODAL */}
        <ModalBody className="mt-[100px]">
          <ModalContent className="relative flex flex-col items-center justify-center p-4 sm:p-6 bg-black/80 rounded-2xl backdrop-blur-md w-full max-w-[95vw] sm:max-w-[90vw] max-h-[90vh]">

         
            <img
              src="/myresume.png"
              alt="Resume Preview"
              className="w-full max-w-[900px] max-h-[70vh] sm:max-h-[75vh] object-contain rounded-xl shadow-lg"
            />

            {/* DOWNLOAD BUTTON */}
            <a
              href="/myresume.pdf"
              download
              className="mt-4 sm:mt-6 px-6 py-2 bg-white text-black rounded-md font-medium hover:bg-gray-200 transition"
            >
              Download Resume
            </a>

          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
}
