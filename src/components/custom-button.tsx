import { Button, ButtonProps } from "@headlessui/react";

export default function CustomButton(props: ButtonProps) {
  return (
    <Button
      {...props}
      className={`inline-flex text-button items-center gap-2 rounded-md bg-button py-1.5 px-3 text-sm/6 font-semibold shadow-inner shadow-white/10 focus:outline-none transition ${props.className}`}
    >
      {props.children}
    </Button>
  );
}
