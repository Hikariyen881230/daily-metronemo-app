import { Field, Input, InputProps, Label } from "@headlessui/react";

interface ITextInput extends InputProps {
  label?: string;
}

export default function NumberInput(props: ITextInput) {
  return (
    <Field>
      {props.label && <Label>{props.label}</Label>}
      <Input
        type="number"
        className="transition block w-full rounded-lg bg-white/5 py-1.5 px-3 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
        {...props}
      />
    </Field>
  );
}
