# Documentation
- Class name: BindImageListPromptList
- Category: InspirePack/Prompt
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

This node is designed to process and organize image data and its corresponding text prompts, ensuring each image is linked to both positive and negative text responses. It manages input data length differences by adjusting prompts to match the number of images, providing a smooth workflow for image‑text pairing tasks.

# Input types
## Required
- images
- Image parameters form the basis of node operation and are critical. They are a set of image data paired with text prompts, influencing the node’s execution and output quality.
    - Comfy dtype: IMAGE
    - Python dtype: List[PIL.Image.Image]
- zipped_prompts
- This parameter stores a list of tuples, each containing a pair of positive and negative text prompts. This is essential to the node’s function because it directly affects the text associations generated for each image.
    - Comfy dtype: ZIPPED_PROMPT
    - Python dtype: List[Tuple[str, str, str]]
- default_positive
- Default positive text is used to fill situations where there are more images than prompts. It ensures every image has a corresponding positive prompt, maintaining consistency in node output.
    - Comfy dtype: STRING
    - Python dtype: List[str]
- default_negative
- Similar to default positive text, this parameter provides default negative text for images lacking a corresponding prompt. It helps the node generate complete image‑text pairs.
    - Comfy dtype: STRING
    - Python dtype: List[str]

# Output types
- image
- Output images are the direct result of node processing, preserving the original image data but now paired with related text prompts.
    - Comfy dtype: IMAGE
    - Python dtype: List[PIL.Image.Image]
- positive
- This output contains the positive text prompts associated with each image, usable for further analysis or as part of a larger image‑text dataset.
    - Comfy dtype: STRING
    - Python dtype: List[str]
- negative
- Negative text prompts are output alongside positive ones, providing contrast for each image and enhancing the comprehensiveness of the image‑text pairing.
    - Comfy dtype: STRING
    - Python dtype: List[str]
- prompt_label
- This output label indicates the type of prompt associated with each image, whether default or specifically provided, aiding organization and classification of image‑text pairs.
    - Comfy dtype: STRING
    - Python dtype: List[str]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Inspire-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
