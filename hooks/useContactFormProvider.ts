import { useEffect, useState } from "react";
import { useForm, SubmitHandler, UseFormSetValue ,UseFormRegister,FieldErrorsImpl } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";

type Inputs = {
  name: string;
  email: string;
  content: string;
};

const schema = yup
  .object({
    name: yup.string().min(2).required(),
    email: yup.string().email().required(),
    content: yup.string().min(5).required(),
  })
  .required();

export default function useContactFormProvider(): {
  register: UseFormRegister<Inputs>;
  submit: () => void;
  submitSpinner: boolean;
  errors : FieldErrorsImpl<Inputs>;
} {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const [submitSpinner, setSubmitSpinner] = useState(false);
  useEffect(() => {
    console.log("blogs:");
  }, []);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setSubmitSpinner(true);
    const res = await fetch(
      `http://localhost:8000/api/v1/contact-us/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    if (res.ok) {
      const data = await res.json();
      setValue("name", "");
      setValue("email", "");
      setValue("content", "");
      toast(data?.message);
    }else{
      toast.error("ارسال پیام با شکست مواجه شد!");
    }
    setSubmitSpinner(false);
  };

  const submit = handleSubmit(onSubmit)
  return { register, submit, submitSpinner,errors };
}
