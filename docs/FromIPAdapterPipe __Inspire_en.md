
# Documentation
- Class name: FromIPAdapterPipe __Inspire
- Category: InspirePack/Util
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack

The FromIPAdapterPipe node is designed to break down a pre-built IP adapter pipeline into its constituent components. This node extracts individual elements from a bundled pipeline, such as the IP adapter, model, and additional features like CLIP Vision and InsightFace, facilitating further manipulation or analysis of these components.

# Input types
## Required
- ipadapter_pipe
    - The ipadapter_pipe parameter represents the bundled pipeline to be broken down. It is essential for initiating the decomposition process.
    - Comfy dtype: IPADAPTER_PIPE
    - Python dtype: tuple

# Output types
- ipadapter
    - Extracts the IP adapter component from the bundled pipeline.
    - Comfy dtype: IPADAPTER
    - Python dtype: object
- model
    - Retrieves the model component from the bundled pipeline.
    - Comfy dtype: MODEL
    - Python dtype: object
- clip_vision
    - If present, extracts the CLIP Vision component from the bundled pipeline.
    - Comfy dtype: CLIP_VISION
    - Python dtype: object
- insight_face
    - If applicable, retrieves the InsightFace component from the bundled pipeline.
    - Comfy dtype: INSIGHTFACE
    - Python dtype: object


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Inspire-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
