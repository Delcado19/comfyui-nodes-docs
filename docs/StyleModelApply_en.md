# Documentation
- Class name: StyleModelApply
- Category: conditioning/style_model
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The `StyleModelApply` node is designed to integrate the style of an image into a generative model. It accepts the output of a vision model and applies a style model to the conditional generation process, enabling the creation of stylized outputs. This node plays a critical role in the overall system by allowing style elements to seamlessly blend into the generative flow, facilitating the fusion of stylized elements.

# Input types
## Required
- clip_vision_output
    - The parameter `clip_vision_output` is a tensor representing visual features extracted from an image. It is essential to the node as it forms the basis for applying style transformations. This input directly influences how style is integrated into the generative model, affecting the aesthetic quality of the final output.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor
- style_model
    - The parameter `style_model` is a neural network module responsible for capturing and applying style features to the generative process. It is a required component for node operation, as it defines the style to be integrated into the generated content.
    - Comfy dtype: torch.nn.Module
    - Python dtype: torch.nn.Module
- conditioning
    - The parameter `conditioning` is a list of tuples, each containing two tensors representing different aspects of conditional data. These tensors are critical for guiding the generative model to produce outputs that align with the desired style and thematic elements.
    - Comfy dtype: List[Tuple[torch.Tensor, torch.Tensor]]
    - Python dtype: List[Tuple[torch.Tensor, torch.Tensor]]

# Output types
- CONDITIONING
    - The output `CONDITIONING` is a list of tuples, each containing two tensors that have been stylized and conditioned for the generative model. This output is significant as it feeds directly into the generation process, influencing the style and thematic consistency of the generated content.
    - Comfy dtype: List[Tuple[torch.Tensor, torch.Tensor]]
    - Python dtype: List[Tuple[torch.Tensor, torch.Tensor]]

# Usage tips
- Infra type: GPU

# Source code
```
class StyleModelApply:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'conditioning': ('CONDITIONING',), 'style_model': ('STYLE_MODEL',), 'clip_vision_output': ('CLIP_VISION_OUTPUT',)}}
    RETURN_TYPES = ('CONDITIONING',)
    FUNCTION = 'apply_stylemodel'
    CATEGORY = 'conditioning/style_model'

    def apply_stylemodel(self, clip_vision_output, style_model, conditioning):
        cond = style_model.get_cond(clip_vision_output).flatten(start_dim=0, end_dim=1).unsqueeze(dim=0)
        c = []
        for t in conditioning:
            n = [torch.cat((t[0], cond), dim=1), t[1].copy()]
            c.append(n)
        return (c,)
```