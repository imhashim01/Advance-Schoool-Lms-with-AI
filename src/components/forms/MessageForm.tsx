"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";

const schema = z.object({
  recipient: z.string().min(1, { message: "Recipient is required!" }),
  subject: z.string().min(1, { message: "Subject is required!" }),
  message: z.string().min(1, { message: "Message is required!" }),
});

type Inputs = z.infer<typeof schema>;

const MessageForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">
        {type === "create" ? "Send New Message" : "Update Message"}
      </h1>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Recipient"
          name="recipient"
          defaultValue={data?.recipient}
          register={register}
          error={errors?.recipient}
        />
        <InputField
          label="Subject"
          name="subject"
          defaultValue={data?.subject}
          register={register}
          error={errors?.subject}
        />
        <div className="flex flex-col gap-2 w-full">
          <label className="text-xs text-gray-500">Message</label>
          <textarea
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full min-h-[100px]"
            {...register("message")}
            defaultValue={data?.message}
            placeholder="Enter your message..."
          />
          {errors.message?.message && (
            <p className="text-xs text-red-400">{errors.message.message}</p>
          )}
        </div>
      </div>
      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "create" ? "Send Message" : "Update"}
      </button>
    </form>
  );
};

export default MessageForm;