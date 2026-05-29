
# Documentation
- Class name: Image Batch Manager (SuperBeasts.AI)
- Category: SuperBeastsAI/Image
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Image Batch Manager node is designed to rearrange and process a batch of images according to specified dimensions and an optional new order. It can dynamically resize and crop images to fit the desired dimensions, and optionally reorder them based on a custom sequence, enabling versatile image batch processing operations for various application scenarios.

# Input types
## Required
- width
    - Specifies the desired width of the output images, affecting the resize and crop operations to ensure the images meet this width requirement.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Specifies the desired height of the output images, affecting the resize and crop operations to ensure the images meet this height requirement.
    - Comfy dtype: INT
    - Python dtype: int
- ordering_enabled
    - Determines whether the reordering feature is enabled. If the 'new_order' parameter is specified, images can be rearranged according to it. This parameter enables or disables the custom image batch ordering functionality.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

## Optional
- new_order
    - When 'ordering_enabled' is set to 'enabled', defines the custom sequence used to reorder the images, affecting the final arrangement of the image batch. This parameter should be a comma-separated list of indices representing the new order of the images.
    - Comfy dtype: STRING
    - Python dtype: str
- image1
    - Represents one of up to twelve images that may be included in the batch, used for dynamic resizing, cropping, and optional reordering.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image2
    - Represents one of up to twelve images that may be included in the batch, used for dynamic resizing, cropping, and optional reordering.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image3
    - Represents one of up to twelve images that may be included in the batch, used for dynamic resizing, cropping, and optional reordering.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image4
    - Represents one of up to twelve images that may be included in the batch, used for dynamic resizing, cropping, and optional reordering.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image5
    - Represents one of up to twelve images that may be included in the batch, used for dynamic resizing, cropping, and optional reordering.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image6
    - Represents one of up to twelve images that may be included in the batch, used for dynamic resizing, cropping, and optional reordering.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image7
    - Represents one of up to twelve images that may be included in the batch, used for dynamic resizing, cropping, and optional reordering.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image8
    - Represents one of up to twelve images that may be included in the batch, used for dynamic resizing, cropping, and optional reordering.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image9
    - Represents one of up to twelve images that may be included in the batch, used for dynamic resizing, cropping, and optional reordering.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image10
    - Represents one of up to twelve images that may be included in the batch, used for dynamic resizing, cropping, and optional reordering.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image11
    - Represents one of up to twelve images that may be included in the batch, used for dynamic resizing, cropping, and optional reordering.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image12
    - Represents one of up to twelve images that may be included in the batch, used for dynamic resizing, cropping, and optional reordering.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- image
    - The processed image batch, resized, cropped, and optionally reordered according to the specified parameters.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
