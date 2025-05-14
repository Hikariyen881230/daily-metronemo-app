import { Description, Field, Label, Textarea } from "@headlessui/react";
import { useEffect, useState } from "react";

type Props = {};

function PracticeRecord({}: Props) {
  const [record, setRecord] = useState("");

  const handleRecord = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setRecord(value);
    localStorage.setItem("Record", value);
  };

  useEffect(() => {
    const prevRecord = localStorage.getItem("Record");
    prevRecord && setRecord(prevRecord);
  }, []);

  return (
    <div className="w-full">
      <Field>
        <Label className="font-medium text-white text-xl block text-center md:text-left">
          Practice Record
        </Label>
        <Description className="text-sm text-hint text-center md:text-left">
          Practice record will be stored on your device. It will not be cleared
          unless your clear the localstorage.
        </Description>
        <Textarea
          className={
            "mt-3 block w-full resize-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-base text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
          }
          rows={15}
          value={record}
          onChange={handleRecord}
        />
      </Field>
    </div>
  );
}

export default PracticeRecord;
