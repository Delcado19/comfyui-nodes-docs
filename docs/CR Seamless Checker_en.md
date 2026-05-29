# Documentation
- Class name: CR_SeamlessChecker
- Category: Comfyroll/Graphics/Template
- Output node: True
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_SeamlessChecker node is used to check the seamless tiling effect of images. This node adjusts image sizes, generates a grid layout, and displays scaled versions of multiple images, allowing users to identify and evaluate the tiling quality. It is widely used in graphic design and image processing to ensure seamless visual results.

# Input types
## Required
- image
    - The image parameter is the main object processed by the node. It directly affects the node's execution and inspection results, serving as the source data for seamless tiling checks.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image 或 torch.Tensor
- rescale_factor
    - The scale factor parameter adjusts the image size and is crucial for evaluating the seamless tiling effect. Users can control the zoom level through this parameter to more precisely view tiling details.
    - Comfy dtype: FLOAT
    - Python dtype: float
- grid_options
    - The grid options parameter defines the layout of images in the grid. It determines the number of images displayed when performing seamless tiling checks. This parameter is important for showing scaled versions of multiple images and assessing the tiling effect of the entire grid.
    - Comfy dtype: COMBO['2x2', '3x3', '4x4', '5x5', '6x6']
    - Python dtype: str

# Output types
- show_help
    - The help information provides usage guidelines and further resource links for the node, allowing users to understand and operate the node more effectively.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_SeamlessChecker:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'image': ('IMAGE',), 'rescale_factor': ('FLOAT', {'default': 0.25, 'min': 0.1, 'max': 1.0, 'step': 0.01}), 'grid_options': (['2x2', '3x3', '4x4', '5x5', '6x6'],)}}
    RETURN_TYPES = ('STRING',)
    RETURN_NAMES = ('show_help',)
    OUTPUT_NODE = True
    FUNCTION = 'thumbnail'
    CATEGORY = icons.get('Comfyroll/Graphics/Template')

    def thumbnail(self, image, rescale_factor, grid_options):
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Other-Nodes#cr-seamless-checker'
        outline_thickness = 0
        pil_img = tensor2pil(image)
        (original_width, original_height) = pil_img.size
        rescaled_img = apply_resize_image(tensor2pil(image), original_width, original_height, 8, 'rescale', 'false', rescale_factor, 256, 'lanczos')
        outlined_img = ImageOps.expand(rescaled_img, outline_thickness, fill='black')
        max_columns = int(grid_options[0])
        repeat_images = [outlined_img] * max_columns ** 2
        combined_image = make_grid_panel(repeat_images, max_columns)
        images_out = pil2tensor(combined_image)
        results = []
        for tensor in images_out:
            array = 255.0 * tensor.cpu().numpy()
            image = Image.fromarray(np.clip(array, 0, 255).astype(np.uint8))
            server = PromptServer.instance
            server.send_sync(BinaryEventTypes.UNENCODED_PREVIEW_IMAGE, ['PNG', image, None], server.client_id)
            results.append({'source': 'websocket', 'content-type': 'image/png', 'type': 'output'})
        return {'ui': {'images': results}, 'result': (show_help,)}
```