# Documentation
- Class name: CLIPTextEncodeSDXLRefiner
- Category: advanced/conditioning
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The CLIPTextEncodeSDXLRefiner node is designed to refine and encode text inputs using the CLIP model, which excels at understanding and generating visual representations from textual descriptions. It plays a key role in the conditioning process by integrating aesthetic scores, dimensions, and text information to produce a comprehensive conditioning signal that can guide subsequent image synthesis or processing stages.

# Input types
## Required
- ascore
    - The aesthetic score parameter is essential for quantifying the visual appeal of generated content. It influences the encoding process by weighting the importance of aesthetics in the final conditioning signal, thereby affecting the aesthetic quality of the output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- width
    - The width parameter specifies the desired width of the output image. It is a key factor in determining the resolution and plays an important role in how the encoded text is visually represented in the synthesized image.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height parameter sets the vertical dimension of the output image. Together with width, it defines the overall resolution, which is crucial for properly scaling and displaying the encoded content.
    - Comfy dtype: INT
    - Python dtype: int
- text
    - The text parameter is the main input of the node, containing the textual description to be encoded into a visual representation. It is central to the node's functionality because the quality and detail of the text directly affect the generated conditioning signal.
    - Comfy dtype: STRING
    - Python dtype: str
- clip
    - The CLIP parameter represents the model used for text encoding. It is crucial because it provides the fundamental mechanism for converting text into a format that can be used for conditioning in image synthesis.
    - Comfy dtype: CLIP
    - Python dtype: CLIP model instance

# Output types
- CONDITIONING
    - The conditioning output is a multifaceted signal that includes the encoded text, aesthetic score, and dimensions. It serves as guidance for subsequent image processing tasks, ensuring that the generated content aligns with the initial text input.
    - Comfy dtype: CONDITIONING
    - Python dtype: Tuple[torch.Tensor, Dict[str, Union[torch.Tensor, float, int]]]

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
