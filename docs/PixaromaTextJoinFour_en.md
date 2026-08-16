# Documentation
- Class name: PixaromaTextJoinFour
- Category: 👑 Pixaroma/💬 Prompt & Text
- Output node: False
- Repo Ref: https://gitlab.com/pixaroma/ComfyUI-Pixaroma

Joins four pieces of text into one. Type in each field, or wire another node's text into its dot (the wire wins when connected). A separator (comma, space, new line, none, or your own) goes between the pieces, and empty pieces are skipped so you never get a stray separator. Right-click the node for the separator and skip-empty settings.

# Input types
## Optional
- text_1
    - Text piece 1. Type here, or drag a wire onto its dot to pull text from another node (the wire wins when connected).
    - Comfy dtype: STRING
    - Python dtype: str
- text_2
    - Text piece 2. Type here, or drag a wire onto its dot to pull text from another node (the wire wins when connected).
    - Comfy dtype: STRING
    - Python dtype: str
- text_3
    - Text piece 3. Type here, or drag a wire onto its dot to pull text from another node (the wire wins when connected).
    - Comfy dtype: STRING
    - Python dtype: str
- text_4
    - Text piece 4. Type here, or drag a wire onto its dot to pull text from another node (the wire wins when connected).
    - Comfy dtype: STRING
    - Python dtype: str
## Hidden
- JoinState
    - The JoinState input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- text
    - The four pieces joined with your separator.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://gitlab.com/pixaroma/ComfyUI-Pixaroma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
