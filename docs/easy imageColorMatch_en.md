
# Documentation
- Class name: easy imageColorMatch
- Category: EasyUse/Image
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The easy imageColorMatch node is designed to adjust the color scheme of a target image to match that of a reference image. It supports multiple color matching methods and allows customization of output through save options and prefixes. This node is particularly useful for maintaining tonal consistency across different images, such as in photo editing, graphic design, and content creation.

# Input types
## Required
- image_ref
    - The reference image used as the color matching standard. It provides the baseline for color adjustment of the target image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image_target
    - The target image that needs to be adjusted to match the color scheme of the reference image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- method
    - Specifies the color matching method to use. It determines the algorithm for adjusting the target image's colors.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- image_output
    - Controls the node's output behavior, allowing options such as hiding, previewing, or saving the processed image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- save_prefix
    - The prefix for saved filenames, providing a simple way to organize and identify processed images.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- image
    - The processed image with its color scheme adjusted to match the reference image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- ui
    - Provides UI components (if applicable) for displaying or interacting with the processed image.


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class imageColorMatch(PreviewImage):
  @classmethod
  def INPUT_TYPES(cls):
    return {
      "required": {
        "image_ref": ("IMAGE",),
        "image_target": ("IMAGE",),
        "method": (['wavelet', 'adain', 'mkl', 'hm', 'reinhard', 'mvgd', 'hm-mvgd-hm', 'hm-mkl-hm'],),
        "image_output": (["Hide", "Preview", "Save", "Hide/Save"], {"default": "Preview"}),
        "save_prefix": ("STRING", {"default": "ComfyUI"}),
      },
      "hidden": {"prompt": "PROMPT", "extra_pnginfo": "EXTRA_PNGINFO"},
    }

  CATEGORY = "EasyUse/Image"

  RETURN_TYPES = ("IMAGE",)
  RETURN_NAMES = ("image",)
  OUTPUT_NODE = True
  FUNCTION = "color_match"

  def color_match(self, image_ref, image_target, method, image_output, save_prefix, prompt=None, extra_pnginfo=None):
    if method in ["wavelet", "adain"]:
      result_images = wavelet_color_fix(tensor2pil(image_target), tensor2pil(image_ref)) if method == 'wavelet' else adain_color_fix(tensor2pil(image_target), tensor2pil(image_ref))
      new_images = pil2tensor(result_images)
    else:
      try:
        from color_matcher import ColorMatcher
      except:
        install_package("color-matcher")
        from color_matcher import ColorMatcher
      image_ref = image_ref.cpu()
      image_target = image_target.cpu()
      batch_size = image_target.size(0)
      out = []
      images_target = image_target.squeeze()
      images_ref = image_ref.squeeze()

      image_ref_np = images_ref.numpy()
      images_target_np = images_target.numpy()
      if image_ref.size(0) > 1 and image_ref.size(0) != batch_size:
        raise ValueError("ColorMatch: Use either single reference image or a matching batch of reference images.")
      cm = ColorMatcher()
      for i in range(batch_size):
        image_target_np = images_target_np if batch_size == 1 else images_target[i].numpy()
        image_ref_np_i = image_ref_np if image_ref.size(0) == 1 else images_ref[i].numpy()
        try:
          image_result = cm.transfer(src=image_target_np, ref=image_ref_np_i, method=method)
        except BaseException as e:
          print(f"Error occurred during transfer: {e}")
          break
        out.append(torch.from_numpy(image_result))

      new_images = torch.stack(out, dim=0).to(torch.float32)

    results = easySave(new_images, save_prefix, image_output, prompt, extra_pnginfo)

    if image_output in ("Hide", "Hide/Save"):
      return {"ui": {},
              "result": (new_images,)}

    return {"ui": {"images": results},
            "result": (new_images,)}

```
