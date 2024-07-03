"use client";

export default function Price({ price, nomargin, props }) {
  return (
    <span
      className={`font-bold ${nomargin ? "" : "mr-7"} text-primary supershadow`}
      {...props}
    >
      ${price}
    </span>
  );
}
