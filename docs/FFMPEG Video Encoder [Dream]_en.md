
# Documentation
- Class name: FFMPEG Video Encoder [Dream]
- Category: ✨ Dream/🎥 animation/⚙ postprocessing
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The FFMPEG Video Encoder node encodes a series of images into a video file using FFMPEG. It allows frame rate adjustment, optional deletion of source images after encoding, and handles file naming to avoid overwriting, facilitating video creation from individual frames.

# Input types
## Required
- sequence
    - Represents the image sequence to be encoded into video. It is crucial for defining the content and order of frames in the final video output.
    - Comfy dtype: ANIMATION_SEQUENCE
    - Python dtype: AnimationSequence
- name
    - Specifies the base name of the output video file, which can be further adjusted to avoid filename conflicts.
    - Comfy dtype: STRING
    - Python dtype: str
- framerate_factor
    - Multiplier for the sequence frame rate, allowing adjustment of the resulting video speed.
    - Comfy dtype: FLOAT
    - Python dtype: float
- remove_images
    - Determines whether to delete source images after encoding, helping manage disk space.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- log_entry
    - Provides a log entry that records the encoding process and results in detail, including any errors encountered.
    - Comfy dtype: LOG_ENTRY
    - Python dtype: LogEntry


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class DreamVideoEncoder:
    NODE_NAME = "FFMPEG Video Encoder"
    DISPLAY_NAME = "Video Encoder (FFMPEG)"
    ICON = "🎬"

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": SharedTypes.sequence | {
                "name": ("STRING", {"default": 'video', "multiline": False}),
                "framerate_factor": ("FLOAT", {"default": 1.0, "min": 0.01, "max": 100.0}),
                "remove_images": ("BOOLEAN", {"default": True})
            },
        }

    CATEGORY = NodeCategories.ANIMATION_POSTPROCESSING
    RETURN_TYPES = (LogEntry.ID,)
    RETURN_NAMES = ("log_entry",)
    OUTPUT_NODE = True
    FUNCTION = "encode"

    @classmethod
    def IS_CHANGED(cls, sequence: AnimationSequence, **kwargs):
        return sequence.is_defined

    def _find_free_filename(self, filename, defaultdir):
        if os.path.basename(filename) == filename:
            filename = os.path.join(defaultdir, filename)
        n = 1
        tested = filename
        while os.path.exists(tested):
            n += 1
            (b, ext) = os.path.splitext(filename)
            tested = b + "_" + str(n) + ext
        return tested

    def generate_video(self, files, fps, filename, config):
        filename = self._find_free_filename(filename, os.path.dirname(files[0]))
        _ffmpeg(config, files, fps, filename)
        return filename

    def encode(self, sequence: AnimationSequence, name: str, remove_images, framerate_factor):
        if not sequence.is_defined:
            return (LogEntry([]),)

        config = DreamConfig()
        filename = _make_video_filename(name, config.get("ffmpeg.file_extension", "mp4"))
        log_entry = LogEntry([])
        for batch_num in sequence.batches:
            try:
                images = list(sequence.get_image_files_of_batch(batch_num))
                actual_filename = self.generate_video(images, sequence.fps * framerate_factor, filename, config)

                log_entry = log_entry.add("Generated video '{}'".format(actual_filename))
                if remove_images:
                    for imagepath in images:
                        if os.path.isfile(imagepath):
                            os.unlink(imagepath)
            except Exception as e:
                on_error(self.__class__, str(e))
        return (log_entry,)

```
