# Documentation
- Class name: IdeogramPImage
- Category: partner/image/Ideogram
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Generates images using P-Image, Ideogram's fast text-to-image model. Strong typography and photorealism; supports Ideogram 4.0 structured JSON captions for exact text, colors and layout.

# Input types
## Required
- prompt
    - Text prompt. Also accepts an Ideogram 4.0 structured JSON caption (exact colors as #RRGGBB hexes, exact text strings, bounding-box layout) — set prompt_upsampling to OFF to use it verbatim.
    - Comfy dtype: STRING
    - Python dtype: str
- quality
    - Speed/price/quality tier. MEDIUM is the everyday default; HIGH for complex prompts, fine detail and difficult text; VERY_LOW/LOW for drafts at scale. Difficult text renders poorly below MEDIUM.
    - Comfy dtype: COMBO
    - Python dtype: object
- resolution
    - Output size class (exact pixels follow the aspect ratio, e.g. 16:9 gives 1280x720 at 1K and 2560x1440 at 2K). Prefer HIGH + 2K for crisp typography.
    - Comfy dtype: COMBO
    - Python dtype: object
- aspect_ratio
    - The aspect ratio for image generation.
    - Comfy dtype: COMBO
    - Python dtype: object
- prompt_upsampling
    - Expands short prompts into a detailed structured caption before generation (the rewritten prompt is returned as final_prompt). Set OFF when supplying your own JSON caption or exact wording.
    - Comfy dtype: COMBO
    - Python dtype: object
## Optional
- seed
    - Seed for reproducible generation. With prompt_upsampling OFF, the same seed and settings return the same image; with ON/AUTO the prompt rewrite varies per run — reproduce a result by reusing its final_prompt output with prompt_upsampling OFF and the same seed.
    - Comfy dtype: INT
    - Python dtype: int
## Hidden
- auth_token_comfy_org
    - The auth_token_comfy_org input is used by this node during execution.
    - Comfy dtype: AUTH_TOKEN_COMFY_ORG
    - Python dtype: object
- api_key_comfy_org
    - The api_key_comfy_org input is used by this node during execution.
    - Comfy dtype: API_KEY_COMFY_ORG
    - Python dtype: object
- unique_id
    - The unique_id input is used by this node during execution.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: object
- comfy_usage_source
    - The comfy_usage_source input is used by this node during execution.
    - Comfy dtype: COMFY_USAGE_SOURCE
    - Python dtype: object

# Output types
- IMAGE
    - The IMAGE output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- final_prompt
    - The prompt the image was actually generated from (the rewritten structured caption when prompt_upsampling ran, else your prompt). Feed it back with prompt_upsampling OFF and the same seed to reproduce this image.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
