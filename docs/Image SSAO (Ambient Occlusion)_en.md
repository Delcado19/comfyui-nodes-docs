# Documentation
- Class name: WAS_Image_Ambient_Occlusion
- Category: WAS Suite/Image/Filter
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Image_Ambient_Occlusion node enhances visual depth and realism by applying ambient occlusion. It intelligently computes occlusion from the input image's depth and color information, creating a more natural, immersive visual effect.

# Input types
## Required
- images
- Input image parameters are critical for the node's operation because they provide the original visual data for applying ambient occlusion. Image quality and resolution directly affect the final output.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
- depth_images
- Depth images are essential for accurately determining occlusion levels within the scene. They supply depth information that complements the input image and enhances the realism of the ambient occlusion effect.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
## Optional
- strength
- The intensity parameter lets users control the strength of the ambient occlusion effect. Adjusting this parameter fine‑tunes the visual impact of occlusion, making it more or less pronounced according to creative needs.
    - Comfy dtype: FLOAT
    - Python dtype: float
- radius
- The radius parameter defines the area around each pixel used for occlusion calculation. A larger radius yields a smoother, broader occlusion effect, while a smaller radius creates a tighter, more localized effect.
    - Comfy dtype: FLOAT
    - Python dtype: float
- ao_blur
- The ao_blur parameter determines the blur applied to the occlusion map. It smooths the occlusion, producing a subtler, more natural appearance.
    - Comfy dtype: FLOAT
    - Python dtype: float
- specular_threshold
- The specular_threshold parameter sets the cutoff for specular highlights, influencing how occlusion interacts with bright areas in the image.
    - Comfy dtype: INT
    - Python dtype: int
- enable_specular_masking
- Enabling specular masking via the enable_specular_masking parameter allows selective occlusion, bypassing regions with high specular reflection.
    - Comfy dtype: COMBO[True, False]
    - Python dtype: bool
- tile_size
- The tile_size parameter optimizes ambient occlusion processing by dividing the image into smaller tiles. This enables parallel processing, especially for large images, improving performance.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- composited_images
- The composited_images output parameter represents the final rendered image with ambient occlusion applied. It combines the input image with the computed occlusion to produce a more three‑dimensional look.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- ssao_images
- The ssao_images output parameter provides the standalone ambient occlusion maps calculated during processing. These can be used for further analysis or additional visual effects.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- specular_mask_images
- The specular_mask_images output parameter contains the generated masks for applying specular masking. These masks determine which image areas receive occlusion based on specular reflection values.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Image_Ambient_Occlusion:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'images': ('IMAGE',), 'depth_images': ('IMAGE',), 'strength': ('FLOAT', {'min': 0.0, 'max': 5.0, 'default': 1.0, 'step': 0.01}), 'radius': ('FLOAT', {'min': 0.01, 'max': 1024, 'default': 30, 'step': 0.01}), 'ao_blur': ('FLOAT', {'min': 0.01, 'max': 1024, 'default': 2.5, 'step': 0.01}), 'specular_threshold': ('INT', {'min': 0, 'max': 255, 'default': 25, 'step': 1}), 'enable_specular_masking': (['True', 'False'],), 'tile_size': ('INT', {'min': 1, 'max': 512, 'default': 1, 'step': 1})}}
    RETURN_TYPES = ('IMAGE', 'IMAGE', 'IMAGE')
    RETURN_NAMES = ('composited_images', 'ssao_images', 'specular_mask_images')
    FUNCTION = 'ambient_occlusion'
    CATEGORY = 'WAS Suite/Image/Filter'

    def ambient_occlusion(self, images, depth_images, strength, radius, ao_blur, specular_threshold, enable_specular_masking, tile_size):
        enable_specular_masking = enable_specular_masking == 'True'
        composited = []
        occlusions = []
        speculars = []
        for (i, image) in enumerate(images):
            cstr(f'Processing SSAO image {i + 1}/{len(images)} ...').msg.print()
            (composited_image, occlusion_image, specular_mask) = self.create_ambient_occlusion(tensor2pil(image), tensor2pil(depth_images[i if len(depth_images) >= i else -1]), strength=strength, radius=radius, ao_blur=ao_blur, spec_threshold=specular_threshold, enable_specular_masking=enable_specular_masking, tile_size=tile_size)
            composited.append(pil2tensor(composited_image))
            occlusions.append(pil2tensor(occlusion_image))
            speculars.append(pil2tensor(specular_mask))
        composited = torch.cat(composited, dim=0)
        occlusions = torch.cat(occlusions, dim=0)
        speculars = torch.cat(speculars, dim=0)
        return (composited, occlusions, speculars)

    def process_tile(self, tile_rgb, tile_depth, tile_x, tile_y, radius):
        tile_occlusion = calculate_ambient_occlusion_factor(tile_rgb, tile_depth, tile_rgb.shape[0], tile_rgb.shape[1], radius)
        return (tile_x, tile_y, tile_occlusion)

    def create_ambient_occlusion(self, rgb_image, depth_image, strength=1.0, radius=30, ao_blur=5, spec_threshold=200, enable_specular_masking=False, tile_size=1):
        import concurrent.futures
        if depth_image.size != rgb_image.size:
            depth_image = depth_image.resize(rgb_image.size)
        rgb_normalized = np.array(rgb_image, dtype=np.float32) / 255.0
        depth_normalized = np.array(depth_image, dtype=np.float32) / 255.0
        (height, width, _) = rgb_normalized.shape
        if tile_size <= 1:
            print('Processing single-threaded AO (highest quality) ...')
            occlusion_array = calculate_ambient_occlusion_factor(rgb_normalized, depth_normalized, height, width, radius)
        else:
            tile_size = (tile_size if tile_size <= 8 else 8) if tile_size > 1 else 1
            num_tiles_x = (width - 1) // tile_size + 1
            num_tiles_y = (height - 1) // tile_size + 1
            occlusion_array = np.zeros((height, width), dtype=np.uint8)
            with concurrent.futures.ThreadPoolExecutor() as executor:
                futures = []
                with tqdm(total=num_tiles_y * num_tiles_x) as pbar:
                    for tile_y in range(num_tiles_y):
                        for tile_x in range(num_tiles_x):
                            tile_left = tile_x * tile_size
                            tile_upper = tile_y * tile_size
                            tile_right = min(tile_left + tile_size, width)
                            tile_lower = min(tile_upper + tile_size, height)
                            tile_rgb = rgb_normalized[tile_upper:tile_lower, tile_left:tile_right]
                            tile_depth = depth_normalized[tile_upper:tile_lower, tile_left:tile_right]
                            future = executor.submit(self.process_tile, tile_rgb, tile_depth, tile_x, tile_y, radius)
                            futures.append(future)
                    for future in concurrent.futures.as_completed(futures):
                        (tile_x, tile_y, tile_occlusion) = future.result()
                        tile_left = tile_x * tile_size
                        tile_upper = tile_y * tile_size
                        tile_right = min(tile_left + tile_size, width)
                        tile_lower = min(tile_upper + tile_size, height)
                        occlusion_array[tile_upper:tile_lower, tile_left:tile_right] = tile_occlusion
                        pbar.update(1)
        occlusion_array = (occlusion_array * strength).clip(0, 255).astype(np.uint8)
        occlusion_image = Image.fromarray(occlusion_array, mode='L')
        occlusion_image = occlusion_image.filter(ImageFilter.GaussianBlur(radius=ao_blur))
        occlusion_image = occlusion_image.filter(ImageFilter.SMOOTH)
        occlusion_image = ImageChops.multiply(occlusion_image, ImageChops.multiply(occlusion_image, occlusion_image))
        mask = rgb_image.convert('L')
        mask = mask.point(lambda x: x > spec_threshold, mode='1')
        mask = mask.convert('RGB')
        mask = mask.filter(ImageFilter.GaussianBlur(radius=2.5)).convert('L')
        if enable_specular_masking:
            occlusion_image = Image.composite(Image.new('L', rgb_image.size, 255), occlusion_image, mask)
        occlsuion_result = ImageChops.multiply(rgb_image, occlusion_image.convert('RGB'))
        return (occlsuion_result, occlusion_image, mask)
```