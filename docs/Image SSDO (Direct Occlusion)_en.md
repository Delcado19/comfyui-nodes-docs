# Documentation
- Class name: WAS_Image_Direct_Occlusion
- Category: WAS Suite/Image/Filter
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Image_Direct_Occlusion node is designed to process images and depth maps to create direct occlusion effects, enhancing visual realism by simulating light-object interactions. It identifies light sources and applies occlusion based on depth and color differences, producing images with a more three-dimensional appearance.

# Input types
## Required
- images
    - The input image parameter is crucial for the node's operation as it is the primary data source for generating occlusion effects. It directly affects the final result by determining the visual content processed to produce occlusion.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- depth_images
    - The depth_images parameter provides depth information necessary for calculating occlusion effects. It is essential for determining how light interacts based on the depth of different parts of the image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- strength
    - The strength parameter controls the intensity of the occlusion effect. It is important as it allows users to adjust the degree of occlusion applied to the image, fine-tuning the visual impact of the final output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- radius
    - The radius parameter defines the influence area of each pixel when calculating occlusion. It is important as it determines the range of the occlusion effect around each pixel, affecting the overall texture and detail of the image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- specular_threshold
    - The specular_threshold parameter is used to identify the brightest regions in the image, which contribute to light source identification. It plays a key role in determining which parts of the image are treated as light sources in occlusion calculations.
    - Comfy dtype: INT
    - Python dtype: int
- colored_occlusion
    - The colored_occlusion parameter determines whether the occlusion effect is applied in color or grayscale. This choice affects the visual style of the occlusion, allowing for more subtle or pronounced visual changes.
    - Comfy dtype: COMBO[True, False]
    - Python dtype: bool

# Output types
- composited_images
    - The composited_images output parameter represents the final image with the direct occlusion effect applied. It is important as it is the primary result of the node's processing, used for further visualization or analysis.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- ssdo_images
    - The ssdo_images output parameter provides the image with the occlusion effect before compositing. It is useful for examining the occlusion effect separately and for debugging purposes.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- ssdo_image_masks
    - The ssdo_image_masks output parameter includes masks corresponding to the occluded regions in the image. These masks can be used for further image processing or isolating specific areas of the occlusion effect.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- light_source_image_masks
    - The light_source_image_masks output parameter contains masks identifying regions in the image treated as light sources. These masks are crucial for understanding which parts of the image contribute to the occlusion effect.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class WAS_Image_Direct_Occlusion:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'images': ('IMAGE',), 'depth_images': ('IMAGE',), 'strength': ('FLOAT', {'min': 0.0, 'max': 5.0, 'default': 1.0, 'step': 0.01}), 'radius': ('FLOAT', {'min': 0.01, 'max': 1024, 'default': 30, 'step': 0.01}), 'specular_threshold': ('INT', {'min': 0, 'max': 255, 'default': 128, 'step': 1}), 'colored_occlusion': (['True', 'False'],)}}
    RETURN_TYPES = ('IMAGE', 'IMAGE', 'IMAGE', 'IMAGE')
    RETURN_NAMES = ('composited_images', 'ssdo_images', 'ssdo_image_masks', 'light_source_image_masks')
    FUNCTION = 'direct_occlusion'
    CATEGORY = 'WAS Suite/Image/Filter'

    def direct_occlusion(self, images, depth_images, strength, radius, specular_threshold, colored_occlusion):
        composited = []
        occlusions = []
        occlusion_masks = []
        light_sources = []
        for (i, image) in enumerate(images):
            cstr(f'Processing SSDO image {i + 1}/{len(images)} ...').msg.print()
            (composited_image, occlusion_image, occlusion_mask, light_source) = self.create_direct_occlusion(tensor2pil(image), tensor2pil(depth_images[i if len(depth_images) >= i else -1]), strength=strength, radius=radius, threshold=specular_threshold, colored=True)
            composited.append(pil2tensor(composited_image))
            occlusions.append(pil2tensor(occlusion_image))
            occlusion_masks.append(pil2tensor(occlusion_mask))
            light_sources.append(pil2tensor(light_source))
        composited = torch.cat(composited, dim=0)
        occlusions = torch.cat(occlusions, dim=0)
        occlusion_masks = torch.cat(occlusion_masks, dim=0)
        light_sources = torch.cat(light_sources, dim=0)
        return (composited, occlusions, occlusion_masks, light_sources)

    def find_light_source(self, rgb_normalized, threshold):
        from skimage.measure import regionprops
        from skimage import measure
        rgb_uint8 = (rgb_normalized * 255).astype(np.uint8)
        rgb_to_grey = Image.fromarray(rgb_uint8, mode='RGB')
        dominant = self.dominant_region(rgb_to_grey, threshold)
        grayscale_image = np.array(dominant.convert('L'), dtype=np.float32) / 255.0
        regions = measure.label(grayscale_image > 0)
        if np.max(regions) > 0:
            region_sums = measure.regionprops(regions, intensity_image=grayscale_image)
            brightest_region = max(region_sums, key=lambda r: r.mean_intensity)
            (light_y, light_x) = brightest_region.centroid
            light_mask = (regions == brightest_region.label).astype(np.uint8)
            light_mask_cluster = light_mask
        else:
            (light_x, light_y) = (np.nan, np.nan)
            light_mask_cluster = np.zeros_like(dominant, dtype=np.uint8)
        return (light_mask_cluster, light_x, light_y)

    def dominant_region(self, image, threshold=128):
        from scipy.ndimage import label
        image = ImageOps.invert(image.convert('L'))
        binary_image = image.point(lambda x: 255 if x > threshold else 0, mode='1')
        (l, n) = label(np.array(binary_image))
        sizes = np.bincount(l.flatten())
        dominant = 0
        try:
            dominant = np.argmax(sizes[1:]) + 1
        except ValueError:
            pass
        dominant_region_mask = (l == dominant).astype(np.uint8) * 255
        result = Image.fromarray(dominant_region_mask, mode='L')
        return result.convert('RGB')

    def create_direct_occlusion(self, rgb_image, depth_image, strength=1.0, radius=10, threshold=200, colored=False):
        rgb_normalized = np.array(rgb_image, dtype=np.float32) / 255.0
        depth_normalized = np.array(depth_image, dtype=np.float32) / 255.0
        (height, width, _) = rgb_normalized.shape
        (light_mask, light_x, light_y) = self.find_light_source(rgb_normalized, threshold)
        occlusion_array = calculate_direct_occlusion_factor(rgb_normalized, depth_normalized, height, width, radius)
        occlusion_scaled = ((occlusion_array - np.min(occlusion_array)) / (np.max(occlusion_array) - np.min(occlusion_array)) * 255).astype(np.uint8)
        occlusion_image = Image.fromarray(occlusion_scaled, mode='L')
        occlusion_image = occlusion_image.filter(ImageFilter.GaussianBlur(radius=0.5))
        occlusion_image = occlusion_image.filter(ImageFilter.SMOOTH_MORE)
        if colored:
            occlusion_result = Image.composite(Image.new('RGB', rgb_image.size, (0, 0, 0)), rgb_image, occlusion_image)
            occlusion_result = ImageOps.autocontrast(occlusion_result, cutoff=(0, strength))
        else:
            occlusion_result = Image.blend(occlusion_image, occlusion_image, strength)
        light_image = ImageOps.invert(Image.fromarray(light_mask * 255, mode='L'))
        direct_occlusion_image = ImageChops.screen(rgb_image, occlusion_result.convert('RGB'))
        return (direct_occlusion_image, occlusion_result, occlusion_image, light_image)
```