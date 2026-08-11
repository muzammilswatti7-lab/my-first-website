import type { Dispatch, FormEvent, SetStateAction } from "react";

export type FormState = "idle" | "sending" | "success" | "error";

const endpoint = "https://formsubmit.co/ajax/muzammilswatti7@gmail.com";

export async function submitForm(
  event: FormEvent<HTMLFormElement>,
  setState: Dispatch<SetStateAction<FormState>>,
) {
  event.preventDefault();
  const form = event.currentTarget;
  setState("sending");

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new FormData(form),
    });
    if (!response.ok) throw new Error("Submission failed");
    form.reset();
    setState("success");
  } catch {
    setState("error");
  }
}
