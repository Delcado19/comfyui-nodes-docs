
# Documentation
- Class name: Save Image w_Metadata
- Category: ImageSaverTools
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Save Image w/Metadata node is dedicated to saving images with additional metadata, enhancing traceability and contextual information of generated images. It supports multiple image formats and can embed custom metadata (such as generation parameters and prompts) directly into the image file.

# Input types
## Required
- images
- The image to be saved, possibly containing additional contextual metadata.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- filename
- The base filename for the saved image, which may include dynamic naming based on other parameters.
    - Comfy dtype: STRING
    - Python dtype: str
- path
- The directory path where the image will be saved.
    - Comfy dtype: STRING
    - Python dtype: str
- extension
- The file format extension for the saved image, supporting PNG, JPEG, WEBP, and other formats.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- steps
- The number of steps involved in the image generation process, which may be included in the metadata.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
- The CFG (classifier-free guidance) scale used during image generation, optionally included in the metadata.
    - Comfy dtype: FLOAT
    - Python dtype: float
- modelname
- The model name used to generate the image, which can be included in the metadata.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- sampler_name
- The sampler name used during generation, optionally included in the metadata.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- scheduler
- The scheduler used during image generation, which can be included in the metadata.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

## Optional
- positive
- Positive prompts or keywords that influence image generation, optionally included in the metadata.
    - Comfy dtype: STRING
    - Python dtype: str
- negative
- Negative prompts or keywords to avoid during generation, optionally included in the metadata.
    - Comfy dtype: STRING
    - Python dtype: str
- seed_value
- The seed value used for random number generation during image creation, optionally included in the metadata.
    - Comfy dtype: INT
    - Python dtype: int
- width
    - The width of the generated image.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height of the generated image.
    - Comfy dtype: INT
    - Python dtype: int
- lossless_webp
- When using WEBP format, a flag indicating whether to save the image in lossless mode.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- quality_jpeg_or_webp
- Quality setting for JPEG or WEBP images, affecting file size and image clarity.
    - Comfy dtype: INT
    - Python dtype: int
- counter
- A counter usable for image naming or sorting, which may be included in the metadata.
    - Comfy dtype: INT
    - Python dtype: int
- time_format
- A timestamp format that can be included in the filename or metadata, providing temporal context for image generation.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
This node has no output types.


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ImageSaveWithMetadata:
    def __init__(self):
        self.output_dir = folder_paths.output_directory

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "images": ("IMAGE", ),
                "filename": ("STRING", {"default": f'%time_%seed', "multiline": False}),
                "path": ("STRING", {"default": '', "multiline": False}),
                "extension": (['png', 'jpeg', 'webp'],),
                "steps": ("INT", {"default": 20, "min": 1, "max": 10000}),
                "cfg": ("FLOAT", {"default": 8.0, "min": 0.0, "max": 100.0}),
                "modelname": (folder_paths.get_filename_list("checkpoints"),),
                "sampler_name": (comfy.samplers.KSampler.SAMPLERS,),
                "scheduler": (comfy.samplers.KSampler.SCHEDULERS,),
            },
            "optional": {
                "positive": ("STRING", {"default": 'unknown', "multiline": True}),
                "negative": ("STRING", {"default": 'unknown', "multiline": True}),
                "seed_value": ("INT", {"default": 0, "min": 0, "max": 0xffffffffffffffff}),
                "width": ("INT", {"default": 512, "min": 1, "max": MAX_RESOLUTION, "step": 8}),
                "height": ("INT", {"default": 512, "min": 1, "max": MAX_RESOLUTION, "step": 8}),
                "lossless_webp": ("BOOLEAN", {"default": True}),
                "quality_jpeg_or_webp": ("INT", {"default": 100, "min": 1, "max": 100}),
                "counter": ("INT", {"default": 0, "min": 0, "max": 0xffffffffffffffff }),
                "time_format": ("STRING", {"default": "%Y-%m-%d-%H%M%S", "multiline": False}),
            },
            "hidden": {
                "prompt": "PROMPT",
                "extra_pnginfo": "EXTRA_PNGINFO"
            },
        }

    RETURN_TYPES = ()
    FUNCTION = "save_files"

    OUTPUT_NODE = True

    CATEGORY = "ImageSaverTools"

    def save_files(self, images, seed_value, steps, cfg, sampler_name, scheduler, positive, negative, modelname, quality_jpeg_or_webp,
                   lossless_webp, width, height, counter, filename, path, extension, time_format, prompt=None, extra_pnginfo=None):
        filename = make_filename(filename, seed_value, modelname, counter, time_format)
        path = make_pathname(path, seed_value, modelname, counter, time_format)
        ckpt_path = folder_paths.get_full_path("checkpoints", modelname)
        basemodelname = parse_name(modelname)
        modelhash = calculate_sha256(ckpt_path)[:10]
        comment = f"{handle_whitespace(positive)}\nNegative prompt: {handle_whitespace(negative)}\nSteps: {steps}, Sampler: {sampler_name}{f'_{scheduler}' if scheduler != 'normal' else ''}, CFG Scale: {cfg}, Seed: {seed_value}, Size: {width}x{height}, Model hash: {modelhash}, Model: {basemodelname}, Version: ComfyUI"
        output_path = os.path.join(self.output_dir, path)

        if output_path.strip() != '':
            if not os.path.exists(output_path.strip()):
                print(f'The path `{output_path.strip()}` specified doesn\'t exist! Creating directory.')
                os.makedirs(output_path, exist_ok=True)    

        filenames = self.save_images(images, output_path, filename, comment, extension, quality_jpeg_or_webp, lossless_webp, prompt, extra_pnginfo)

        subfolder = os.path.normpath(path)
        return {"ui": {"images": map(lambda filename: {"filename": filename, "subfolder": subfolder if subfolder != '.' else '', "type": 'output'}, filenames)}}

    def save_images(self, images, output_path, filename_prefix, comment, extension, quality_jpeg_or_webp, lossless_webp, prompt=None, extra_pnginfo=None) -> list[str]:
        img_count = 1
        paths = list()
        for image in images:
            i = 255. * image.cpu().numpy()
            img = Image.fromarray(np.clip(i, 0, 255).astype(np.uint8))
            if images.size()[0] > 1:
                filename_prefix += "_{:02d}".format(img_count)

            if extension == 'png':
                metadata = PngInfo()
                metadata.add_text("parameters", comment)

                if prompt is not None:
                    metadata.add_text("prompt", json.dumps(prompt))
                if extra_pnginfo is not None:
                    for x in extra_pnginfo:
                        metadata.add_text(x, json.dumps(extra_pnginfo[x]))

                filename = f"{filename_prefix}.png"
                img.save(os.path.join(output_path, filename), pnginfo=metadata, optimize=True)
            else:
                filename = f"{filename_prefix}.{extension}"
                file = os.path.join(output_path, filename)
                img.save(file, optimize=True, quality=quality_jpeg_or_webp, lossless=lossless_webp)
                exif_bytes = piexif.dump({
                    "Exif": {
                        piexif.ExifIFD.UserComment: piexif.helper.UserComment.dump(comment, encoding="unicode")
                    },
                })
                piexif.insert(exif_bytes, file)

            paths.append(filename)
            img_count += 1
        return paths

```
