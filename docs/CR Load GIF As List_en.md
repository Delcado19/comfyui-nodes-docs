# Documentation
- Class name: CR_LoadGIFAsList
- Category: Comfyroll/List/IO
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_LoadGIFAsList is a node for loading and processing GIF files, capable of extracting individual frames and their corresponding masks. It processes a series of GIF files by specifying a starting frame and a maximum number of frames. In the Comfyroll Studio environment, this node is essential for preparing GIF data for further manipulation and analysis.

# Input types
## Required
- input_folder
    - The input_folder parameter specifies the directory containing the GIF files to load. It is critical for the node to locate and access the correct GIF files for processing.
    - Comfy dtype: STRING
    - Python dtype: str
- gif_filename
    - The gif_filename parameter defines the name of the GIF file to load. It plays a key role in identifying a specific GIF file among many options.
    - Comfy dtype: STRING
    - Python dtype: str
- start_frame
    - The start_frame parameter indicates the frame number from which the node should begin loading GIF frames. It is significant in controlling the starting point of the frame extraction process.
    - Comfy dtype: INT
    - Python dtype: int
- max_frames
    - The max_frames parameter sets the maximum number of frames to extract from the GIF. It is important for limiting the scope of frame extraction and managing resource usage.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- input_path
    - The optional input_path parameter allows specifying a custom path for the GIF file, overriding the default directory structure. It provides flexibility in file location for specific use cases.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- IMAGE
    - The IMAGE output contains the frames loaded from the GIF file for further processing or visualization in Comfyroll Studio workflows.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
- MASK
    - The MASK output provides masks corresponding to each frame, usable for segmentation or other image processing tasks requiring transparency information.
    - Comfy dtype: MASK
    - Python dtype: List[torch.Tensor]
- show_help
    - The show_help output provides a link to documentation for further assistance and guidance when using the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_LoadGIFAsList:

    @classmethod
    def INPUT_TYPES(cls):
        input_dir = folder_paths.input_directory
        image_folder = [name for name in os.listdir(input_dir) if os.path.isdir(os.path.join(input_dir, name))]
        return {'required': {'input_folder': (sorted(image_folder),), 'gif_filename': ('STRING', {'multiline': False, 'default': 'text'}), 'start_frame': ('INT', {'default': 0, 'min': 0, 'max': 99999}), 'max_frames': ('INT', {'default': 1, 'min': 1, 'max': 99999})}, 'optional': {'input_path': ('STRING', {'default': '', 'multiline': False})}}
    RETURN_TYPES = ('IMAGE', 'MASK', 'STRING')
    RETURN_NAMES = ('IMAGE', 'MASK', 'show_help')
    OUTPUT_IS_LIST = (True, True, False)
    FUNCTION = 'load_gif'
    CATEGORY = icons.get('Comfyroll/List/IO')

    def load_gif(self, input_folder, gif_filename, start_frame, max_frames, input_path=None):
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/List-Nodes#cr-load-gif-images'
        if input_path != '' and input_path is not None:
            if not os.path.exists(input_path):
                print(f'[Warning] CR Image List: The input_path `{input_path}` does not exist')
                return ('',)
            in_path = input_path
        else:
            input_dir = folder_paths.input_directory
            in_path = os.path.join(input_dir, input_folder)
        gif_file_path = os.path.join(in_path, gif_filename)
        frames_list = []
        masks_list = []
        try:
            with Image.open(gif_file_path) as gif_image:
                for (i, frame) in enumerate(ImageSequence.Iterator(gif_image)):
                    if i < start_frame:
                        continue
                    if max_frames is not None and i >= start_frame + max_frames:
                        break
                    img = frame.copy()
                    (width, height) = img.size
                    frames_list.append(pil2tensor(img.convert('RGB')))
                    tensor_img = pil2tensor(img)
                    masks_list.append(tensor2rgba(tensor_img)[:, :, :, 0])
            images = torch.cat(frames_list, dim=0)
            images_out = [images[i:i + 1, ...] for i in range(images.shape[0])]
            masks = torch.cat(masks_list, dim=0)
            masks_out = [masks[i:i + 1, ...] for i in range(masks.shape[0])]
            return (images_out, masks_out, show_help)
        except Exception as e:
            print(f'Error: {e}')
            return (None, None, show_help)
```