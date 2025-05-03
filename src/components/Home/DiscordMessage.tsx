import { cn } from "@/lib/utils";
import { Clock } from "lucide-react";
import Image from "next/image";

interface DiscordMessageProps {
  avatarSrc: string;
  avatarAlt: string;
  userName: string;
  timestamp: string;
  badgeText?: string;
  badgeColor?: string;
  title: string;
  content: {
    [key: string]: string;
  };
}
const DiscordMessage = ({
  avatarAlt,
  avatarSrc,
  content,
  timestamp,
  title,
  userName,
  badgeColor = "#43b581",
  badgeText,
}: DiscordMessageProps) => {
  return (
    <div className="w-full flex items-start justify-start">
      <div className="flex items-center mb-2">
        <Image
          src={avatarSrc}
          alt={avatarAlt}
          width={40}
          height={40}
          className="object-cover rounded-full mr-3"
        />
      </div>
      <div className="w-full max-w-xl">
        <div className="flex items-center">
          <p className="font-semibold text-white">{userName}</p>
          <span className="ml-2 px-1.5 py-0.5 text-xs font-semibold bg-brand-600 text-white rounded">
            APP
          </span>
          <span className="text-gray-400 ml-1.5 text-xs font-normal">
            {timestamp}
          </span>
        </div>
        <div className="bg-[#2f3136] text-sm w-full rounded p-3 mb-4 mt-1.5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-px">
            {badgeText ? (
              <span
                className={cn(
                  "inline-flex order-2 items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset w-fit",
                  badgeColor
                )}
              >
                {badgeText}
              </span>
            ) : null}
            <p className="text-white order-1 text-base font-semibold">
              {title}
            </p>
          </div>
          {Object.entries(content).map(([key, value]) => (
            <p key={key} className="text-[#dcddde text-sm">
              <span className="text-[#b9bbbe] ">{key}:</span> {value}
            </p>
          ))}

          <p className="text-[#72767d] text-xs mt-2 flex items-center">
            <Clock className="size-3 mr-1" />
            {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiscordMessage;
