# Documentation
- Class name: AnimateDiffCombine
- Category: Animate Diff
- Output node: True
- Repo Ref: https://github.com/ArtVentureX/comfyui-animatediff.git

The AnimateDiffCombine node is designed to generate animated GIFs from a sequence of images. It processes input images to create coherent animations by adjusting frame rate and loop count, allowing for customized control over the final output. The node also provides the option to save the generated GIF and includes a ping-pong effect feature, enhancing the visual appeal of the animation.

# Input types
## Required
- images
    - The 'image' parameter is the sequence of image tensors used by the node to generate animation frames. It is essential to the node's operation, as it directly affects the content and quality of the output GIF.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
## Optional
- frame_rate
    - The 'frame_rate' parameter determines the speed at which the animation plays. It is an important factor in setting the rhythm of the GIF, influencing the transition speed between frames.
    - Comfy dtype: INT
    - Python dtype: int
- loop_count
    - The 'loop_count' parameter specifies how many times the animation should loop. It is important in controlling the behavior of the GIF, particularly when determining whether it should loop indefinitely or for a set number of times.
    - Comfy dtype: INT
    - Python dtype: int
- save_image
    - The 'save_image' parameter indicates whether the generated GIF should be saved to the output directory. It plays a role in the node's functionality, determining whether the final product should be saved for future use.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- filename_prefix
    - The 'filename_prefix' parameter provides a prefix for the saved GIF filename. It is essential for identifying and organizing output files, ensuring they are easily distinguishable from other files.
    - Comfy dtype: STRING
    - Python dtype: str
- format
    - The 'format' parameter defines the file format of the output GIF. It is important because it determines the type of file that will be created, affecting the animation's compatibility and appearance across different platforms.
    - Comfy dtype: COMBO[image/gif, image/webp]
    - Python dtype: str
- pingpong
    - The 'pingpong' parameter, when set to True, creates a ping-pong effect in the animation by reversing the order of frames, adding a unique visual element to the GIF.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- prompt
    - The 'prompt' parameter is used to add a text description or metadata to the GIF, which is useful for providing context or additional information about the animation.
    - Comfy dtype: PROMPT
    - Python dtype: str
- extra_pnginfo
    - The 'extra_pnginfo' parameter allows for the inclusion of additional metadata in the PNG files that make up the GIF. It can enhance the informational richness of the output files.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: Dict[str, str]

# Output types
- ui
    - The 'ui' parameter in the output is a dictionary containing information about the generated GIF, including the file path and format. It is important because it provides the user with a reference to the output file for further use or sharing.
    - Comfy dtype: DICT
    - Python dtype: Dict[str, List[Dict[str, Union[str, Dict[str, str]]]]

# Usage tips
- Infra type: CPU

# Source code
```
class AnimateDiffCombine:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'images': ('IMAGE',), 'frame_rate': ('INT', {'default': 8, 'min': 1, 'max': 24, 'step': 1}), 'loop_count': ('INT', {'default': 0, 'min': 0, 'max': 100, 'step': 1}), 'save_image': ('BOOLEAN', {'default': True}), 'filename_prefix': ('STRING', {'default': 'animate_diff'}), 'format': (['image/gif', 'image/webp'] + video_formats,), 'pingpong': ('BOOLEAN', {'default': False})}, 'hidden': {'prompt': 'PROMPT', 'extra_pnginfo': 'EXTRA_PNGINFO'}}
    RETURN_TYPES = ()
    OUTPUT_NODE = True
    CATEGORY = 'Animate Diff'
    FUNCTION = 'generate_gif'

    def generate_gif(self, images, frame_rate: int, loop_count: int, save_image=True, filename_prefix='AnimateDiff', format='image/gif', pingpong=False, prompt=None, extra_pnginfo=None):
        frames: List[Image.Image] = []
        for image in images:
            img = 255.0 * image.cpu().numpy()
            img = Image.fromarray(np.clip(img, 0, 255).astype(np.uint8))
            frames.append(img)
        output_dir = folder_paths.get_output_directory() if save_image else folder_paths.get_temp_directory()
        (full_output_folder, filename, counter, subfolder, _) = folder_paths.get_save_image_path(filename_prefix, output_dir)
        metadata = PngInfo()
        if prompt is not None:
            metadata.add_text('prompt', json.dumps(prompt))
        if extra_pnginfo is not None:
            for x in extra_pnginfo:
                metadata.add_text(x, json.dumps(extra_pnginfo[x]))
        file = f'{filename}_{counter:05}_.png'
        file_path = os.path.join(full_output_folder, file)
        frames[0].save(file_path, pnginfo=metadata, compress_level=4)
        if pingpong:
            frames = frames + frames[-2:0:-1]
        (format_type, format_ext) = format.split('/')
        if format_type == 'image':
            file = f'{filename}_{counter:05}_.{format_ext}'
            file_path = os.path.join(full_output_folder, file)
            frames[0].save(file_path, format=format_ext.upper(), save_all=True, append_images=frames[1:], duration=round(1000 / frame_rate), loop=loop_count, compress_level=4)
        else:
            import shutil
            import subprocess
            ffmpeg_path = shutil.which('ffmpeg')
            if ffmpeg_path is None:
                raise ProcessLookupError('Could not find ffmpeg')
            video_format_path = os.path.join(video_formats_dir, format_ext + '.json')
            with open(video_format_path, 'r') as stream:
                video_format = json.load(stream)
            file = f"{filename}_{counter:05}_.{video_format['extension']}"
            file_path = os.path.join(full_output_folder, file)
            dimensions = f'{frames[0].width}x{frames[0].height}'
            args = [ffmpeg_path, '-v', 'error', '-f', 'rawvideo', '-pix_fmt', 'rgb24', '-s', dimensions, '-r', str(frame_rate), '-i', '-'] + video_format['main_pass'] + [file_path]
            env = os.environ
            if 'environment' in video_format:
                env.update(video_format['environment'])
            with subprocess.Popen(args, stdin=subprocess.PIPE, env=env) as proc:
                for frame in frames:
                    proc.stdin.write(frame.tobytes())
        previews = [{'filename': file, 'subfolder': subfolder, 'type': 'output' if save_image else 'temp', 'format': format}]
        return {'ui': {'videos': previews}}
```