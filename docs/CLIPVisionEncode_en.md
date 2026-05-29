# Documentation
- Class name: CLIPVisionEncode
- Category: conditioning
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Encode the visual information of an image into a format suitable for downstream tasks such as text-image matching or image classification. This node abstracts the complexity of the underlying model architecture, focusing on converting raw image data into semantically rich representations.

# Input types
## Required
- clip_vision
    - The CLIP vision model used for encoding images. It plays a critical role in the node's operation, providing the model architecture and parameters required for image encoding.
    - Comfy dtype: CLIP_VISION
    - Python dtype: torch.nn.Module
- image
    - The input image to be encoded. It is essential to the node's execution, as it is the raw data that will be transformed into a semantic representation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- CLIP_VISION_OUTPUT
    - The encoded output of the CLIP vision model, including the last hidden state, image embeddings, and the second-to-last hidden state. This output is important, as it provides the foundation for further analysis or processing in various applications.
    - Comfy dtype: CLIP_VISION_OUTPUT
    - Python dtype: Dict[str, torch.Tensor]

# Usage tips
- Infra type: GPU

# Source code
```
class CLIPVisionEncode:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'clip_vision': ('CLIP_VISION',), 'image': ('IMAGE',)}}
    RETURN_TYPES = ('CLIP_VISION_OUTPUT',)
    FUNCTION = 'encode'
    CATEGORY = 'conditioning'

    def encode(self, clip_vision, image):
        output = clip_vision.encode_image(image)
        return (output,)
```