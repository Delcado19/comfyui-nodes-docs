# Documentation
- Class name: PixaromaNote
- Display name: Note Pixaroma
- Category: 👑 Pixaroma
- Output node: False
- Repo Ref: https://github.com/pixaroma/ComfyUI-Pixaroma

Note Pixaroma - a rich-text annotation editor that lives on the canvas. Open the fullscreen editor to write multi-paragraph notes with bold / italic / underline / strikethrough, headings (H1 / H2 / H3), bulleted and numbered lists, code blocks (with copy button), inline icons (CLIP, LORA, GGUF, model versions, plus 30+ more), tables, separators, custom-colored buttons (Download / View Page / Read More / plain), folder hints, plus pre-styled YouTube and Discord pills.

Each block carries its own color, picked from a centered modal that opens over the canvas. A Code view lets you hand-edit the underlying HTML; a drop-in LLM prompt at assets/note-pixaroma-llm-prompt.txt lets ChatGPT or Gemini generate Code-view-ready HTML for you.

Pure annotation - no image processing, no inputs to wire, no outputs to chain. Saves and restores exactly how you styled it.

# Input types
## Required
- note_json
    - Internal serialized HTML + style state for the note. Do not edit directly - click the pencil button on the note to open the editor.
    - Comfy dtype: STRING
    - Default: `"{\"version\":1,\"content\":\"\",\"buttonColor\":\"#f66744\",\"lineColor\":\"#f66744\",\"width\":420,\"height\":320}"`

# Source code
[View source repository on GitHub](https://github.com/pixaroma/ComfyUI-Pixaroma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
