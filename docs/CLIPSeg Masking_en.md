# Documentation
- Class name: WAS_CLIPSeg
- Category: WAS Suite/Image/Masking
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The CLIPSeg_image method aims to perform image segmentation using text prompts. It leverages the CLIPSeg model to generate a mask that isolates the subject in the image described by the text. This method is particularly useful for applications requiring precise object segmentation based on textual descriptions.

# Input types
## Required
- image
    - The image parameter is crucial for the segmentation process as it is the input the model will analyze to identify and isolate the desired subject. The quality and resolution of the image can significantly affect the accuracy of the generated mask.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
## Optional
- text
    - The text parameter provides a description that guides the segmentation process. It is optional but can improve the precision of the segmentation by specifying what the model should focus on in the image.
    - Comfy dtype: STRING
    - Python dtype: str
- clipseg_model
    - The clipseg_model parameter allows users to provide a pre-trained CLIPSeg model for segmentation. This can be beneficial for using a custom model that has been fine-tuned for specific tasks or datasets.
    - Comfy dtype: CLIPSEG_MODEL
    - Python dtype: Tuple[str, transformers.CLIPSegForImageSegmentation]

# Output types
- MASK
    - The MASK output is a binary mask that separates the segmented subject from the rest of the image based on the provided text description. It is essential for applications requiring object separation or background removal.
    - Comfy dtype: MASK
    - Python dtype: np.ndarray
- MASK_IMAGE
    - The MASK_IMAGE output is an inverted image where the segmented subject is highlighted by the mask. It can be used for visual verification or further processing steps requiring a representation of the segmented image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class WAS_CLIPSeg:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'image': ('IMAGE',), 'text': ('STRING', {'default': '', 'multiline': False})}, 'optional': {'clipseg_model': ('CLIPSEG_MODEL',)}}
    RETURN_TYPES = ('MASK', 'IMAGE')
    RETURN_NAMES = ('MASK', 'MASK_IMAGE')
    FUNCTION = 'CLIPSeg_image'
    CATEGORY = 'WAS Suite/Image/Masking'

    def CLIPSeg_image(self, image, text=None, clipseg_model=None):
        from transformers import CLIPSegProcessor, CLIPSegForImageSegmentation
        image = tensor2pil(image)
        cache = os.path.join(MODELS_DIR, 'clipseg')
        if clipseg_model:
            inputs = clipseg_model[0]
            model = clipseg_model[1]
        else:
            inputs = CLIPSegProcessor.from_pretrained('CIDAS/clipseg-rd64-refined', cache_dir=cache)
            model = CLIPSegForImageSegmentation.from_pretrained('CIDAS/clipseg-rd64-refined', cache_dir=cache)
        with torch.no_grad():
            result = model(**inputs(text=text, images=image, padding=True, return_tensors='pt'))
        tensor = torch.sigmoid(result[0])
        mask = 1.0 - (tensor - tensor.min()) / tensor.max()
        mask = mask.unsqueeze(0)
        mask = tensor2pil(mask).convert('L')
        mask = mask.resize(image.size)
        return (pil2mask(mask), pil2tensor(ImageOps.invert(mask.convert('RGB'))))
```