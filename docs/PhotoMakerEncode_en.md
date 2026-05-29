# Documentation
- Class name: PhotoMakerEncode
- Category: _for_testing/photomaker
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The PhotoMakerEncode node is designed to apply the photomaker effect to the input image using a combination of text, clip features, and image. It processes the input to generate conditioning output that can be used for further image manipulation tasks.

# Input types
## Required
- photomaker
    - The photomaker parameter is crucial for applying the photomaker effect. It is expected to be a pretrained model or a compatible object that can process the image accordingly.
    - Comfy dtype: PHOTOMAKER
    - Python dtype: torch.nn.Module
- image
    - The image parameter represents the input image that the node will process. This is a key input because the photomaker effect is applied directly to this image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- clip
    - The clip parameter is used to tokenize and encode text into a format that photomaker can use to generate conditioning output.
    - Comfy dtype: CLIP
    - Python dtype: Callable
- text
    - The text parameter provides a descriptive input that guides photomaker to apply the desired effect to the image. It is a multi-line string that can contain dynamic prompts.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- CONDITIONING
    - The CONDITIONING output is the key result of the node operation. It encapsulates the encoded representation used to guide subsequent image manipulation processes.
    - Comfy dtype: CONDITIONING
    - Python dtype: Tuple[torch.Tensor, Dict[str, torch.Tensor]]

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
