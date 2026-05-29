# Documentation
- Class name: RegionalIPAdapterEncodedMask
- Category: InspirePack/Regional
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

The RegionalIPAdapterEncodedMask class aims to apply a regional mask to the image processing adapter, enabling conditional processing of the generated image based on the specified mask. This node enhances control over the image generation process by focusing on specific regions of interest in the image. It allows fine-tuning of image attributes and style transfer, ensuring generated content closely matches desired visual elements.

# Input types
## Required
- mask
    - The mask parameter is crucial for defining which areas of the image the node will focus on. It acts as a guide for the image generation process, ensuring the specified regions are emphasized or modified according to user intent.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- embeds
    - The embedding vector provides a way to incorporate additional context and information into the image generation process. They can capture nuances and details that may not exist with the mask alone, improving the overall quality and relevance of the generated image.
    - Comfy dtype: embeds
    - Python dtype: torch.Tensor
- weight
    - The weight parameter adjusts the influence of the mask and embedding vector on image generation. By adjusting this value, users can control the degree to which the mask and embedding vector affect the final output, achieving a balance between desired visual elements and the natural generation process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- weight_type
    - The weight type parameter determines how weights are applied to the mask and embedding vector. Each type provides a different method for blending user input with the output of the generation model, affecting the style and appearance of the final image.
    - Comfy dtype: COMBO[original, linear, channel penalty]
    - Python dtype: str
- start_at
    - The start_at parameter defines the starting point of the mask's influence on the image. It helps control the spatial distribution of the mask's influence, ensuring accurate targeting of the desired region.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_at
    - The end_at parameter specifies the end point of the mask's influence on the image. It works in conjunction with start_at to define the range of mask influence, allowing precise control over the regional conditioning of the generated image.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- unfold_batch
    - The unfold_batch parameter allows manipulation of the batch dimension when applying the mask and embedding vector. This is useful for efficiently processing large batches of images, optimizing the node's performance and throughput.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- REGIONAL_IPADAPTER
    - The output of the RegionalIPAdapterEncodedMask node is a conditioned image adapter modified according to the input mask, embedding vector, and other parameters. This output can be used as a building block for further image generation or manipulation tasks, seamlessly integrating into the creative workflow.
    - Comfy dtype: REGIONAL_IPADAPTER
    - Python dtype: IPAdapterConditioning

# Usage tips
- Infra type: GPU

# Source code
```
class RegionalIPAdapterEncodedMask:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'mask': ('MASK',), 'embeds': ('embeds',), 'weight': ('FLOAT', {'default': 0.7, 'min': -1, 'max': 3, 'step': 0.05}), 'weight_type': (['original', 'linear', 'channel penalty'],), 'start_at': ('FLOAT', {'default': 0.0, 'min': 0.0, 'max': 1.0, 'step': 0.001}), 'end_at': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.001}), 'unfold_batch': ('BOOLEAN', {'default': False})}}
    RETURN_TYPES = ('REGIONAL_IPADAPTER',)
    FUNCTION = 'doit'
    CATEGORY = 'InspirePack/Regional'

    def doit(self, mask, embeds, weight, weight_type, start_at=0.0, end_at=1.0, unfold_batch=False):
        cond = IPAdapterConditioning(mask, weight, weight_type, embeds=embeds, start_at=start_at, end_at=end_at, unfold_batch=unfold_batch)
        return (cond,)
```