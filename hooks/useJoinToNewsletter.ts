import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function useJoinToNewsletter(): {
  email: string | undefined;
  updateEmail: (email: string) => void;
  loading: boolean;
  send: () => void;
} {
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  const updateEmail = (email: string) => {
    setEmail(email);
  };

  const send = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `http://localhost:8000/api/v1/newsletter/addEmail`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );
      const { message } = await res.json();
      if (res.ok) {
        toast(message);
        setEmail("");
      } else {
        toast.error(message);
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };
  useEffect(() => {
    // console.log("useJoinToNewsletter mounted!");
  }, []);

  return { email, updateEmail, loading, send };
}
