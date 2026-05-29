# Documentation
- Class name: SaveImagesMikeyML
- Category: Mikey/Image
- Output node: True
- Repo Ref: https://github.com/bash-j/mikey_nodes

The SaveImagesMikeyML node is responsible for saving images to a specified directory with a customizable naming scheme. It allows the inclusion of various metadata elements such as timestamps, counter values, and additional text. The node ensures filenames are sanitized and adhere to predefined length limits.

# Input types
## Required
- images
    - The images parameter is critical as it defines the actual image data to be saved. It influences the node's execution by determining what content is written to the output file.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
## Optional
- sub_directory
    - The sub_directory parameter specifies a subdirectory within the output directory where images will be saved. This is important for organizing saved files into specific categories or groups.
    - Comfy dtype: STRING
    - Python dtype: str
- filename_text_1
    - The filename_text_1 parameter allows users to define a piece of text that will be included in the filename of the saved image. It helps customize the filename.
    - Comfy dtype: STRING
    - Python dtype: str
- filename_text_2
    - Similar to filename_text_1, this parameter adds another customizable text element to the filename. It enhances the flexibility of the naming convention.
    - Comfy dtype: STRING
    - Python dtype: str
- filename_text_3
    - This is the third customizable text parameter for the filename, providing users with more options to include specific information in the saved image's filename.
    - Comfy dtype: STRING
    - Python dtype: str
- filename_separator
    - The filename_separator parameter determines the character or string used to separate different text elements in the filename. It is crucial for defining the structure of the filename.
    - Comfy dtype: STRING
    - Python dtype: str
- timestamp
    - The timestamp parameter indicates whether a timestamp should be included in the filename. It plays a role in version control and tracking when images are saved.
    - Comfy dtype: COMBO['true', 'false']
    - Python dtype: str
- counter_type
    - The counter_type parameter specifies the method for incrementing a counter in the filename, which can be based on folder structure or filename pattern. It is important for ensuring the uniqueness of filenames.
    - Comfy dtype: COMBO['none', 'folder', 'filename']
    - Python dtype: str
- filename_text_1_pos
    - The filename_text_1_pos parameter sets the position of the first text element in the filename. It is important for controlling the order of elements in the filename.
    - Comfy dtype: INT
    - Python dtype: int
- filename_text_2_pos
    - This parameter determines the position of the second text element in the filename, allowing users to arrange text elements according to their preferences.
    - Comfy dtype: INT
    - Python dtype: int
- filename_text_3_pos
    - The filename_text_3_pos parameter is used to set the position of the third text element in the filename, contributing to the overall organization of the filename.
    - Comfy dtype: INT
    - Python dtype: int
- timestamp_pos
    - The timestamp_pos parameter defines the position of the timestamp in the filename. It affects the overall arrangement of filename components.
    - Comfy dtype: INT
    - Python dtype: int
- timestamp_type
    - The timestamp_type parameter specifies the source of the timestamp used in the filename, which can be based on the job's start time or the time the image was saved.
    - Comfy dtype: COMBO['job', 'save_time']
    - Python dtype: str
- counter_pos
    - The counter_pos parameter specifies where the counter appears in the filename. It is crucial for maintaining the order of saved files.
    - Comfy dtype: INT
    - Python dtype: int
- extra_metadata
    - The extra_metadata parameter allows additional metadata to be included in the PNG info of the saved image. It provides a way to store extra information alongside the image data.
    - Comfy dtype: STRING
    - Python dtype: str
- prompt
    - The prompt parameter is used to inject contextual information into the filename generation process. It can influence how the filename is constructed based on the provided content.
    - Comfy dtype: PROMPT
    - Python dtype: Dict[str, Any]
- extra_pnginfo
    - The extra_pnginfo parameter allows additional information in the PNG metadata to be included in the filename. This is useful for embedding additional details that can be retrieved later.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: Dict[str, Any]

# Output types
- ui
    - The ui parameter serves as an interface for presenting results to the user. It typically contains a list of dictionaries, each representing a saved image with its filename and subfolder information.
    - Comfy dtype: COMBO[Dict[str, List[Dict[str, str]]]]
    - Python dtype: Dict[str, List[Dict[str, str]]]
- images
    - The images parameter in the ui output contains details about each saved image, including the filename and the subdirectory where it was saved.
    - Comfy dtype: COMBO[List[Dict[str, str]]]
    - Python dtype: List[Dict[str, str]]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/bash-j/mikey_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
