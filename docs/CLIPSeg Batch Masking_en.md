# Documentation
- Class name: WAS_CLIPSeg_Batch
- Category: WAS Suite/Image/Masking
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The CLIPSeg_images method of the WAS_CLIPSeg_Batch node performs image segmentation based on text prompts. It uses the CLIPSeg model to generate masks corresponding to entities described in the image. The node can handle multiple images and texts, providing a powerful solution for complex segmentation tasks that require understanding of visual and textual inputs.

# Input types
## Required
- image_a
- The image_a parameter is the primary image input required for the segmentation process. It is crucial because it directly affects the model's ability to understand and segment the desired elements in the image.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image or torch.Tensor
- text_a
- The text_a parameter provides a textual prompt that guides the segmentation model to identify and segment specific parts of the image. Its importance lies in refining the segmentation process by focusing on the provided textual description.
    - Comfy dtype: STRING
    - Python dtype: str
- image_b
- The image_b parameter is a secondary image input used together with image_a, applicable to more complex segmentation scenarios. It allows additional visual context to be considered, enhancing segmentation results.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image or torch.Tensor
- text_b
- The text_b parameter is another textual prompt that complements text_a, offering alternative or additional guidance to the segmentation model. It increases the node's flexibility in handling diverse segmentation tasks.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- image_c
- The optional image_c parameter allows inclusion of another image in the segmentation process. To be processed correctly, its dimensions should match those of image_a.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image or torch.Tensor
- text_c
- The optional text_c parameter extends the textual guidance for the segmentation model, providing further description that can aid in more complex segmentation tasks.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- IMAGES_BATCH
- The IMAGES_BATCH output contains the batch of input images processed by the node. It is important because it enables review and further analysis of the original images after segmentation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- MASKS_BATCH
- The MASKS_BATCH output provides the generated masks corresponding to regions of interest in the input images. These masks are essential for isolating and further processing the specific parts described by the text prompts.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- MASK_IMAGES_BATCH
- The MASK_IMAGES_BATCH output includes images that have been masked, highlighting the segmented regions according to the text prompts. It is a key output for visualizing the results of the segmentation process.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class WAS_CLIPSeg_Batch:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'image_a': ('IMAGE',), 'image_b': ('IMAGE',), 'text_a': ('STRING', {'default': '', 'multiline': False}), 'text_b': ('STRING', {'default': '', 'multiline': False})}, 'optional': {'image_c': ('IMAGE',), 'image_d': ('IMAGE',), 'image_e': ('IMAGE',), 'image_f': ('IMAGE',), 'text_c': ('STRING', {'default': '', 'multiline': False}), 'text_d': ('STRING', {'default': '', 'multiline': False}), 'text_e': ('STRING', {'default': '', 'multiline': False}), 'text_f': ('STRING', {'default': '', 'multiline': False})}}
    RETURN_TYPES = ('IMAGE', 'MASK', 'IMAGE')
    RETURN_NAMES = ('IMAGES_BATCH', 'MASKS_BATCH', 'MASK_IMAGES_BATCH')
    FUNCTION = 'CLIPSeg_images'
    CATEGORY = 'WAS Suite/Image/Masking'

    def CLIPSeg_images(self, image_a, image_b, text_a, text_b, image_c=None, image_d=None, image_e=None, image_f=None, text_c=None, text_d=None, text_e=None, text_f=None):
        from transformers import CLIPSegProcessor, CLIPSegForImageSegmentation
        import torch.nn.functional as F
        images_pil = [tensor2pil(image_a), tensor2pil(image_b)]
        if image_c is not None:
            if image_c.shape[-2:] != image_a.shape[-2:]:
                cstr('Size of image_c is different from image_a.').error.print()
                return
            images_pil.append(tensor2pil(image_c))
        if image_d is not None:
            if image_d.shape[-2:] != image_a.shape[-2:]:
                cstr('Size of image_d is different from image_a.').error.print()
                return
            images_pil.append(tensor2pil(image_d))
        if image_e is not None:
            if image_e.shape[-2:] != image_a.shape[-2:]:
                cstr('Size of image_e is different from image_a.').error.print()
                return
            images_pil.append(tensor2pil(image_e))
        if image_f is not None:
            if image_f.shape[-2:] != image_a.shape[-2:]:
                cstr('Size of image_f is different from image_a.').error.print()
                return
            images_pil.append(tensor2pil(image_f))
        images_tensor = [torch.from_numpy(np.array(img.convert('RGB')).astype(np.float32) / 255.0).unsqueeze(0) for img in images_pil]
        images_tensor = torch.cat(images_tensor, dim=0)
        prompts = [text_a, text_b]
        if text_c:
            prompts.append(text_c)
        if text_d:
            prompts.append(text_d)
        if text_e:
            prompts.append(text_e)
        if text_f:
            prompts.append(text_f)
        cache = os.path.join(MODELS_DIR, 'clipseg')
        inputs = CLIPSegProcessor.from_pretrained('CIDAS/clipseg-rd64-refined', cache_dir=cache)
        model = CLIPSegForImageSegmentation.from_pretrained('CIDAS/clipseg-rd64-refined', cache_dir=cache)
        with torch.no_grad():
            result = model(**inputs(text=prompts, images=images_pil, padding=True, return_tensors='pt'))
        masks = []
        mask_images = []
        for (i, res) in enumerate(result.logits):
            tensor = torch.sigmoid(res)
            mask = 1.0 - (tensor - tensor.min()) / tensor.max()
            mask = mask.unsqueeze(0)
            mask = tensor2pil(mask).convert('L')
            mask = mask.resize(images_pil[0].size)
            mask_batch = pil2mask(mask)
            masks.append(mask_batch.unsqueeze(0).unsqueeze(1))
            mask_images.append(pil2tensor(ImageOps.invert(mask.convert('RGB'))).squeeze(0))
        masks_tensor = torch.cat(masks, dim=0)
        mask_images_tensor = torch.stack(mask_images, dim=0)
        del inputs, model, result, tensor, masks, mask_images, images_pil
        return (images_tensor, masks_tensor, mask_images_tensor)
```