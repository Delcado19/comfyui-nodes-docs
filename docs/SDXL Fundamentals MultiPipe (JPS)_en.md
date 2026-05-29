
# Documentation
- Class name: `SDXL Fundamentals MultiPipe (JPS)`
- Category: `JPS Nodes/Pipes`
- Output node: `False`

The SDXL Fundamentals MultiPipe node aims to aggregate and simplify the configuration process of basic components for image synthesis, including models, CLIP, and conditioning settings. It simplifies setup by allowing optional inputs for various components and returns a comprehensive set of configurations, serving as a central node for initializing and optimizing the image generation pipeline.

# Input types
## Required
## Optional
- **`vae`**
    - Optional VAE component for the image synthesis process, affecting the initial stage of image generation.
    - Comfy dtype: VAE
    - Python dtype: Optional[VAE]
- **`model_base`**
    - Optional base model for the initial image generation process, affecting the core synthesis mechanism.
    - Comfy dtype: MODEL
    - Python dtype: Optional[Model]
- **`model_refiner`**
    - Optional refiner model for enhancing details of generated images, improving final output quality.
    - Comfy dtype: MODEL
    - Python dtype: Optional[Model]
- **`clip_base`**
    - Optional base CLIP model for guiding image synthesis towards desired outcomes based on text descriptions.
    - Comfy dtype: CLIP
    - Python dtype: Optional[CLIP]
- **`clip_refiner`**
    - Optional refiner CLIP model for refining generated images to ensure closer alignment with intended visual concepts.
    - Comfy dtype: CLIP
    - Python dtype: Optional[CLIP]
- **`pos_base`**
    - Optional base positive conditioning for guiding image generation towards specific attributes or themes.
    - Comfy dtype: CONDITIONING
    - Python dtype: Optional[Conditioning]
- **`neg_base`**
    - Optional base negative conditioning for avoiding certain attributes or themes in generated images.
    - Comfy dtype: CONDITIONING
    - Python dtype: Optional[Conditioning]
- **`pos_refiner`**
    - Optional refiner positive conditioning for further refining generated images to be closer to specific attributes or themes.
    - Comfy dtype: CONDITIONING
    - Python dtype: Optional[Conditioning]
- **`neg_refiner`**
    - Optional refiner negative conditioning for further avoiding certain attributes or themes in refined images.
    - Comfy dtype: CONDITIONING
    - Python dtype: Optional[Conditioning]
- **`seed`**
    - Optional seed value for deterministic image generation, ensuring reproducibility of results.
    - Comfy dtype: INT
    - Python dtype: Optional[int]

# Output types
- **`vae`**
    - Comfy dtype: VAE
    - VAE component used in the image synthesis process.
    - Python dtype: VAE
- **`model_base`**
    - Comfy dtype: MODEL
    - Base model for initial image generation.
    - Python dtype: Model
- **`model_refiner`**
    - Comfy dtype: MODEL
    - Refiner model for enhancing details of generated images.
    - Python dtype: Model
- **`clip_base`**
    - Comfy dtype: CLIP
    - CLIP model for guiding image synthesis in the base setting.
    - Python dtype: CLIP
- **`clip_refiner`**
    - Comfy dtype: CLIP
    - CLIP model for refining generated images.
    - Python dtype: CLIP
- **`pos_base`**
    - Comfy dtype: CONDITIONING
    - Base positive conditioning applied to guide image generation.
    - Python dtype: Conditioning
- **`neg_base`**
    - Comfy dtype: CONDITIONING
    - Base negative conditioning applied to avoid certain themes in generated images.
    - Python dtype: Conditioning
- **`pos_refiner`**
    - Comfy dtype: CONDITIONING
    - Refiner positive conditioning applied to further refine generated images.
    - Python dtype: Conditioning
- **`neg_refiner`**
    - Comfy dtype: CONDITIONING
    - Refiner negative conditioning applied to further avoid certain themes in refined images.
    - Python dtype: Conditioning
- **`seed`**
    - Comfy dtype: INT
    - Seed value for deterministic image generation.
    - Python dtype: int


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class SDXL_Fundamentals_MultiPipe:

    CATEGORY = 'JPS Nodes/Pipes'
    RETURN_TYPES = ("VAE","MODEL","MODEL","CLIP","CLIP","CONDITIONING","CONDITIONING","CONDITIONING","CONDITIONING","INT",)
    RETURN_NAMES = ("vae","model_base","model_refiner","clip_base","clip_refiner","pos_base","neg_base","pos_refiner","neg_refiner","seed",)
    FUNCTION = "get_sdxlfund"

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {},
            "optional": {
                "vae": ("VAE",),
                "model_base": ("MODEL",),
                "model_refiner": ("MODEL",),
                "clip_base": ("CLIP",),
                "clip_refiner": ("CLIP",),
                "pos_base": ("CONDITIONING",), 
                "neg_base": ("CONDITIONING",),
                "pos_refiner": ("CONDITIONING",),
                "neg_refiner": ("CONDITIONING",),
                "seed": ("INT", {}),
            }
        }

    def get_sdxlfund(self,vae=None,model_base=None,model_refiner=None,clip_base=None,clip_refiner=None,pos_base=None,neg_base=None,pos_refiner=None,neg_refiner=None,seed=None):
        
        return (vae,model_base,model_refiner,clip_base,clip_refiner,pos_base,neg_base,pos_refiner,neg_refiner,seed,)

```
