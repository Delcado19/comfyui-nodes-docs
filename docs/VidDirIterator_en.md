
# Documentation
- Class name: VidDirIterator
- Category: cspnodes
- Output node: False

The VidDirIterator node is designed to browse directories containing video files and retrieve video file paths based on an index. This functionality helps organize and select video content within a specified directory, streamlining the process of accessing and using video files in various applications.

# Input types
## Required
- directory_path
    - Specifies the directory path containing video files. This path is critical for the node to locate and list video files for subsequent operations.
    - Comfy dtype: STRING
    - Python dtype: str
- video_index
    - Determines the index used to retrieve a video file from the sorted list of video files in the directory. This index is used to select a specific video file, enabling precise access to video content.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- string
    - Returns the path of the video file at the specified index in the directory. This output facilitates direct access to the selected video file for further processing or playback.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class VidDirIterator:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "directory_path": ("STRING", {}),
                "video_index": ("INT", {"default": 0})
            }
        }

    RETURN_TYPES = ("STRING",)
    FUNCTION = "get_video_path_by_index"
    CATEGORY = "cspnodes"

    def get_video_path_by_index(self, directory_path, video_index):
        # Get list of video files sorted by modification time (most recent first)
        video_files = sorted(
            [os.path.join(directory_path, f) for f in os.listdir(directory_path)
             if f.lower().endswith(('.mov', '.mp4'))],
            key=lambda x: os.path.getmtime(x),
            reverse=True
        )

        # Wrap the index around using modulo
        video_index = video_index % len(video_files)

        # Return the video file path as a string
        return (video_files[video_index],)

```
