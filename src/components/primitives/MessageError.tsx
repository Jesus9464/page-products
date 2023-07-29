import React from "react";

import { XCircleIcon } from "@heroicons/react/24/outline";

type Props = {
  message: string;
};

const MessageError: React.FC<Props> = ({ message }) => {
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col">
      <XCircleIcon className="h-8 w-8 text-gray-500 mb-2" />
      <p className="text-gray-500">{message}</p>
    </div>
  );
};

export default MessageError;
