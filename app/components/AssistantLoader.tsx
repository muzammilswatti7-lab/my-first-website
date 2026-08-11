"use client";

import type { ComponentType } from "react";
import { useEffect, useState } from "react";

export default function AssistantLoader() {
  const [Assistant, setAssistant] = useState<ComponentType | null>(null);

  useEffect(() => {
    let active = true;
    let timer = 0;

    const load = () => {
      if (!active) return;

      window.clearTimeout(timer);

      ["pointerdown", "keydown", "scroll"].forEach((event) =>
        window.removeEventListener(event, load),
      );

      import("./GrowthAssistant").then(({ default: Component }) => {
        if (active) setAssistant(() => Component);
      });
    };

    ["pointerdown", "keydown", "scroll"].forEach((event) =>
      window.addEventListener(event, load, {
        once: true,
        passive: true,
      }),
    );

    timer = window.setTimeout(load, 8000);

    return () => {
      active = false;
      window.clearTimeout(timer);

      ["pointerdown", "keydown", "scroll"].forEach((event) =>
        window.removeEventListener(event, load),
      );
    };
  }, []);

  return Assistant ? <Assistant /> : null;
}
