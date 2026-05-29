# Documentation
- Class name: JagsCLIPSeg
- Category: Jags_vector/CLIPSEG
- Output node: False
- Repo Ref: https://github.com/jags111/ComfyUI_Jags_VectorMagic

JagsCLIPSeg is a node designed to perform image segmentation using text prompts and image inputs. It leverages the power of the CLIPSeg model to generate detailed masks corresponding to the provided text descriptions, enhancing the segmentation process and utilizing the context of language.

# Input types
## Required
- image
    - The image parameter is crucial for the segmentation process, as it provides the visual context that the node will analyze and segment based on the provided text prompt.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- text
    - The text parameter serves as the guiding prompt for the segmentation process, describing what the node should focus on or the features it should identify in the image.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- blur
    - The blur parameter affects the smoothness of the segmentation mask, with higher values resulting in more generalized masks and lower values preserving more detail.
    - Comfy dtype: FLOAT
    - Python dtype: float
- threshold
    - The threshold parameter determines the cutoff point for binarizing the segmentation mask; values above the threshold are retained and those below are discarded, affecting the final appearance of the mask.
    - Comfy dtype: FLOAT
    - Python dtype: float
- dilation_factor
    - The dilation factor parameter controls the expansion of the segmentation mask, with higher values resulting in more aggressive dilation and lower values resulting in more conservative expansion.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- Mask
    - The mask output is a binary representation of the segmentation, where elements described by the text prompt are highlighted, providing a clear visual separation of the segmented features.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- Heatmap Mask
    - The heatmap mask output provides a visual gradient representing the confidence level of the segmentation, with higher values indicating regions of greater certainty about the segmentation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- BW Mask
    - The black and white mask output is a black-and-white version of the mask, providing a straightforward visual representation of the segmentation result, suitable for further analysis or processing.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class JagsCLIPSeg:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        """
            Return a dictionary which contains config for all input fields.
            Some types (string): "MODEL", "VAE", "CLIP", "CONDITIONING", "LATENT", "IMAGE", "INT", "STRING", "FLOAT".
            Input types "INT", "STRING" or "FLOAT" are special values for fields on the node.
            The type can be a list for selection.

            Returns: `dict`:
                - Key input_fields_group (`string`): Can be either required, hidden or optional. A node class must have property `required`
                - Value input_fields (`dict`): Contains input fields config:
                    * Key field_name (`string`): Name of a entry-point method's argument
                    * Value field_config (`tuple`):
                        + First value is a string indicate the type of field or a list for selection.
                        + Secound value is a config for type "INT", "STRING" or "FLOAT".
        """
        return {'required': {'image': ('IMAGE',), 'text': ('STRING', {'multiline': False})}, 'optional': {'blur': ('FLOAT', {'min': 0, 'max': 15, 'step': 0.1, 'default': 7}), 'threshold': ('FLOAT', {'min': 0, 'max': 1, 'step': 0.05, 'default': 0.4}), 'dilation_factor': ('INT', {'min': 0, 'max': 10, 'step': 1, 'default': 4})}}
    CATEGORY = 'Jags_vector/CLIPSEG'
    RETURN_TYPES = ('MASK', 'IMAGE', 'IMAGE')
    RETURN_NAMES = ('Mask', 'Heatmap Mask', 'BW Mask')
    FUNCTION = 'segment_image'

    def segment_image(self, image: torch.Tensor, text: str, blur: float, threshold: float, dilation_factor: int) -> Tuple[torch.Tensor, torch.Tensor, torch.Tensor]:
        """Create a segmentation mask from an image and a text prompt using CLIPSeg.

        Args:
            image (torch.Tensor): The image to segment.
            text (str): The text prompt to use for segmentation.
            blur (float): How much to blur the segmentation mask.
            threshold (float): The threshold to use for binarizing the segmentation mask.
            dilation_factor (int): How much to dilate the segmentation mask.

        Returns:
            Tuple[torch.Tensor, torch.Tensor, torch.Tensor]: The segmentation mask, the heatmap mask, and the binarized mask.
        """
        image_np = image.numpy().squeeze()
        image_np = (image_np * 255).astype(np.uint8)
        i = Image.fromarray(image_np, mode='RGB')
        processor = CLIPSegProcessor.from_pretrained(clipseg_model_dir)
        model = CLIPSegForImageSegmentation.from_pretrained(clipseg_model_dir)
        prompt = text
        input_prc = processor(text=prompt, images=i, padding='max_length', return_tensors='pt')
        with torch.no_grad():
            outputs = model(**input_prc)
        tensor = torch.sigmoid(outputs[0])
        thresh = threshold
        tensor_thresholded = torch.where(tensor > thresh, tensor, torch.tensor(0, dtype=torch.float))
        sigma = blur
        tensor_smoothed = gaussian_filter(tensor_thresholded.numpy(), sigma=sigma)
        tensor_smoothed = torch.from_numpy(tensor_smoothed)
        mask_normalized = (tensor_smoothed - tensor_smoothed.min()) / (tensor_smoothed.max() - tensor_smoothed.min())
        mask_dilated = dilate_mask(mask_normalized, dilation_factor)
        heatmap = apply_colormap(mask_dilated, cm.viridis)
        binary_mask = apply_colormap(mask_dilated, cm.Greys_r)
        dimensions = (image_np.shape[1], image_np.shape[0])
        heatmap_resized = resize_image(heatmap, dimensions)
        binary_mask_resized = resize_image(binary_mask, dimensions)
        (alpha_heatmap, alpha_binary) = (0.5, 1)
        overlay_heatmap = overlay_image(image_np, heatmap_resized, alpha_heatmap)
        overlay_binary = overlay_image(image_np, binary_mask_resized, alpha_binary)
        image_out_heatmap = numpy_to_tensor(overlay_heatmap)
        image_out_binary = numpy_to_tensor(overlay_binary)
        binary_mask_image = Image.fromarray(binary_mask_resized[..., 0])
        tensor_bw = binary_mask_image.convert('RGB')
        tensor_bw = np.array(tensor_bw).astype(np.float32) / 255.0
        tensor_bw = torch.from_numpy(tensor_bw)[None,]
        tensor_bw = tensor_bw.squeeze(0)[..., 0]
        return (tensor_bw, image_out_heatmap, image_out_binary)
```