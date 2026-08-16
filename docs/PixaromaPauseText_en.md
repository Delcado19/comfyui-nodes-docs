# Documentation
- Class name: PixaromaPauseText
- Category: 👑 Pixaroma/💬 Prompt & Text
- Output node: True
- Repo Ref: https://gitlab.com/pixaroma/ComfyUI-Pixaroma

Pause Text Pixaroma - an inline gate that stops your workflow at this point so you can read and fix a piece of text before the rest of the workflow runs. Made for text that comes from a language model, where you have no control over the exact words. Wire your text source into the input and your next node onto the output.

With the toggle on Pause, pressing Run stops here and shows the model's text; the rest of the workflow does not run. Edit the text, then press Continue and only the downstream runs, fed the exact words you approved - the model is skipped, so it is fast. Press Regenerate to get fresh text: the node walks back up the wire, finds whatever is generating the text, and rolls its seed to a new random value so you get a different result. Flip the toggle to Pass to run the whole workflow end to end in one go. Flip it to Keep to reuse your current text on every Run - the model is skipped and each Run makes a new image of the same prompt, so you can batch out variations quickly without losing your edit.

# Input types
## Optional
- text
    - The text to gate. Wire your text source (an LLM / prompt node) here.
    - Comfy dtype: STRING
    - Python dtype: str
## Hidden
- PauseState
    - The PauseState input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- text
    - The text continuing downstream: the model's text in Pause/Pass, or your edited text in Continue.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://gitlab.com/pixaroma/ComfyUI-Pixaroma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
