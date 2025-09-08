import clsx from "clsx";
import { HTMLAttributes } from "react";

interface TestimonialCardProps extends HTMLAttributes<HTMLElement> {
  username: string;
  handle: string;
  body: string;
  pfpUrl?: string;
  imageUrl?: string;
}

export default function TestimonialCard({
  username,
  handle,
  body,
  pfpUrl,
  imageUrl,
  className,
  ...props
}: TestimonialCardProps) {
  return (
    <article
      className={clsx(
        "max-w-xl break-inside-avoid rounded-xl border-[1.76px] border-white/[8%] bg-white/10 p-5",
        className,
      )}
      {...props}
    >
      <div className="space-y-4">
        {/* User information (pfp, username, handle) */}
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-white">
            {pfpUrl && <img src={pfpUrl}></img>}
          </div>
          <div>
            <p className="text-sm">{username}</p>
            <p className="text-xs text-gray-300">{handle}</p>
          </div>
        </div>

        {/* Body text and (optional) image*/}
        <div className="space-y-4">
          <p className="text-xs text-gray-300">{body}</p>
          {imageUrl !== undefined && (
            <div className="h-[13.75rem] w-full rounded-xl bg-white">
              {imageUrl && <img src={imageUrl}></img>}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
