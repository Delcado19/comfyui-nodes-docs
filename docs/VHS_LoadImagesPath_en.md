# Load Images (Path) 🎥🅥🅗🅢
## Documentation
- Class name: VHS_LoadImagesPath
- Category: Video Helper Suite 🎥🅥🅗🅢
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite.git

The VHS_LoadImagesPath node loads images from a specified directory path into a video editing or processing workflow. It supports filtering and selection options to customize the loaded image set, enabling efficient batch management and processing of images in the video assistant suite.

## Input types
### Required
- directory
    - Specify the directory from which to load images. This parameter is crucial for determining the source of images to be processed.
    - Comfy dtype: STRING
    - Python dtype: str

### Optional
- image_load_cap
    - Limit the number of images loaded from the directory, allowing control over the size of the processing batch.
    - Comfy dtype: INT
    - Python dtype: int
- skip_first_images
    - Skip a specified number of images at the beginning of the directory, enabling selective loading based on order.
    - Comfy dtype: INT
    - Python dtype: int
- select_every_nth
    - Load every nth image in the directory, providing a way to thin out the image set to be processed.
    - Comfy dtype: INT
    - Python dtype: int

## Output types
- image
    - Comfy dtype: IMAGE
    - The loaded images, ready for further processing or manipulation within the workflow.
    - Python dtype: torch.Tensor
- mask
    - Comfy dtype: MASK
    - Masks generated for the loaded images, useful for image editing tasks that require segmentation or selective editing.
    - Python dtype: torch.Tensor
- int
    - Comfy dtype: INT
    - The total number of loaded images, offering insight into batch size after applying load parameters.
    - Python dtype: int

## Usage tips
- Infra type: CPU
- Common nodes:
    - [ImpactImageBatchToImageList](../../ComfyUI-Impact-Pack/Nodes/ImpactImageBatchToImageList.md)
    - [PreviewImage](../../Comfy/Nodes/PreviewImage.md)
    - [IPAdapterEncoder](../../ComfyUI_IPAdapter_plus/Nodes/IPAdapterEncoder.md)
    - LinearBatchCreativeInterpolation

## Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
