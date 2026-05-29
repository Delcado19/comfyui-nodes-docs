# Documentation
- Class name: samplerSDTurbo
- Category: EasyUse/Sampler
- Output node: True
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

The samplerSDTurbo node is designed to efficiently generate high-quality images through advanced sampling techniques. It operates by subjecting input data to a series of transformations that optimize both speed and visual fidelity. This node is particularly suited for applications requiring image generation from complex datasets, offering a balance between performance and output quality.

# Input types
## Required
- pipe
    - The 'pipe' parameter is the primary input, providing the necessary data and settings for the sampling process. It includes model information, positive and negative examples, and other relevant configurations that guide the node's output generation.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict[str, Any]
- image_output
    - The 'image_output' parameter determines how the generated images are handled. Options include hiding, previewing, saving, or combinations thereof, allowing flexibility in how results are displayed or stored.
    - Comfy dtype: COMBO
    - Python dtype: str
- link_id
    - The 'link_id' parameter is critical for linking generated images to the corresponding requests or processes. It ensures that the correct image is associated with the correct task, streamlining workflows and reducing the likelihood of errors.
    - Comfy dtype: INT
    - Python dtype: int
- save_prefix
    - The 'save_prefix' parameter sets the prefix for saved image files, which is essential for organizing and identifying outputs. This prefix serves as a unique identifier for images, aiding in their retrieval and management.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- model
    - The 'model' parameter allows specifying the particular model to be used during the sampling process. It provides a means to tailor the node's operation to specific requirements or preferences, enhancing the node's versatility and adaptability.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- tile_size
    - The 'tile_size' parameter influences the tiling strategy during image decoding, affecting the resolution and layout of the generated images. This is an optional setting that can be adjusted according to desired output characteristics.
    - Comfy dtype: INT
    - Python dtype: Optional[int]
- prompt
    - The 'prompt' parameter provides a textual description that guides the image generation process. It is a key element for controlling creative direction and ensuring the output aligns with the intended theme or concept.
    - Comfy dtype: PROMPT
    - Python dtype: str
- extra_pnginfo
    - The 'extra_pnginfo' parameter contains additional information related to PNG images, which can be used to refine image processing and enhance the final results.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: Dict[str, Any]
- my_unique_id
    - The 'my_unique_id' parameter is an identifier for tracking unique requests or processes associated with image generation. It plays an important role in managing and associating outputs with their respective tasks or workflows.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: Union[str, int]

# Output types
- pipe
    - The 'pipe' output is a comprehensive structure containing the results of the sampling process, including generated images and associated metadata. It serves as a conduit for passing data between different components of the system, facilitating further processing or analysis.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict[str, Any]
- image
    - The 'image' output contains the generated images, which are the primary result of the sampling process. These images are ready for use and represent the culmination of the node's functionality and the effectiveness of the applied sampling techniques.
    - Comfy dtype: IMAGE
    - Python dtype: List[PIL.Image.Image]

# Usage tips
- Infra type: GPU

# Source code
```
class samplerSDTurbo:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'pipe': ('PIPE_LINE',), 'image_output': (['Hide', 'Preview', 'Save', 'Hide/Save', 'Sender', 'Sender/Save'], {'default': 'Preview'}), 'link_id': ('INT', {'default': 0, 'min': 0, 'max': sys.maxsize, 'step': 1}), 'save_prefix': ('STRING', {'default': 'ComfyUI'})}, 'optional': {'model': ('MODEL',)}, 'hidden': {'tile_size': 'INT', 'prompt': 'PROMPT', 'extra_pnginfo': 'EXTRA_PNGINFO', 'my_unique_id': 'UNIQUE_ID', 'embeddingsList': (folder_paths.get_filename_list('embeddings'),)}}
    RETURN_TYPES = ('PIPE_LINE', 'IMAGE')
    RETURN_NAMES = ('pipe', 'image')
    OUTPUT_NODE = True
    FUNCTION = 'run'
    CATEGORY = 'EasyUse/Sampler'

    def run(self, pipe, image_output, link_id, save_prefix, model=None, tile_size=None, prompt=None, extra_pnginfo=None, my_unique_id=None):
        easyCache.update_loaded_objects(prompt)
        my_unique_id = int(my_unique_id)
        samp_model = pipe['model'] if model is None else model
        samp_positive = pipe['positive']
        samp_negative = pipe['negative']
        samp_samples = pipe['samples']
        samp_vae = pipe['vae']
        samp_clip = pipe['clip']
        samp_seed = pipe['seed']
        samp_sampler = pipe['loader_settings']['sampler']
        sigmas = pipe['loader_settings']['sigmas']
        cfg = pipe['loader_settings']['cfg']
        steps = pipe['loader_settings']['steps']
        disable_noise = False
        preview_latent = True
        if image_output in ('Hide', 'Hide/Save'):
            preview_latent = False
        start_time = int(time.time() * 1000)
        samp_samples = sampler.custom_ksampler(samp_model, samp_seed, steps, cfg, samp_sampler, sigmas, samp_positive, samp_negative, samp_samples, disable_noise, preview_latent)
        end_time = int(time.time() * 1000)
        latent = samp_samples['samples']
        if tile_size is not None:
            samp_images = samp_vae.decode_tiled(latent, tile_x=tile_size // 8, tile_y=tile_size // 8)
        else:
            samp_images = samp_vae.decode(latent).cpu()
        end_decode_time = int(time.time() * 1000)
        spent_time = '扩散:' + str((end_time - start_time) / 1000) + '秒, 解码:' + str((end_decode_time - end_time) / 1000) + '秒'
        easyCache.update_loaded_objects(prompt)
        results = easySave(samp_images, save_prefix, image_output, prompt, extra_pnginfo)
        sampler.update_value_by_id('results', my_unique_id, results)
        new_pipe = {'model': samp_model, 'positive': samp_positive, 'negative': samp_negative, 'vae': samp_vae, 'clip': samp_clip, 'samples': samp_samples, 'images': samp_images, 'seed': samp_seed, 'loader_settings': {**pipe['loader_settings'], 'spent_time': spent_time}}
        sampler.update_value_by_id('pipe_line', my_unique_id, new_pipe)
        del pipe
        if image_output in ('Hide', 'Hide/Save'):
            return {'ui': {}, 'result': sampler.get_output(new_pipe)}
        if image_output in ('Sender', 'Sender/Save'):
            PromptServer.instance.send_sync('img-send', {'link_id': link_id, 'images': results})
        return {'ui': {'images': results}, 'result': sampler.get_output(new_pipe)}
```