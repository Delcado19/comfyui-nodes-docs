
# Documentation
- Class name: ToIPAdapterPipe __Inspire
- Category: InspirePack/Util
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ToIPAdapterPipe node aims to create a pipeline integrating various components such as IP adapters, models, and optional visual and face recognition enhancements, forming a unified processing flow. This setup facilitates the adaptation and enhancement of input data or models, preparing them for further processing or analysis.

# Input types
## Required
- ipadapter
    - The 'ipadapter' parameter is essential for specifying the IP adapter component to be used in the pipeline, serving as the foundational element for data or model adaptation.
    - Comfy dtype: IPADAPTER
    - Python dtype: tuple(IPADAPTER)
- model
    - The 'model' parameter is used to identify the specific model to be integrated into the pipeline, enabling customized processing or analysis.
    - Comfy dtype: MODEL
    - Python dtype: tuple(MODEL)
## Optional
- clip_vision
    - The 'clip_vision' parameter optionally adds visual processing capabilities to the pipeline, enhancing the model's understanding or interpretation of visual data.
    - Comfy dtype: CLIP_VISION
    - Python dtype: tuple(CLIP_VISION)
- insightface
    - The 'insightface' parameter optionally integrates face recognition technology into the pipeline, further enriching the model's analytical capabilities.
    - Comfy dtype: INSIGHTFACE
    - Python dtype: tuple(INSIGHTFACE)

# Output types
- ipadapter_pipe
    - This output represents the assembled pipeline, encapsulating the specified IP adapter, model, and any optional visual and face recognition enhancements.
    - Comfy dtype: IPADAPTER_PIPE
    - Python dtype: tuple(IPADAPTER, MODEL, CLIP_VISION, INSIGHTFACE, function)


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
