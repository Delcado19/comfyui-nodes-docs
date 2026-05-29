# Documentation
- Class name: SeargeSDXLBasePromptEncoder
- Category: Searge/_deprecated_/ClipEncoding
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

The SeargeSDXLBasePromptEncoder class acts as an intermediary for processing and encoding text inputs into a format usable by the CLIP model. It is designed to handle text encoding tasks by balancing and aligning the lengths of positive and negative text prompts, ensuring compatibility with the model's requirements.

# Input types
## Required
- base_clip
    - The base_clip parameter is essential to the node's functionality, as it provides the foundation for text tokenization and encoding. It is a CLIP model instance used to tokenize and encode input text prompts.
    - Comfy dtype: CLIP
    - Python dtype: CLIP
- pos_g
    - The positive global text input is critical for generating positive conditioning data. It influences the overall sentiment and direction of the encoding process.
    - Comfy dtype: STRING
    - Python dtype: str
- pos_l
    - The positive local text input is important for refining positive conditioning data. It helps add granularity and specificity to the encoding process.
    - Comfy dtype: STRING
    - Python dtype: str
- neg_g
    - The negative global text input is crucial for producing negative conditioning data. It shapes the contrast and boundaries of the encoding process.
    - Comfy dtype: STRING
    - Python dtype: str
- neg_l
    - The negative local text input is important for detailing negative conditioning data. It helps improve the precision and focus of the encoding process.
    - Comfy dtype: STRING
    - Python dtype: str
- base_width
    - The base_width parameter determines the width dimension of the base image during the encoding process. It is an important component of data spatial configuration.
    - Comfy dtype: INT
    - Python dtype: int
- base_height
    - The base_height parameter sets the height dimension of the base image during the encoding process. It is critical for maintaining the aspect ratio and structural integrity of the data.
    - Comfy dtype: INT
    - Python dtype: int
- crop_w
    - The crop_w parameter is used to determine the width of the cropped region from the base image. It affects the focus and framing of the encoded data.
    - Comfy dtype: INT
    - Python dtype: int
- crop_h
    - The crop_h parameter specifies the height of the cropped region from the base image. It is important for the composition and layout of the encoded data.
    - Comfy dtype: INT
    - Python dtype: int
- target_width
    - The target_width parameter outlines the desired width of the final output. It is critical in guiding the resizing and scaling operations of the encoding process.
    - Comfy dtype: INT
    - Python dtype: int
- target_height
    - The target_height parameter defines the desired height of the final output. It is important for aligning the dimensions and proportions of the encoded data.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- base_positive
    - The base_positive output contains the encoded positive conditioning data, which is critical for establishing positive context and sentiment in subsequent processing stages.
    - Comfy dtype: CONDITIONING
    - Python dtype: Tuple[str, Dict[str, Union[str, int, torch.Tensor]]]
- base_negative
    - The base_negative output provides the encoded negative conditioning data, which is critical for defining boundaries and contrast during the encoding process.
    - Comfy dtype: CONDITIONING
    - Python dtype: Tuple[str, Dict[str, Union[str, int, torch.Tensor]]]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/jobunk/SeargeSDXL)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
