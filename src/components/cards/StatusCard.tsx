"use client";
import appIcons from "@/config/icons/app-icons";
import { useEffect, useState } from "react";

type Status = "SUCCESS" | "ERROR";

type Props = {
  text: string;
  status: Status;
  className?: string;
  closeAble?: boolean;
};

const StatusCard = ({
  status,
  text,
  className = "",
  closeAble = false,
}: Props) => {
  const [show, setShow] = useState(true);
  const Icon = appIcons[status];

  useEffect(() => {
    setShow(true);
  }, []);

  return show ? (
    <div className={`status-card ${className}`} data-status={status}>
      <span className="text-lg">
        <Icon />
      </span>
      <p>{text}</p>
      {closeAble ? (
        <button
          className="p-1.5 bg-black/30 hover:bg-black/40 text-white rounded-sm ml-auto duration-200"
          onClick={() => setShow(false)}
        >
          <appIcons.CLOSE />
        </button>
      ) : null}
    </div>
  ) : null;
};

export default StatusCard;
