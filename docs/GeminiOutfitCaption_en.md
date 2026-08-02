# Documentation
- Class name: GeminiOutfitCaption
- Category: image/captioning
- Output node: False
- Repo Ref: https://github.com/Delcado19/comfyui-outfit-caption.git

GeminiOutfitCaption captions a single outfit reference image with Google Gemini vision models. It describes only the visible clothing, footwear and accessories — ignoring the person, face, pose, background and lighting — for virtual try-on (VTON) caption QA. It returns both the raw labelled caption and a ready-to-use VTON diffusion prompt with an identity/pose preservation prefix. A Gemini API key is required, either via an environment variable or a temporary session key entered on the node (a password-style field added by the node's own web extension, refreshing the model dropdown against the live Gemini catalog).

# Input types
## Required
- image
    - Outfit reference photo to caption. Must be a single image; batches of more than one are rejected before encoding.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- model
    - Vision model to call, ranked by a tested rating (🟢 best, 🟡 caution, 🔴 avoid, ⚪ untested) against the live Gemini model catalog. Refreshed via the node's session-key panel. Ignored when custom_model is set.
    - Comfy dtype: COMBO
    - Python dtype: str
- custom_model
    - Model ID override, used instead of the model dropdown when non-empty.
    - Comfy dtype: STRING
    - Python dtype: str
- api_key_env
    - Name of the environment variable holding the Gemini API key (default GEMINI_API_KEY_COMFYUI). Ignored while a session key is set on the node.
    - Comfy dtype: STRING
    - Python dtype: str
- timeout_seconds
    - Maximum time to wait for the Gemini API response, in seconds.
    - Comfy dtype: FLOAT
    - Python dtype: float
- max_image_mb
    - Rejects the request locally, before upload, if the PNG-encoded image exceeds this size in MiB.
    - Comfy dtype: FLOAT
    - Python dtype: float
- max_tokens
    - Maximum output tokens requested from the model for the caption.
    - Comfy dtype: INT
    - Python dtype: int
- no_person_accessories
    - Strips carried/personal accessories (bags, jewelry, eyewear, hats, watches) from the vton_prompt output while leaving raw_caption untouched.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- unique_id
    - Internal ComfyUI node identifier, used to look up a session API key entered on this specific node instance. Not user-facing.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: str

# Output types
- raw_caption
    - Unmodified labelled caption text returned by the model (Garment pieces, Coverage and silhouette, Color, Material family, Material evidence, Construction details, Folds and tension, Footwear, Accessories, Preservation, Uncertainty).
    - Comfy dtype: STRING
    - Python dtype: str
- vton_prompt
    - The caption rewritten as an instruction prompt for virtual try-on diffusion models, with a prefix that preserves the target person's identity, pose, face, hair, hands and background.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: API (network call to generativelanguage.googleapis.com; no local GPU/CPU inference)

# Source code
[View source repository on GitHub](https://github.com/Delcado19/comfyui-outfit-caption)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
