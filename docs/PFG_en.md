
# Documentation
- Class name: PFG
- Category: loaders
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

PFG node aims to enhance the conditioning process in generative models by applying learned transformations to the input conditioning vector. It utilizes a pre-trained model to compute features from the input image, then scales these features and combines them with the original conditioning vector to produce a modified conditioning vector that better guides the generation process.

# Input types
## Required
- positive
    - Represents the conditioning vector for desired output attributes or content. It plays a crucial role in guiding the generative model towards outputs that meet specified positive conditions.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- negative
    - Represents the conditioning vector for undesired attributes or content. Used to guide the generative model to avoid generating outputs with these negative conditions.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- pfg_scale
    - Scaling factor for PFG feature vector, allowing adjustment of its effect on the conditioning process. This parameter fine-tunes the impact of PFG-modified features on the final generation output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- image
    - Input image used to extract features using the PFG model. These extracted features are then used to modify the conditioning vector, enhancing the model's ability to generate desired outputs.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
- model_name
    - Name of the pre-trained PFG model used for feature extraction. This allows flexible selection of different models based on the specific requirements or features of the input image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- conditioning
    - Modified conditioning vector, including positive and negative, enhanced by features extracted from the input image to better guide the generation process.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[List[torch.Tensor, Dict]]


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
