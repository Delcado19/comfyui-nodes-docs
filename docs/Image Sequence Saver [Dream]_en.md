
# Documentation
- Class name: Image Sequence Saver [Dream]
- Category: ✨ Dream/🌄 image/🎥 animation
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Image Sequence Saver node saves individual frames of an animation sequence to disk, supporting multiple file formats and configuration options. It allows detailed control over naming conventions, directory structure, and file format, facilitating an organized and easily accessible animation frame library.

# Input types
## Required
- frame_counter
- Specify the current frame in the animation sequence to determine the filename and, based on the 'at_end' parameter, decide whether to continue the saving process.
    - Comfy dtype: FRAME_COUNTER
    - Python dtype: FrameCounter
- image
- Provide the image to save for the current frame, representing a single snapshot in the animation sequence.
    - Comfy dtype: IMAGE
    - Python dtype: DreamImage
- directory_path
- Define the target directory path where image files will be saved, enabling organized storage of animation frames.
    - Comfy dtype: STRING
    - Python dtype: str
- prefix
- Add a prefix to each saved image filename, helping identify and organize frames within the directory.
    - Comfy dtype: STRING
    - Python dtype: str
- digits
- Set the number of digits for zero‑padding the frame number in the filename, ensuring consistent naming conventions.
    - Comfy dtype: INT
    - Python dtype: int
- at_end
- Determine the behavior when the end of the animation sequence is reached, offering options to stop output, raise an error, or continue execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- filetype
- Specify the file format for saved images, including PNG with or without embedded workflow information and JPG options.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- sequence
- Output the updated animation sequence after saving the current frame, reflecting any changes or additions.
    - Comfy dtype: ANIMATION_SEQUENCE
    - Python dtype: AnimationSequence.ID
- log_entry
- Log entries detail the result of the save operation, including success messages or error information.
    - Comfy dtype: LOG_ENTRY
    - Python dtype: LogEntry.ID


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class DreamImageSequenceOutput:
    NODE_NAME = "Image Sequence Saver"
    ICON = "💾"

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": SharedTypes.frame_counter | {
                "image": ("IMAGE",),
                "directory_path": ("STRING", {"default": comfy_paths.output_directory, "multiline": False}),
                "prefix": ("STRING", {"default": 'frame', "multiline": False}),
                "digits": ("INT", {"default": 5}),
                "at_end": (["stop output", "raise error", "keep going"],),
                "filetype": (['png with embedded workflow', "png", 'jpg'],),
            },
            "hidden": {
                "prompt": "PROMPT",
                "extra_pnginfo": "EXTRA_PNGINFO"
            },
        }

    CATEGORY = NodeCategories.IMAGE_ANIMATION
    RETURN_TYPES = (AnimationSequence.ID, LogEntry.ID)
    OUTPUT_NODE = True
    RETURN_NAMES = ("sequence", "log_entry")
    FUNCTION = "save"

    @classmethod
    def IS_CHANGED(cls, *values):
        return hashed_as_strings(*values)

    def _get_new_filename(self, current_frame, prefix, digits, filetype):
        return prefix + "_" + str(current_frame).zfill(digits) + "." + filetype.split(" ")[0]

    def _save_single_image(self, dream_image: DreamImage, batch_counter, frame_counter: FrameCounter,
                           directory_path,
                           prefix, digits, filetype, prompt, extra_pnginfo, at_end, logger):

        if at_end == "stop output" and frame_counter.is_after_last_frame:
            logger("Reached end of animation - not saving output!")
            return ()
        if at_end == "raise error" and frame_counter.is_after_last_frame:
            logger("Reached end of animation - raising error to stop processing!")
            raise Exception("Reached end of animation!")
        filename = self._get_new_filename(frame_counter.current_frame, prefix, digits, filetype)
        if batch_counter >= 0:
            filepath = os.path.join(directory_path, "batch_" + (str(batch_counter).zfill(4)), filename)
        else:
            filepath = os.path.join(directory_path, filename)
        save_dir = os.path.dirname(filepath)
        if not os.path.isdir(save_dir):
            os.makedirs(save_dir)
        if filetype.startswith("png"):
            dream_image.save_png(filepath, filetype == 'png with embedded workflow', prompt, extra_pnginfo)
        elif filetype == "jpg":
            dream_image.save_jpg(filepath, int(CONFIG.get("encoding.jpeg_quality", 95)))
        logger("Saved {} in {}".format(filename, os.path.abspath(save_dir)))
        return ()

    def _generate_animation_sequence(self, filetype, directory_path, frame_counter):
        if filetype.startswith("png"):
            pattern = "*.png"
        else:
            pattern = "*.jpg"
        frames = list_images_in_directory(directory_path, pattern, False)
        return AnimationSequence(frame_counter, frames)

    def save(self, image, **args):
        log_texts = list()
        logger = lambda s: log_texts.append(s)
        if not args.get("directory_path", ""):
            args["directory_path"] = comfy_paths.output_directory
        args["logger"] = logger
        proc = DreamImageProcessor(image, **args)
        proc.process(self._save_single_image)
        frame_counter = args["frame_counter"]
        log_entry = LogEntry([])
        for text in log_texts:
            log_entry = log_entry.add(text)
        if frame_counter.is_final_frame:
            return (self._generate_animation_sequence(args["filetype"], args["directory_path"],
                                                      frame_counter), log_entry)
        else:
            return (AnimationSequence(frame_counter), log_entry)

```
