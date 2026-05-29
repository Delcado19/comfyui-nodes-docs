# Documentation
- Class name: imageRemBg
- Category: EasyUse/Image
- Output node: True
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

The imageRemBg node is designed to remove the background from an image, providing a simplified and clean foreground for further use or display. It achieves this by applying a deep learning model optimized for background removal, ensuring the output image retains its primary subject while minimizing background interference.

# Input types
## Required
- images
    - The input image parameter is critical to the node's operation, as it defines the data on which the background removal process will be applied. The quality and format of these images directly affect the effectiveness of background removal.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- rem_mode
    - The rem_mode parameter specifies the removal mode the node will use. It is crucial because it determines the algorithmic approach used for background separation, affecting the accuracy of the final output.
    - Comfy dtype: STRING
    - Python dtype: str
- image_output
    - The image_output parameter indicates how the generated images are handled after processing. It can hide them, preview them, save them, or both hide and save, providing flexibility in managing the output based on user needs.
    - Comfy dtype: COMBO['Hide', 'Preview', 'Save', 'Hide/Save']
    - Python dtype: str
- save_prefix
    - The save_prefix parameter is used when the user chooses to save the processed images. It provides a base name for the saved files, which is important for organizing and identifying output images.
    - Comfy dtype: STRING
    - Python dtype: str
- prompt
    - The optional prompt parameter can be used to provide additional context or instructions to the node, which may be necessary for certain operations or refining the output based on specific criteria.
    - Comfy dtype: PROMPT
    - Python dtype: str
- extra_pnginfo
    - The extra_pnginfo parameter is used to include any additional information that the node's operation may require. This could be metadata or other relevant details that affect processing or output.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: str

# Output types
- image
    - The image output parameter represents the processed image after background removal. It is the primary output of the node and is significant because it reflects the result of the background removal process.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The mask output parameter provides the binary mask generated during the background removal process. It helps isolate the foreground object from the background in the image.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class imageRemBg:

    @classmethod
    def INPUT_TYPES(self):
        return {'required': {'images': ('IMAGE',), 'rem_mode': (('RMBG-1.4',),), 'image_output': (['Hide', 'Preview', 'Save', 'Hide/Save'], {'default': 'Preview'}), 'save_prefix': ('STRING', {'default': 'ComfyUI'})}, 'hidden': {'prompt': 'PROMPT', 'extra_pnginfo': 'EXTRA_PNGINFO'}}
    RETURN_TYPES = ('IMAGE', 'MASK')
    RETURN_NAMES = ('image', 'mask')
    FUNCTION = 'remove'
    OUTPUT_NODE = True
    CATEGORY = 'EasyUse/Image'

    def remove(self, rem_mode, images, image_output, save_prefix, prompt=None, extra_pnginfo=None):
        if rem_mode == 'RMBG-1.4':
            model_url = REMBG_MODELS[rem_mode]['model_url']
            suffix = model_url.split('.')[-1]
            model_path = get_local_filepath(model_url, REMBG_DIR, rem_mode + '.' + suffix)
            net = BriaRMBG()
            device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
            net.load_state_dict(torch.load(model_path, map_location=device))
            net.to(device)
            net.eval()
            model_input_size = [1024, 1024]
            new_images = list()
            masks = list()
            for image in images:
                orig_im = tensor2pil(image)
                (w, h) = orig_im.size
                image = preprocess_image(orig_im, model_input_size).to(device)
                result = net(image)
                result_image = postprocess_image(result[0][0], (h, w))
                mask_im = Image.fromarray(result_image)
                new_im = Image.new('RGBA', mask_im.size, (0, 0, 0, 0))
                new_im.paste(orig_im, mask=mask_im)
                new_images.append(pil2tensor(new_im))
                masks.append(pil2tensor(mask_im))
            new_images = torch.cat(new_images, dim=0)
            masks = torch.cat(masks, dim=0)
            results = easySave(new_images, save_prefix, image_output, prompt, extra_pnginfo)
            if image_output in ('Hide', 'Hide/Save'):
                return {'ui': {}, 'result': (new_images, masks)}
            return {'ui': {'images': results}, 'result': (new_images, masks)}
        else:
            return (None, None)
```