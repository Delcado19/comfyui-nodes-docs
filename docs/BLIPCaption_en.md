
# Documentation
- Class name: BLIPCaption
- Category: Art Venture/Captioning
- Output node: False

The BLIPCaption node is designed to generate text descriptions for images using the BLIP model. It utilizes deep learning to analyze visual content and generate descriptive, human-like text based on the elements and context of the image. This node can be customized by adding prefixes and suffixes to the generated descriptions, and it supports adjusting the length of the output text to meet specific requirements.

# Input types
## Required
- image
    - Input image for which a description needs to be generated. This is the primary data processed by the node to generate a text description.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- min_length
    - Specifies the minimum length of the generated description. This parameter helps ensure that the description is not too short and conveys enough detail.
    - Comfy dtype: INT
    - Python dtype: int
- max_length
    - Sets the maximum length of the description. This constraint ensures that the generated text is concise and avoids overly lengthy descriptions.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- device_mode
    - Determines on which device (CPU or GPU) the BLIP model will run, optimizing performance based on available hardware.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- prefix
    - Optional text to prepend to the generated description, allowing inclusion of additional context or information.
    - Comfy dtype: STRING
    - Python dtype: str
- suffix
    - Optional text to append to the generated description, suitable for adding extra details or notes.
    - Comfy dtype: STRING
    - Python dtype: str
- enabled
    - A flag to enable or disable the description generation function. When disabled, it returns a default description structure.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- blip_model
    - Optional pre-loaded BLIP model for generating descriptions. If not provided, the node will load the model based on available checkpoints.
    - Comfy dtype: BLIP_MODEL
    - Python dtype: torch.nn.Module

# Output types
- caption
    - The generated description for the input image, optionally enriched with a prefix and suffix. These descriptions provide a textual representation of the visual content.
    - Comfy dtype: STRING
    - Python dtype: List[str]


## Usage tips
- Infra type: `GPU`
- Common nodes:
    - [ShowText|pysssss](../../ComfyUI-Custom-Scripts/Nodes/ShowText|pysssss.md)



## Source code
```python
class BlipCaption:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "image": ("IMAGE",),
                "min_length": (
                    "INT",
                    {
                        "default": 24,
                        "min": 0,  # minimum value
                        "max": 200,  # maximum value
                        "step": 1,  # slider's step
                    },
                ),
                "max_length": (
                    "INT",
                    {
                        "default": 48,
                        "min": 0,  # minimum value
                        "max": 200,  # maximum value
                        "step": 1,  # slider's step
                    },
                ),
            },
            "optional": {
                "device_mode": (["AUTO", "Prefer GPU", "CPU"],),
                "prefix": ("STRING", {"default": ""}),
                "suffix": ("STRING", {"default": ""}),
                "enabled": ("BOOLEAN", {"default": True}),
                "blip_model": ("BLIP_MODEL",),
            },
        }

    RETURN_TYPES = ("STRING",)
    RETURN_NAMES = ("caption",)
    OUTPUT_IS_LIST = (True,)
    FUNCTION = "blip_caption"
    CATEGORY = "Art Venture/Captioning"

    def blip_caption(
        self, image, min_length, max_length, device_mode="AUTO", prefix="", suffix="", enabled=True, blip_model=None
    ):
        if not enabled:
            return ([join_caption("", prefix, suffix)],)

        if blip_model is None:
            ckpts = folder_paths.get_filename_list("blip")
            if len(ckpts) == 0:
                ckpts = download_model(
                    model_path=model_dir,
                    model_url=model_url,
                    ext_filter=[".pth"],
                    download_name="model_base_caption_capfilt_large.pth",
                )
            blip_model = load_blip(ckpts[0])

        device = gpu if device_mode != "CPU" else cpu
        blip_model = blip_model.to(device)

        try:
            captions = []

            with torch.no_grad():
                for img in image:
                    img = tensor2pil(img)
                    tensor = transformImage(img)
                    caption = blip_model.generate(
                        tensor,
                        sample=False,
                        num_beams=1,
                        min_length=min_length,
                        max_length=max_length,
                    )

                    caption = join_caption(caption[0], prefix, suffix)
                    captions.append(caption)

            return (captions,)
        except:
            raise
        finally:
            if device_mode == "AUTO":
                blip_model = blip_model.to(cpu)

```
