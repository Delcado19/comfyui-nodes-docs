
# Documentation
- Class name: BetterFilmGrain
- Category: image/filters
- Output node: False

The BetterFilmGrain node enhances images by applying a customizable film grain effect, simulating the texture and look of traditional film photography. It allows fine‑tuning of grain scale, intensity, saturation, and overall tone to achieve the desired aesthetic.

# Input types
## Required
- image
    - The input image to which the film grain effect will be applied. It serves as the base for the grain texture overlay.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- scale
    - Determines the scale of grain particles, affecting their size relative to the image. Smaller scales produce finer grain.
    - Comfy dtype: FLOAT
    - Python dtype: float
- strength
    - Controls the strength of the grain effect; higher values make the grain more pronounced.
    - Comfy dtype: FLOAT
    - Python dtype: float
- saturation
    - Adjusts the color saturation of the grain effect, allowing more or fewer colored grain textures.
    - Comfy dtype: FLOAT
    - Python dtype: float
- toe
    - Modifies the dark‑side response curve of the film, influencing shadow tone and overall contrast of the grain effect.
    - Comfy dtype: FLOAT
    - Python dtype: float
- seed
    - Seed value for random number generation, ensuring reproducibility of the grain pattern.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The output image with the film grain effect applied, showcasing enhanced texture and a film‑like aesthetic.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class BetterFilmGrain:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "image": ("IMAGE",),
                "scale": ("FLOAT", {"default": 0.5, "min": 0.25, "max": 2.0, "step": 0.05}),
                "strength": ("FLOAT", {"default": 0.5, "min": 0.0, "max": 10.0, "step": 0.01}),
                "saturation": ("FLOAT", {"default": 0.7, "min": 0.0, "max": 2.0, "step": 0.01}),
                "toe": ("FLOAT", {"default": 0.0, "min": -0.2, "max": 0.5, "step": 0.001}),
                "seed": ("INT", {"default": 0, "min": 0, "max": 0xffffffffffffffff}),
            },
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "grain"

    CATEGORY = "image/filters"

    def grain(self, image, scale, strength, saturation, toe, seed):
        t = image.detach().clone()
        torch.manual_seed(seed)
        grain = torch.rand(t.shape[0], int(t.shape[1] // scale), int(t.shape[2] // scale), 3)
        
        YCbCr = RGB2YCbCr(grain)
        YCbCr[:,:,:,0] = cv_blur_tensor(YCbCr[:,:,:,0], 3, 3)
        YCbCr[:,:,:,1] = cv_blur_tensor(YCbCr[:,:,:,1], 15, 15)
        YCbCr[:,:,:,2] = cv_blur_tensor(YCbCr[:,:,:,2], 11, 11)
        
        grain = (YCbCr2RGB(YCbCr) - 0.5) * strength
        grain[:,:,:,0] *= 2
        grain[:,:,:,2] *= 3
        grain += 1
        grain = grain * saturation + grain[:,:,:,1].unsqueeze(3).repeat(1,1,1,3) * (1 - saturation)
        
        grain = torch.nn.functional.interpolate(grain.movedim(-1,1), size=(t.shape[1], t.shape[2]), mode='bilinear').movedim(1,-1)
        t[:,:,:,:3] = torch.clip((1 - (1 - t[:,:,:,:3]) * grain) * (1 - toe) + toe, 0, 1)
        return(t,)

```
