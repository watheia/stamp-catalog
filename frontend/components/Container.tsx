import React, { HtmlHTMLAttributes } from "react";
import clsx from "clsx";

export default function Container({
  children,
  className,
  ...props
}: HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx("max-w-7xl mx-auto sm:px-6 lg:px-8", className)}
      {...props}
    >
      {children}
    </div>
  );
}
