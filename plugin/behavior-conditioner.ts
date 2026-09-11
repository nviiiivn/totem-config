import type { Plugin } from "@totem-ai/plugin"

// Behavior Conditioner — strips sycophantic openers from assistant text
// before the response commits to the transcript.
//
// Previously replaced the ENTIRE message with "REPLACE_ME" when a trigger
// phrase was detected anywhere in the text. That destroyed complete
// responses. Now strips just the matched phrase and trailing
// punctuation/whitespace, preserving the rest of the message.

const TRIGGER =
  /\b(you'?re\s+(?:absolutely\s+|exactly\s+|totally\s+|completely\s+)?right|you\s+are\s+(?:absolutely\s+|exactly\s+|totally\s+|completely\s+)?right)\b[.,]?\s*/gi

export default (async () => {
  return {
    "experimental.text.complete": async (_input, output) => {
      output.text = output.text.replace(TRIGGER, "")
    },
  }
}) satisfies Plugin
