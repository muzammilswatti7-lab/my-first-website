"use client";

import { useEffect } from "react";

const editableSelector = "input, textarea, select, [contenteditable='true']";

function isEditable(target: EventTarget | null) {
  return target instanceof Element && Boolean(target.closest(editableSelector));
}

export default function ContentProtection() {
  useEffect(() => {
    const prevent = (event: Event) => {
      if (!isEditable(event.target)) event.preventDefault();
    };

    const preventShortcut = (event: KeyboardEvent) => {
      const blockedKey = ["a", "c", "x"].includes(event.key.toLowerCase());

      if (
        !isEditable(event.target) &&
        (event.ctrlKey || event.metaKey) &&
        blockedKey
      ) {
        event.preventDefault();
      }
    };

    const events = [
      "copy",
      "cut",
      "contextmenu",
      "dragstart",
      "selectstart",
    ];

    events.forEach((name) => document.addEventListener(name, prevent));
    document.addEventListener("keydown", preventShortcut);

    return () => {
      events.forEach((name) => document.removeEventListener(name, prevent));
      document.removeEventListener("keydown", preventShortcut);
    };
  }, []);

  return null;
}
