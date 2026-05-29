
# Documentation
- Class name: AlphaMatte
- Category: image/filters
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The AlphaMatte node is an advanced tool specifically for image processing, primarily used to extract and optimize the alpha matte (transparency channel) of an image. It utilizes deep learning technology, and by analyzing the image and its alpha trimap (trimap), it can accurately separate foreground from background, performing well even in complex scenes. This node has the ability to perform pre-blurring, adjust black and white points, and conduct iterative optimization to achieve high-quality matte extraction.

# Input types
## Required
- images
    - The input image from which to extract the alpha matte. This parameter is crucial as it directly affects the quality and accuracy of the matte extraction process.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- alpha_trimap
    - A trimap that provides an initial guess for foreground, background, and unknown regions, guiding the matte extraction process.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- preblur
    - Specifies the amount of pre-blur to apply to the trimap, used to smooth hard edges and improve matte extraction.
    - Comfy dtype: INT
    - Python dtype: int
- blackpoint
    - The black point value for adjusting the contrast of the trimap, helps to separate foreground and background more clearly.
    - Comfy dtype: FLOAT
    - Python dtype: float
- whitepoint
    - The white point value for adjusting the brightness of the trimap, enhances the distinction between foreground and background areas.
    - Comfy dtype: FLOAT
    - Python dtype: float
- max_iterations
    - The maximum number of iterations allowed for optimizing the alpha matte, ensuring a balance between quality and computational efficiency.
    - Comfy dtype: INT
    - Python dtype: int
- estimate_fg
    - A flag indicating whether to also estimate the foreground in addition to the alpha matte, providing more complete separation of image elements.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- alpha
    - The extracted alpha matte, representing the transparency levels of the foreground elements in the image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- fg
    - The estimated image foreground obtained when the estimate_fg flag is true.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- bg
    - The estimated image background, suitable for compositing or further processing.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class AlphaMatte:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "images": ("IMAGE",),
                "alpha_trimap": ("IMAGE",),
                "preblur": ("INT", {
                    "default": 8,
                    "min": 0,
                    "max": 256,
                    "step": 1
                }),
                "blackpoint": ("FLOAT", {
                    "default": 0.01,
                    "min": 0.0,
                    "max": 0.99,
                    "step": 0.01
                }),
                "whitepoint": ("FLOAT", {
                    "default": 0.99,
                    "min": 0.01,
                    "max": 1.0,
                    "step": 0.01
                }),
                "max_iterations": ("INT", {
                    "default": 1000,
                    "min": 100,
                    "max": 10000,
                    "step": 100
                }),
                "estimate_fg": (["true", "false"],),
            },
        }

    RETURN_TYPES = ("IMAGE", "IMAGE", "IMAGE",)
    RETURN_NAMES = ("alpha", "fg", "bg",)
    FUNCTION = "alpha_matte"

    CATEGORY = "image/filters"

    def alpha_matte(self, images, alpha_trimap, preblur, blackpoint, whitepoint, max_iterations, estimate_fg):
        
        d = preblur * 2 + 1
        
        i_dup = copy.deepcopy(images.cpu().numpy().astype(np.float64))
        a_dup = copy.deepcopy(alpha_trimap.cpu().numpy().astype(np.float64))
        fg = copy.deepcopy(images.cpu().numpy().astype(np.float64))
        bg = copy.deepcopy(images.cpu().numpy().astype(np.float64))
        
        
        for index, image in enumerate(i_dup):
            trimap = a_dup[index][:,:,0] # convert to single channel
            if preblur > 0:
                trimap = cv2.GaussianBlur(trimap, (d, d), 0)
            trimap = fix_trimap(trimap, blackpoint, whitepoint)
            
            alpha = estimate_alpha_cf(image, trimap, laplacian_kwargs={"epsilon": 1e-6}, cg_kwargs={"maxiter":max_iterations})
            
            if estimate_fg == "true":
                fg[index], bg[index] = estimate_foreground_ml(image, alpha, return_background=True)
            
            a_dup[index] = np.stack([alpha, alpha, alpha], axis = -1) # convert back to rgb
        
        return (
            torch.from_numpy(a_dup.astype(np.float32)), # alpha
            torch.from_numpy(fg.astype(np.float32)), # fg
            torch.from_numpy(bg.astype(np.float32)), # bg
            )

```
