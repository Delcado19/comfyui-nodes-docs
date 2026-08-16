# Documentation
- Class name: PixaromaFindReplace
- Category: 👑 Pixaroma/💬 Prompt & Text
- Output node: True
- Repo Ref: https://gitlab.com/pixaroma/ComfyUI-Pixaroma

Find and Replace Pixaroma - sit this node in the wire between a text source (an LLM node, Show Text, Text Pixaroma, any STRING output) and whatever uses the text. It intercepts the text, applies your find/replace rules, and passes the edited result on. It also previews the before/after right on the node.

Add one rule per edit: type what to find and what to replace it with. Leave the replace side empty to delete the found text. Toggle a rule off to skip it without deleting it; drag the handle to reorder. Rules apply top to bottom.

Global toggles: Case (match upper/lowercase exactly), Whole word (only match whole words, so 'art' does not hit 'artist'), Regex (treat find as a regular expression), and Tidy (after the edits, collapse double spaces and fix stray or double commas).

# Input types
## Required
- text
    - The text to edit. Wire a STRING output (an LLM node, Show Text Pixaroma, Text Pixaroma, etc.) into this input. The node edits it on the way through.
    - Comfy dtype: STRING
    - Python dtype: str
## Hidden
- FindReplaceState
    - The FindReplaceState input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- text
    - The text after all your find/replace rules (and Tidy) are applied.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://gitlab.com/pixaroma/ComfyUI-Pixaroma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
